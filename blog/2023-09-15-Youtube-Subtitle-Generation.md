---
slug: youtube-subtitle-generation
title: Developing an automatic subtitle creation
description: Creating a python program to create subtitles for Youtube Videos
authors: passmore
tags: [Python, Accessibility, YouTube, Inclusivity, Coding Tutorials, Artificial Intelligence]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Python-caption-generation-processed.jpg
draft: true
---

Accessibility in the digital age is crucial to consider. This Subtitle Generation project merges the power of code with the necessity of inclusivity on one of the internet's most popular platforms: YouTube. This blog will document the process for developing an automatic subtitle creation program using Python, designed to make online content more accessible to a broader audience.

Initially, I undertook a small project to help my partner create subtitles for her YouTube videos. The automatically generated subtitles were of poor quality, and while YouTube allows you to edit their subtitles, this is a time-consuming process. Instead, this approach provided easily editable text files, and I was able to generate subtitle files from a CSV listing all her video URLs. For example, the video ['DIY Beach Towel Poncho Tutorial'](https://youtu.be/sxDlKdQk1Ww?si=VpWvCg5-Fo00Tjul) now boasts improved subtitles. This approach also benefits auto-translation, ensuring coherent subtitles for international audiences.

![Auto generated captions by YouTube](https://personalblogimages.blob.core.windows.net/websiteimages/Python-caption-genertion-auto.jpg)

![Processed by the Python Script](https://personalblogimages.blob.core.windows.net/websiteimages/Python-caption-generation-processed.jpg)

In this blog, I will explore how to harness the power of Python to create a program that generates subtitles for YouTube videos. We will break down these steps, discuss the underlying technologies, and provide you with the knowledge and tools to embark on your own accessibility-enhancing coding adventure. Whether you're a seasoned Python developer or a newcomer eager to learn, this blog has something for you.

<!--truncate-->

## Overview

The core goals of this project are:

1. User friendly design

2. Support extracting an MP3 from an existing YouTube video

3. Being able to process an MP3 file

4. Easy Initial setup of API key

Ideally, this software will be something my partner can easily run to quickly generate subtitles for new videos in future. Through supporting both MP3 files and existing YouTube videos, she will be able to process a video either before upload (create an MP3 export from `Adobe Premiere Pro`) to be process or later on using the URL of the Youtube video. 

## Set up

### API 

To support the user friendly design, I have included a check to see if the config file exists (`config.ini`). If the config files does not exist then a user interface is opened to enable easy input of the API key. 

```python
configFile = os.path.exists('config.ini')
        if configFile == False:
            #if the file does not exist then create one
            logging.error("No config file found")
            captionCreation.apiInterface(self)
```

The API interface is a small 300x200 screen with the clear title of "API Key Setup", a quick bit of info on where you can get the API key from, and a save button. 

```python
def apiInterface(self):
        '''
        Function to create the API key setup interface.
        This interface allows the user to enter their API key and save it to a configuration file.
        '''
        self.window = tk.Tk()
        self.window.title("API Key Setup")
        self.window.geometry("300x200") 

        label_instructions = tk.Label(self.window, text="You can acquire your API key from:")
        label_instructions.pack(pady=5)

        # Create a clickable hyperlink
        link_label = tk.Label(self.window, text="https://console.picovoice.ai/", cursor="hand2")
        link_label.pack(pady=5)
        link_label.bind("<Button-1>", self.openLink)

        label = tk.Label(self.window, text="Enter your API key:")
        label.pack(pady=10)

        self.api_key_entry = tk.Entry(self.window)
        self.api_key_entry.pack()

        save_button = tk.Button(self.window, text="Save", command=self.saveAPIKey)
        save_button.pack(pady=10)
```

There are two additional functions to enable this API key set up to work. 

Firstly, we have the `saveAPIKey` function. This writes the inputted API key to the config file for use later by the software. 



```python

    def saveAPIKey(self):
        '''
        Saves the API key and destroys the window once completed
        '''
        api_key = self.api_key_entry.get()
        if api_key:
            config = configparser.ConfigParser()
            config.add_section('API Key')
            config.set('API Key', 'Key', api_key)
            with open(r"config.ini", 'w') as configuration:
                config.write(configuration)
            logging.info('API key saved successfully.')
        else:
            logging.error('API key cannot be empty.')

        self.window.destroy()
```

Secondly, including the link to [setup API Key](https://console.picovoice.ai/") is entirely more helpful if the user to be able to click the link. This opens a browser and enables them to register. Once registered they can get their API key from the console. 

```python
    def openLink(self):
        '''
        Opens the picovoice.ai link
        '''
        webbrowser.open("https://console.picovoice.ai/")

```

