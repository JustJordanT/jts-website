---
author: Jordan Taylor
pubDatetime: 2023-10-09T13:00:00Z
title: Pizza application
postSlug: pizza-byte
featured: True
draft: false
tags:
  - go
  - software engineering
  - projects
  - aws
  - cSharp
description:
 A Miroservice application using pizza
---

## Pizza API Project Summary

![image](https://github.com/JustJordanT/jts-website/assets/38886930/4736cb23-900c-47c5-a3e8-10a6a570062f)


### Purpose
The [project](https://github.com/JustJordanT/pizza-byte) serves as an API for a pizza ordering system, allowing customers to create accounts and place orders for pizzas.

### Database
- Uses AWS Aurora DB to store customer accounts and order records.

### Logging
- Sends logs to AWS DocumentDB for monitoring and analytics. Logging is a crucial aspect of any application for monitoring its behavior, debugging issues, and understanding usage patterns. In our Pizza API project, we're using AWS DocumentDB to store logs, which is a fully managed, MongoDB-compatible database service. 

### Notification System
- Utilizes AWS SQS (Simple Queue Service) to queue messages when a pizza order has been initiated.
- Further employs AWS SNS (Simple Notification Service) to notify users about the status of their orders.

### Technologies
- AWS Aurora DB
- AWS DocumentDB
- AWS SQS
- AWS SNS
