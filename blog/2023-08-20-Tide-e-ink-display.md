---
slug: raspberry-pi-tide-information-display-epaper
title: Building a Tide Information Display with Raspberry Pi and E-Paper - High Tide, Low Tide, and More!
description: Creating a Tide Information Display with an e-paper screen and a Raspberry Pi Zero. 
authors: passmore
tags: [Raspberry Pi, E-Paper Display, DIY Projects, Beginner Friendly, Python]
image: https://personalblogimages.blob.core.windows.net/websiteimages/vi_4068_20230531_103359.mp4.v4068.th.jpg
draft: true
---

# Building a Tide Information Display with Raspberry Pi and E-Paper

Are you fascinated by the ebb and flow of the tides? With the power of a Raspberry Pi and an E-Paper display, you can create your own informative tide display right at home. In this guide, we'll walk you through the steps to build a tide information display that provides real-time updates on high tide, low tide, heights in meters, and corresponding times. Dive in and embark on this exciting project to stay connected with the rhythm of the ocean.

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
11. Run test code to confirm screen is updated

### Library Installs

```bash
    sudo apt-get update
    sudo apt-get install python3-pip
    sudo apt-get install python3-pil
    sudo apt-get install python3-numpy
    sudo pip3 install RPi.GPIO
    sudo pip3 install spidev
```

### Test code

Depending on the Screen you have purchased select the relevant test code file. I have a 2.13 inch Red, Black, and White screen so have used epd_2in13bc_test.py to confirm that the e-paper screen is working as expected.

```bash
git clone https://github.com/waveshare/e-Paper.git
cd e-Paper/RaspberryPi_JetsonNano/python/examples
python3 epd_2in13bc_test.py
```

## Collecting Tide Data

1. Choose a reliable tide data source (API or website).
2. Write a Python script to fetch and parse the tide data.

The file tideInfo.py contains the function to call the API and get the data.

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

To get the location you are interested in you will need to update the Stations code: ```https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0005/TidalEvents?duration=2&key={apiKey}``` For example, Falmouth is **0005**

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

### Get API Key

## Displaying Tide Information

1. Design a user-friendly interface for the E-Paper display.
2. Write Python code to update and refresh the tide information.

## Real-Time Updates

1. Set up automatic data refresh intervals.
2. Implement error handling to ensure data consistency.

### Loading screen

### Main Screen

## Enhancements and Customizations

1. Add visual indicators for high tide and low tide.
2. Experiment with different font sizes and styles for readability.

## Conclusion

With your Raspberry Pi and E-Paper display working together, you'll have a dynamic tide information display that keeps you informed about the local tides. Whether you're a beach enthusiast or a curious learner, this project adds a touch of technology to the natural rhythm of the ocean. Enjoy watching the tides roll in and out right from the comfort of your home!

For more DIY projects and Raspberry Pi fun, stay tuned to our blog!

