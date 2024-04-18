---
slug: Raspberry-pi-5-camera-tutorial
title: Raspberry Pi 5 Setup
description: Upgrading the Raspberry Pi 4 tutorial cameras to make use of the Raspberry Pi 5 higher specs
authors: passmore
tags: [Raspberry Pi, High Quality Camera Module, Raspberry Pi 5, DIY Projects, Beginner Friendly]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp
draft: true
---

When the Raspberry Pi 5 was annouced I was excited for the potential for higher quality video recording and streaming. The Raspberry Pi 4 has limited hardware so stable 30 Frames Per Second [FPS] required recording and streaming to be captured at 720p. The Raspberry Pi 5 can get 1440p video quality at a stable 30 FPS or 4k footage at 10 FPS. 

<!--truncate-->

However, when the Raspberry Pi 5 launched there was a delay in the new camera adaptors being released. The new camera ports resulted in the need to switch out the ribbon cable connecting the camera module to the Raspberry Pi. In addition, the old camera library `raspistill` and `raspivid` is no longer supported with [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html) being the replacement. 

## Overview

The initial tests directly shows the boost in performance compared to the Raspberry Pi 4. This provides an interesting opportunity to impove video footage. However, I did find some initial issues that I still need to overcome. 

### Initial issues

My first issue was my choice of software for web control of the camera no longer works. Unfortunately, my choice of software [RPI Cam Interface]() was based on the old raspivid and raspistill legacy library. As this is no longer supported, I had to do some research, but the main replacement software is far more based around security camera set up. This does not serve my purpose. 

#### Web software

As the software is no longer supported a longer term project is to essentially build my own web interface. Until I find time to dig into that new project I'm going to be proceeding with terminal commands and for ease of use `bash` or a `Python` script. 

#### File Splitting 

During initial testing, I found that the libcamera was failing to split files. This is useful to prevent extremely large files being created. 

### 
