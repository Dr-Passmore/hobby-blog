---
slug: azure-static-web-app-falmouth-allotments
title: Falmouth Allotments Web Design using Azure Static Web Apps
description: Redesign of the Falmouth Allotments Website and hosting the site using Azure Static Web App part 1
authors: passmore
tags: [Web Design, Azure, React, Github Actions, Static Web App, Terraform]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp
draft: true
---

I took over managing the [Falmouth Allotments website](https://falmouthallotments.org/) and needed to migrate the website from a previous hosting solution. I initially deployed the WordPress site to a `Standard B1s` virtual machine. However, a recent update ended up breaking the WordPress site and initial attempts to fix failed.

What was looking like a headache to troubleshoot and resolve, this actually turned out to be an opportunity to redesign the site. When I took over managing the site, I had discussions with the allotment committee about the website needing a redesign with some initial ideas being discussed. Fortunately, the website going down was an impertus to begin this project.

![Falmouth Allotments Sunset](https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp)

<!--truncate-->

Moving away from an old Wordpress website with a focus on performance, cost reduction, and accessibility is an exciting project to undertake.

## Overview

The main goals I have for the new site are:

- Implement a modern clean design.
- Reduce the quantity and size of images displayed.
- The website has been designed with accessiblity in mind.
- Replace all documents with either webforms or easily browserable pages (Rules and Constituation).
- Significantly reduce hosting costs.

To measure these goals I will be making Use of [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#devtools) to generate page reports. This enables me to find not only identify performance impacts, but also any accessibility issues. In addition, I want to limit the environmental impact of the website. Fortunately, this can be measured using the [Website Carbon Calculator](https://www.websitecarbon.com) and essentially, carbon cost is limited by making sure the new website is efficiently designed.

## Azure

For hosting the website I'm going to be deploying to Azure. I have already moved the old site to Azure using a `Standard B1s` virtual machine to host the old WordPress website. I have also seen this as an opportunity to practice [Terraform](https://www.terraform.io/). Terraform is Infrastructure By Code and is a great way to manage cloud infrastructure. Primarily, Terraform helps standardise and inherently documents the infrastructure set up. I admit from a time perspective it is very inefficient for a small project like this one, as I could have created everything in the portal in a fraction of the time required to get this set up.

### Terraform Deployment

The 

The gitaction workflow is designed to automate the deployment of Terraform configurations on Azure when changes are pushed to the specified branch (in this case, the master branch). Let's break down the key components of the workflow:

```yaml
name: Deploy Terraform

on:
  push:
    branches:
      - master
```

name: Specifies the name of the GitHub Actions workflow, in this case, "Deploy Terraform."

on: Defines the trigger for the workflow. In this example, the workflow is triggered on each push to the master branch.

```yaml
jobs:
  terraform:
    runs-on: ubuntu-latest
```

jobs: Describes the set of tasks to be executed as part of the workflow.

terraform: The name of the job, representing the Terraform deployment.

runs-on: Specifies the type of runner for the job. In this case, it runs on an Ubuntu environment.

yaml

steps:
  - name: Checkout code
    uses: actions/checkout@v2

    steps: Defines a series of steps to be executed within the job.

    Checkout code: Uses the GitHub Actions built-in action to checkout the source code repository at the latest commit.

yaml

  - name: Set up Terraform
    uses: hashicorp/setup-terraform@v1
    with:
      terraform_version: 1.6.3

    Set up Terraform: Utilizes the HashiCorp setup-terraform action to install and set up the specified version of Terraform.

yaml

  - name: Configure Azure CLI
    run: |
      az login --service-principal -u ${{ secrets.ARM_CLIENT_ID }} -p ${{ secrets.ARM_CLIENT_SECRET }} --tenant ${{ secrets.ARM_TENANT_ID }}
      az account set --subscription ${{ secrets.ARM_SUBSCRIPTION_ID }}

    Configure Azure CLI: Configures the Azure CLI with the necessary credentials using Azure service principal details stored as GitHub secrets.

yaml

  - name: List Azure Resources
    run: |
      az resource list --output table

    List Azure Resources: Uses the Azure CLI to list resources in the specified Azure subscription.

yaml

  - name: Initialize and Set up Terraform Backend
    run: |
      terraform init -force-copy

    Initialize and Set up Terraform Backend: Initializes the Terraform configuration and sets up the Terraform backend.

yaml

  - name: Apply Terraform
    run: terraform apply -auto-approve

    Apply Terraform: Executes the Terraform apply command with auto-approval to deploy the infrastructure specified in the Terraform configuration.

This GitHub Actions workflow automates the process of deploying Terraform configurations on Azure, providing a streamlined and version-controlled approach to infrastructure management.

#### Provider and Backend Terraform

```terraform
provider "azurerm" {
    features {}
}
```

In this section, the Terraform provider for Microsoft Azure, "azurerm," is declared. The features {} block is left empty, indicating the default configuration.

```terraform
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

In this section, the backend configuration for storing the Terraform state file is specified. The state file contains information about the infrastructure managed by Terraform. The backend is set to Azure Storage ("azurerm"). The configuration includes the following parameters:

- **resource_group_name:** The name of the Azure Resource Group where the storage account for storing the Terraform state will reside. It is set to "tf-state-rg."

- **storage_account_name:** This should be replaced with a unique name for the Azure Storage Account where the Terraform state file will be stored. It is recommended to replace `{UniqueStorageAccount}` with an actual, unique name.

- **container_name:** The name of the container within the storage account. In this case, it is set to "tfstate."

- **key:** The name of the Terraform state file, which is set to "terraform.tfstate."

- **sas_token:** Shared Access Signature (SAS) token, which is currently left empty. If needed, a SAS token can be provided for secure access to the storage account.

It's important to replace `{UniqueStorageAccount}` with a globally unique name for the storage account to avoid naming conflicts. Additionally, appropriate authentication and access controls should be configured for the storage account to ensure secure management of the Terraform state.

#### Creating a Resource Group

Now I need to create a Resource Group for the Falmouth Allotment website. The following section of code creates the resource group with the name `falmouth-allotment-website`:

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

The name attribute sets the name of the Azure Resource Group to "falmouth-allotment-website," and location determines its Azure region, here specified as "west europe."

The location is set to 'west europe' as we are limited on locations for Azure Static Web Apps. Otherwise I would deploy to UK South.

Tags, like "environment" and "Falmouth_Allotments," provide metadata for better organisation—indicating a production environment and association with the Falmouth Allotments website.

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

In the above code, I have declared an Azure Storage Account named "falmouthallotmentsweb." The account is associated with the same resource group, location, and tags as the previously created Azure Resource Group for the Falmouth Allotments website.

Additional settings declared are:

- account_tier specifies the performance tier of the storage account as "Standard."

- account_replication_type sets the replication type to "GRS" (Geo-Redundant Storage) for increased data durability.

#### Creating Static Web Apps

To gracefully transition from a broken WordPress site, we are creating two Azure Static Web Apps, a development site and a production site. The existing DNS will be updated to point to the production Static Web App, where visitors will be greeted with a "Website Under Construction" message.

The development site enables the full website solution to be tested before updating the pipeline to push to production.

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
```

Finally, the terraform code creates the production website. Initially, the under construction website will be hosted here and eventually replaced with the new website.

```terraform
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


![Temporary Website](https://personalblogimages.blob.core.windows.net/websiteimages/falmouth%20allotments%20temp%20page-1.webp)

### React setup

### Github Action setup

### Custom Domain
