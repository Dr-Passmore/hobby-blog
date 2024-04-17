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
