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

In this blog, I will explore how to harness the power of Python to create a program that generates subtitles for YouTube videos automatically. We will break down these steps, discuss the underlying technologies, and provide you with the knowledge and tools to embark on your own accessibility-enhancing coding adventure. Whether you're a seasoned Python developer or a newcomer eager to learn, this blog has something for you.

<!--truncate-->

## Overview

The core goals of this project are:

1. User friendly design

2. Support extracting an MP3 from an existing YouTube video

3. Being able to process an MP3 file

4. Easy Initial setup of API key

Ideally, this software will be something my partner can easily run to quickly generate subtitles for new videos in future. Through supporting both MP3 files and existing YouTube videos, she will be able to process a video either before upload (create an MP3 export from `Adobe Premiere Pro`) to be process or later on using the URL of the Youtube video. 

### Set up