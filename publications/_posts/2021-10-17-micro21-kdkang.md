---
layout: publication
title: "NMAP: Power Management Based on Network Packet Processing Mode Transition for Latency-Critical Workloads"
image:
authors:
  - name: Ki-Dong Kang
  - name: Gyeongseo Park
  - name: Hyosang Kim
  - name: Mohammad Alian
    short: M. Alian
  - name: Nam Sung Kim
    short: N. S. Kim
  - name: Daehoon Kim
    corresponding: true
co-first: false 
type: Paper
international: true
researches: [power]
keywords:
  - Power management
  - Dynamic Voltage and Frequency Scaling
  - Network packet processing
  - Latency-critical workloads
  - Service Level Objectives
  - Energy efficiency
paper:
  year: 2021
  publisher: "IEEE/ACM International Symposium on Microarchitecture"
  publisher-short: "MICRO"
  publisher-type: Conference
  ref: pp. 143-154
sidebar:
doi: 10.1145/3466752.3480098
components: [abstract, keywords, topics]
hidden: false
---

Processor power management exploiting Dynamic Voltage and Frequency Scaling (DVFS) plays a crucial role in improving the data-center’s energy efficiency. However, we observe that current power management policies in Linux (i.e., governors) often considerably increase tail response time (i.e., violate a given Service Level Objective (SLO)) and energy consumption of latency-critical applications. Furthermore, the previously proposed SLO-aware power management policies oversimplify network request processing and ignore the fact that network requests arrive at the application layer in bursts. Considering the complex interplay between the OS and network devices, we propose a power management framework exploiting network packet processing mode transitions in the OS to quickly react to the processing demands from the received network requests. Our proposed power management framework tracks the transitions between polling and interrupt in the network software stack to detect excessive packet processing on the cores and immediately react to the load changes by updating the voltage and frequency (V/F) states. Our experimental results show that our framework does not violate SLO and reduces energy consumption by up to 35.7% and 14.8% compared to Linux governors and state-of-the-art SLO-aware power management techniques, respectively.