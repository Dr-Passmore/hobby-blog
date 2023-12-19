---
slug: in-stock-notifcation-raspberry-pi
title: Python Check for Change 
description: Through the use of Python we can create a Python Program to check for change and send a text message when a change is found.
authors: passmore
tags: [Python, Automation, Raspberry Pi, Beginner Friendly]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp
draft: true
---

The chip shortage last year meant getting hold of a Raspberry Pi from an official supplier was next to impossible. 

<!--truncate-->

## About The Project

To make sure I had the opportunity to pick up a Raspberry Pi 4 or Pi Zero 2 when they next go into stock, I started this quick project. The check for change is a simple project that takes the visable text of the webpage and compares to the previous version, if a change has taken place and the item is in stock then the python script notifies via text message.

Key goals of this project:
* Only notifies if the product is in stock
* Send a text message alert
* To be run regularly on a Raspberry Pi

### Built With

This project has been built with Requests to get a copy of the webpage and Beautiful Soup to get the visible text. When a targeted item is in stock the Vonage Communications API is used to send text messages to alert that an item is in stock. 

* [Vonage API](https://www.vonage.co.uk/communications-apis/) 
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/#)
* [Requests](https://requests.readthedocs.io/en/latest/)


## Getting Started

To get set up, I have cloned the repo onto a Raspberry Pi, and added as Cron job to run checkforchange.sh. 

The Cron job is set to run every 30 minutes with: __*/30 * * * *__ 

You will need to create an account with [Vonage](https://www.vonage.co.uk/communications-apis/) and set up the communication API. You will need the secret and key for the API. Vonage has been selected as they provide €2 free credit, without a payment method required, and each text costs €0.04. 

Once the repo is cloned onto the Raspberry Pi you will need to manually run the main.py script, which will on first run ask for the API information and phone number. This information will be added to the newly created config.ini file. If any details need to be updated in future, you can edit them in the config.ini file.  

[Vonage API]
* key = 
* secret = 
* countrycode = 
* phonenumber = 

### Prerequisites

Install the required packages using:

__pip install -r requirements.txt__

The provided requirements will install the following:

* vonage>=2.0.0
* configparser>=5.0.2
* beautifulsoup4>=4.9.0
* requests>=2.25.0



### Installation

1. Get a free API Key at [Vonage](https://www.vonage.co.uk/communications-apis/) 
2. Clone the repo
   ```sh
   git clone https://github.com/Dr-Passmore/Check-for-change.git
   ```
3. Install required packages
   ```sh
   pip install -r requirements.txt
   ```
4. Run main.py and enter your API Key, secret, and phone number in the prompts
5. Set up Cron job

## Usage

The script enables text alerts when items are in stock. The targets can be updated or changed. The only two key bits of info you need is a URL and a target phrase (Normally some version of "in Stock"). This means the script can be used for other websites and does not need to be Raspberry pi focused. 

