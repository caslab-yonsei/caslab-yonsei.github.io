---
layout: publication
title: "Improving the Efficiency of Power Management via Dynamic Interrupt Management"
image:
authors:
  - name: Ki-Dong Kang
    short: K.-D. Kang
  - name: Hyungwon Park
    short: H. Park
  - name: Gyeongseo Park
    short: G. Park
  - name: Daehoon Kim
    short: D. Kim
    corresponding: true
co-first: true
type: Paper
international: true
researches: [power]
keywords:
  - Power management
  - Energy efficiency
  - Dynamic Voltage and Frequency Scaling
  - Interrupt management
  - Latency-critical applications
paper:
  year: 2020
  publisher: "IEEE International Conference on Computer Design"
  publisher-short: "ICCD"
  publisher-type: Conference
  ref: pp. 377-380
sidebar:
doi: 10.1109/ICCD50377.2020.00069
components: [abstract, keywords, topics]
hidden: false
---

In this paper, we first analyze the effects of interrupt management on response latency of the latency-critical application and the efficiency of current dynamic power management governor which determines Voltage and Frequency States (V/F states) based on CPU utilization. We also demonstrate that interrupt management provides a governor an opportunity to decrease the V/F state without performance degradation. Next, we propose I-state that adjusts the interrupt rate based on the V/F state determined by the governor. When a core is highly utilized with a high V/F state, I-state improves response latency by decreasing interrupt rate, moderating the load on the CPU. I-state also improves energy-efficiency by making the governor decrease the V/F state more often. When a core is not highly utilized while operating at low V/F states, I-state improves response latency by increasing interrupt rate, which can notify the processor of packet arrivals faster so that the CPU processes the packets quickly. Our experimental results show that I-state improves 95 th percentile latency by up to 15.9x while reducing energy consumption by up to 17.6%.