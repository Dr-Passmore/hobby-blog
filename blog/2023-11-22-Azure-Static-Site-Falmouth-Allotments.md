---
slug: azure-static-web-app-falmouth-allotments
title: Falmouth Allotments Web Design using Azure Static Web Apps
description: Redesign of the Falmouth Allotments Website and hosting the site using Azure Static Web App part 1
authors: passmore
tags: [Web Design, Azure, React, Github Actions, Static Web App, Terraform]
image: https://falmouthallotmentsweb.blob.core.windows.net/website-images/Falmouthallotmentspreview.webp
draft: true
---

I took over managing the [Falmouth Allotments website](https://falmouthallotments.org/) and needed to migrate the website from a previous hosting solution. I initially deployed the WordPress site to a `Standard B1s` virtual machine. However, a recent update ended up breaking the WordPress site and initial attempts to fix failed.

What was looking like a headache to troubleshoot and resolve, this actually turned out to be an opportunity to redesign the site. When I took over managing the site, I had discussions with the allotment committee about the website needing a redesign with some initial ideas being discussed. Fortunately, the website going down was an impertus to begin this project.

![Falmouth Allotments Sunset](https://falmouthallotmentsweb.blob.core.windows.net/website-images/Falmouthallotmentspreview.webp)

<!--truncate-->

Moving away from an old Wordpress website with a focus on performance and cost reduction is an exciting project.

## Overview

The main goals I have for the new site are:

- Implement a modern clean design.
- Reduce the quantity and size of images displayed.
- The website has been designed with accessiblity in mind.
- Replace all documents with either webforms or easily browserable pages (Rules and Constituation)

To measure these goals I will be making Use of [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#devtools) to generate page reports. This enables me to find not only identify performance impacts, but also any accessibility issues.

## Azure

To 

### Terraform Deployment


#### Key Terraform

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

#### Creating a Resource Group

```terraform
resource "azurerm_resource_group" "falmouth_allotments_website" {
  name     = "falmouth-allotment-website"
  location = "west europe"
  
  tags = {
    environment          = "production"
    Falmouth_Allotments  = "website"
  }
}
```

#### Creating a Storage Account

One of the key limits of the free Azure Static Web Apps is the size limitation of `0.25 GB`. Considering the main cause of data usage on website is images, we can use a blob storage container to store images and and in this case files needed for the website (rules, new member forms, etc). Therefore, we are going to create a storage account and blob storage container:

```terraform
resource "azurerm_storage_account" "webstorageaccount" {
  name                     = "falmouthallotmentsweb"
  resource_group_name      = azurerm_resource_group.falmouth_allotments_website.name
  location                 = azurerm_resource_group.falmouth_allotments_website.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  tags = {
    environment = "production"
    Falmouth-Allotments = "website"
  }
}

# Container for the website images
resource "azurerm_storage_container" "mystoragecontainer" {
  name                  = "website-images"
  storage_account_name  = azurerm_storage_account.webstorageaccount.name
  container_access_type = "container"
}
```

#### Creating Static Web Apps

In this situation I need to route the existing DNS from the broken WordPress site, so I have created two Static Web Apps. The DNS will be updated to point at the production Static Web App, which will delivery a "Website Under Construction Message".

![Temporary Website](https://personalblogimages.blob.core.windows.net/websiteimages/calibre-project-pi.jpg)

```terraform
# Development site
resource "azurerm_static_site" "under_construction" {
  name                = "Falmouth-Allotments-Development"
  location            = azurerm_resource_group.falmouth_allotments_website.location
  resource_group_name = azurerm_resource_group.falmouth_allotments_website.name
  tags = {
    environment          = "production"
    Falmouth_Allotments  = "website"
  }
}

# Production site
resource "azurerm_static_site" "production_website" {
  name                = "Falmouth-Allotments-org"
  location            = azurerm_resource_group.falmouth_allotments_website.location
  resource_group_name = azurerm_resource_group.falmouth_allotments_website.name
  tags = {
    environment          = "production"
    Falmouth_Allotments  = "website"
  }
}
```


## Web design

### React setup

### Github Action setup

### Custom Domain
