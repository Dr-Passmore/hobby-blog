---
slug: raspberry-pi-tide-information-display-epaper
title: Building a Tide Information Display with Raspberry Pi and E-Paper - High Tide, Low Tide, and More!
description: Creating a Tide Information Display with an e-paper screen and a Raspberry Pi Zero. 
authors: passmore
tags: [Raspberry Pi, E-Paper Display, DIY Projects, Beginner Friendly, Python]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Tide%20Display%202023-08-30%20at%2018.43.45.jpg
draft: false
---


Interested in the current ebb and flow of the tides? Using a Raspberry Pi Zero 2 and an E-Paper display, you can create an informative low powered tide display. [The code for this project can be found on my github.](https://github.com/Dr-Passmore/e-paper-tidal-info-project)

In this guide, I will walk you through the steps to build a tide information display that provides frequent updates on tide height and corresponding times of high and low tide. Dive in and embark on this exciting project to stay connected with the rhythm of the ocean.

![Tide Display Example](https://personalblogimages.blob.core.windows.net/websiteimages/vi_4068_20230531_103359.mp4.v4068.th.jpg)

<!--truncate-->

## Overview of the Raspberry Pi E-Paper Display

The project requires only the following parts:

### Required Parts and Equipment

- [Raspberry Pi Zero 2](https://thepihut.com/products/raspberry-pi-zero-2)
- [E-Paper Display](https://thepihut.com/products/three-colour-2-13-eink-display-phat-red-black-white)
- [Raspberry Pi 0 E-Paper Case](https://thepihut.com/products/pi-zero-case-for-waveshare-2-13-eink-display)
- Micro SD Card
- Micro USB wire for power

## Setting Up the Hardware

1. Solder the header pins to the Raspberry Pi Zero (Skip if you purchased a board with pre soldered header pins)
2. Create [SD card with image of Raspberry Pi OS](https://www.raspberrypi.com/documentation/computers/getting-started.html)
3. Insert micro SD card
4. Construct the case
5. Connect the E-Paper Display to your Raspberry Pi pins.
6. Finish case construction
7. Connect power to Raspberry Pi
8. Test that you can connect via terminal that the Raspberry Pi is Running.
9. Check for updates and install
10. Install the required libraries
11. Run test code to confirm screen is working

### Library Installs

```bash
    sudo apt-get update
    sudo apt-get install python3-pip
    sudo apt-get install python3-pil
    sudo apt-get install python3-numpy
    sudo pip3 install RPi.GPIO
    sudo pip3 install spidev
```

### Screen Test

Depending on the Screen you have purchased select the relevant test code file. I have a 2.13 inch Red, Black, and White screen so have used epd_2in13bc_test.py to confirm that the e-paper screen is working as expected.

```bash
git clone https://github.com/waveshare/e-Paper.git
cd e-Paper/RaspberryPi_JetsonNano/python/examples
python3 epd_2in13bc_test.py
```

### Deploy the code

Clone the code from my [github repo](https://github.com/Dr-Passmore/e-paper-tidal-info-project)

```bash
git clone https://github.com/Dr-Passmore/e-paper-tidal-info-project
cd e-paper-tidal-info-project
python3 main.py
```

On first time running it will request an API key. The following section covers setting up the API key:

## Collecting Tide Data

For UK data I am using the [admiral API](https://admiraltyapi.portal.azure-api.net/), in particular, I am using the [UK Tidal API - Discovery](https://admiraltyapi.portal.azure-api.net/docs/services/uk-tidal-api/operations/TidalEvents_GetTidalEvents?), which has a maxium API calls of 10,000 per month.

### Get API Key

If using the Admiralty API:

1. Create an account with Admiralty
2. Subscribe to the [UK Tidal API - Discovery](https://admiraltyapi.portal.azure-api.net/docs/services/uk-tidal-api/operations/TidalEvents_GetTidalEvents?) API
3. Get the newly created API Key

### Processing Tide Data

The python file 'tideInfo.py' contains the function to call the API and get a JSON file containing the data.

``` python
@staticmethod
def get_data():
    """
    Retrieves tidal event data from the Admiralty API.

    Output:
    - data: JSON data containing tidal event information.
    """
    logging.info('Requesting json file from Admiralty API')
        
    # Read the API key from config.ini
    config = configparser.ConfigParser()
    config.read('config.ini')
    apiKey = config.get('API Key', 'Key')
        
    try:
        with urllib.request.urlopen(f"https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0005/TidalEvents?duration=2&key={apiKey}") as url:
            data = json.load(url)
            logging.info('Request completed')
            return data
    except Exception as e:
        logging.error('Failed to get data from Admiralty API')
        logging.error(f'{e}')
        einkDisplayUpdate.einkUpdate.error_display(e)

```

If the API call fails, the script logs the error and updates the display with the error message.

To get the location you are interested in you will need to update the Stations code: ```https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0005/TidalEvents?duration=2&key={apiKey}``` For example, Falmouth is **0005**.

### Tide Station Examples

ID    | Name                     | Country | Continuous Heights | Footnote
------|--------------------------|---------|---------------------|-----------------------------------------
0001  | ST. MARY'S               | England | True                |
0002  | PENZANCE (NEWLYN)        | England | True                |
0002A | Porthleven               | England | True                |
0003  | Lizard Point             | England | True                |
0004  | Coverack                 | England | True                |
0004A | Helford River (Entrance) | England | True                |
0005  | FALMOUTH                 | England | True                |
0005A | Truro                    | England | False               | Dries out except for river water
0007A | Par                      | England | True                |
0008A | Lostwithiel              | England | False               | Dries out except for river water

Full station information has been pulled from API and converted into a [csv for easy browsing](https://github.com/Dr-Passmore/e-paper-tidal-info-project/blob/master/station.csv)

Now we have the data returned to 'main.py' it needs to be processed. We are interested in displaying the last tide event and the next tide event, so the rest of the data can be discarded.

To do this the script loops through the data. The next event is in the future so the loop breaks when it reaches the next event, and past events overwrite until the next event is covered.

``` python
for x in data:
    event = (x['EventType'])
    height = (x['Height'])
    eventTime = (x['DateTime'])
    eventTime = eventTime[:19]
                    
    when = datetime.datetime.strptime(eventTime,"%Y-%m-%dT%H:%M:%S")
    recordsdate = when
    timestamp = datetime.datetime.timestamp(when)
    now = time.time()
    eventTime = eventTime[11:16]
    if timestamp > now:
        break
    else: 
        pastevent = event
        pastheight = height
        previousEventTime = eventTime
        prioreventTime = timestamp

progress = TideInformationDisplay.percentage_calculation(self, timestamp, prioreventTime, now, event)
```

The percentage of the progress bar is calulated in the ***percentage_calculation*** function

``` python
def percentage_calculation(self, timestamp, prioreventTime, now, event):
    """
    Calculates the progress percentage between previous and next tide events.

    Input:
    - timestamp: Timestamp of the next tide event.
    - prioreventTime: Timestamp of the previous tide event.
    - now: Current timestamp.
    - event: Type of tide event (e.g., "HighWater" or "LowWater").

    Output:
    - progress: Progress percentage between previous and next tide events.
    """
    timeRemaining = (timestamp - now) / 60
    timeSince = (now - prioreventTime) / 60
    total = timeRemaining + timeSince
    percentage = 100 / total
    progress = percentage * timeSince
        
    if event == "LowWater":
        progress = 100 - progress
        
    return progress
```

This provides the percentage until the next tide event.

In addition, in the config the highest and lowest tides heights are recorded.

``` python

if event == 'HighWater':
    currentRecord = config.get('Records', 'Highest Tide Height')
                
    if float(currentRecord) < height:
        logging.info(f"New {event} record set of a height of {height}M")
        config.set('Records', 'Highest Tide Height', str(height))
        config.set('Records', 'Highest Tide Date', str(recordsdate))
        with open(r"config.ini", 'w') as configuration:
            config.write(configuration)
    else:
        currentRecord = config.get('Records', 'Lowest Tide Height')
                
        if float(currentRecord) > height:
            logging.info(f"New {event} record set of a height of {height}M")
            config.set('Records', 'Lowest Tide Height', str(height))
            config.set('Records', 'Lowest Tide Date', str(recordsdate))
            with open(r"config.ini", 'w') as configuration:
                config.write(configuration)

```

This information is used in the loading screens between refreshes.

## Displaying Tide Information

I always find the main challenge of any e-paper display project is getting the display layout right. This also takes longer to test as you need to wait for the display to update. Considering this is my third e-paper display project I still found the layout to be the most painful process.

The goals I had for this project was:

1. Design a user-friendly interface to clearly display the tide information.
2. Effectively, display the progress using a bar.
3. If there is an error, then I wanted the display to clearly show there was an error.
4. Display high and low tide records, from data the Pi Zero has processed as a loading screen.

### Loading screen

The loading screen displays either the lowest or highest tide level.

![Loading Display](https://personalblogimages.blob.core.windows.net/websiteimages/Tide%20Display%202023-08-30%20at%2018.43.54.jpg)

There is a random selection which then grabs the relevant data to display.

```python
# Selection process for whether the loading screen shows low or high tide record
previousRecords = ["high", "low"]
selection = random.choice(previousRecords) 

# If high tide recorded select it provides the height, date and time recorded. Along with start date the screen has been running from
if selection == "high":
    highest_tide_datetime = datetime.strptime(highestTideDate, "%Y-%m-%d %H:%M:%S")
    daterecorded = highest_tide_datetime.strftime("%Y-%m-%d")
    timerecorded = highest_tide_datetime.strftime("%H:%M:%S")
    drawLoadBlack.text((15, 35), f'Highest Height: {float(highHeight):.2f} m', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 52), f'Recorded: {daterecorded}', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 67), f'At: {timerecorded[0:5]}', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 82), f'Recording Since {startDate}', font=robotoblack14, fill=0)
        
        # If low tide recorded select it provides the height, date and time recorded. Along with start date the screen has been running from
else: 
    lowest_tide_datetime = datetime.strptime(lowestTideDate, "%Y-%m-%d %H:%M:%S")
    daterecorded = lowest_tide_datetime.strftime("%Y-%m-%d")
    timerecorded = lowest_tide_datetime.strftime("%H:%M:%S")
    drawLoadBlack.text((15, 35), f'Lowest Height: {float(lowHeight):.2f} m', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 52), f'Recorded: {daterecorded}', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 67), f'At: {timerecorded}', font=robotoblack18, fill=0)
    drawLoadBlack.text((15, 82), f'Recording Since {startDate}', font=robotoblack14, fill=0)
```

### Main Screen

![Main Display](https://personalblogimages.blob.core.windows.net/websiteimages/Tide%20Display%202023-08-30%20at%2018.43.45.jpg)

### Error Screen

The error screen simply displays the error and draws attention that the screen is no longer correctly updating.

``` python
# Error Message
drawblack.text((15, 45), f'{e[0:16]}', font = robotoblack18, fill = 0)
drawblack.text((15, 65), f'{e[16:]}', font = robotoblack18, fill = 0)
draw_other.text((55, 2), "ERROR!", font=robotoblack28, fill=0)
        
# Draws Red Borders around the screen and between the title and error message
draw_other.rectangle((0, 0, epd.height, 5), fill=0)
draw_other.rectangle((0, 30, epd.height, 35), fill=0)
draw_other.rectangle((0, 30, 5, 0), fill=0)
draw_other.rectangle((207, 30, 212, 0), fill=0)
draw_other.rectangle((0, 99, 212, 104), fill=0)
draw_other.rectangle((0, 31, 5, 104), fill=0)
draw_other.rectangle((207, 0, 212, 104), fill=0)
```

This simply draws out a clear error message.

## Updating the display

The display needs to update regularly and to update the display I'm using a scheduled cron job. This runs the ***screen_refresh.sh*** script which calls the ***main.py*** file.

Firstly, you need to make the ***screen_refresh.sh*** executable.  

```bash
chmod +x screen_refresh.sh
```

Secondly, you need to create the cron job.

```bash
crontab -e
```

I recommend selecting nano as editor.

Add the following:

```nano
*/15 * * * * /home/pi/e-paper-tidal-info-project/screen_refresh.sh
```

Now the script will run every 15 minutes.

## Conclusion

With your Raspberry Pi and E-Paper display working together, you'll have a dynamic tide information display that keeps you informed about the local tides. Whether you're a beach enthusiast or a curious learner, this project adds a touch of technology to the natural rhythm of the ocean. Enjoy watching the tides roll in and out right from the comfort of your home!

For more DIY projects and Raspberry Pi fun, stay tuned to our blog!