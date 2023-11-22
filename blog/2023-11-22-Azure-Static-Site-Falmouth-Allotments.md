---
slug: azure-static-web-app-falmouth-allotments
title: Azure Static Web App Deployment 
description: Redesign of the Falmouth Allotments Website and hosting the site using Azure Static Web App
authors: passmore
tags: [Web Design, Azure, React, Github Actions, Static Web App, Terraform]
image: https://personalblogimages.blob.core.windows.net/websiteimages/calibre-project-pi.jpg
draft: true
---

<!--truncate-->

# Overview

I took over managing the Falmouth Allotments website and needed to migrate the website from a previous hosting solution. I initially deployed the WordPress site to a `Standard B1s` virtual machine. However, a recent update ended up breaking the WordPress site. I wanted 

# Azure

To 

## Terraform Deployment


### Key Terraform

```terraform
provider "azurerm" {
    features {}
}

# Back end storage of the terraform state file
terraform {
  backend "azurerm" {
    resource_group_name   = "tf-state-rg"
    storage_account_name   = "{UniqueStorageAccount}"
    container_name         = "tfstate"
    key                    = "terraform.tfstate"
    sas_token = ""
  }
}
```

### Creating a Storage Account

### Creating Static Web Apps

# Web design

## React setup

## Github Action setup

## Custom Domain
