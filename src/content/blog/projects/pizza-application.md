---
author: Jordan Taylor
pubDatetime: 2023-10-09T13:00:00Z
title: Pizza application Web API
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
The [project](https://github.com/JustJordanT/pizza-byte) serves as an API for a pizza ordering system, allowing customers to create accounts and place orders for pizzas. I generally like to use this a framework for testing out and learning new langueges. This allows me work with differnt frameworks around web services so I can compare and constast the two and even pull things away from I learn from one versus the other. I am current working on this with .NET then I will be doing the exact same project in Go and then I wanted to do this again in Kotlin. 

### Database
- Uses AWS Aurora DB to store customer accounts and order records.

### Logging
- Sends logs to AWS DocumentDB for monitoring and analytics. Logging is a crucial aspect of any application for monitoring its behavior, debugging issues, and understanding usage patterns. In our Pizza API project, we're using AWS DocumentDB to store logs, which is a fully managed, MongoDB-compatible database service. 

### Notification System
- Utilizes AWS SNS (Simple Notification Service) to queue messages when a pizza order has been initiated.
- Further employs AWS SNS (Simple Notification Service) to notify users about the status of their orders.

### Technologies
- [AWS Aurora DB](https://aws.amazon.com/rds/aurora/)
- [AWS Dynamo DB](https://aws.amazon.com/dynamodb/)
- [AWS SNS](https://aws.amazon.com/sns/) 
- [AWS ECS](https://aws.amazon.com/ecr/)
- [AWS ECR](https://aws.amazon.com/ecs/)
