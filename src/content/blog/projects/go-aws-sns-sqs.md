---
author: Jordan Taylor
pubDatetime: 2023-10-09T13:00:00Z
title: Go in AWS, SNS and SQS
postSlug: go-aws-sns-sqs
featured: True
draft: false
tags:
  - go
  - software engineering
  - projects
  - aws
description:
 Using Go with AWS, SNS and SQS
---

# Project using Go in AWS, SNS and SQS

This [project](https://github.com/JustJordanT/communication-go-aws-sns-sqs/tree/master) aims to provide a minimalistic yet comprehensive guide to integrating AWS SNS and SQS services with a Go application. It serves as a boilerplate codebase and a tutorial for developers who are new to these AWS services or want to integrate them into their existing Go projects.

## Key Features:

**Publishing Messages to SNS Topic:** The project includes a Go module that demonstrates how to publish messages to an AWS SNS topic. This is useful for sending notifications or triggering other AWS services.

**Subscribing SQS to SNS Topic:** Another module shows how to automatically subscribe an SQS queue to an SNS topic. This ensures that messages published to the SNS topic are forwarded to the SQS queue.

**Consuming Messages from SQS:** Finally, the project includes a consumer module written in Go that polls the SQS queue and processes messages.

## Technical Stack

Programming Language: Go

AWS Services: SNS, SQS

Other Libraries: AWS SDK for Go
