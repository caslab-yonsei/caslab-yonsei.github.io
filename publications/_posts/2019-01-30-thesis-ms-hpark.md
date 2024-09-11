---
layout: publication
title: "Aggressive Interrupt Throttling for low latency in Data Center Servers"
image: 
authors:
  - name: Hyungwon Park
  - name: Sungjin Lee
    short: S. Lee
  - name: Daehoon Kim
co-first: false
type: Paper
international: false
paper: 
  year: 2019
  publisher: Daegugyeongbuk Institute of Science and Technology
  publisher-short: DGIST
  publisher-type: Thesis
  ref:
sidebar:
doi: 10.22686/thesis.200000171477
  links:
    - name: DGIST Scholar Page
      url: https://scholar.dgist.ac.kr/handle/20.500.11750/10733
      reveal: true
components: [abstract, keywords, topics]
hidden: false
---

Interrupt throttling is the technology to decrease the number of interrupts. It improves the network throughput through mitigating CPU overhead of the interrupt handling while there is the trade-off with latency since it throttles the interrupt. Intel dynamically controls the throttle level through Interrupt Throttle Register (ITR) which disables a network interrupt during a specific time in accordance with network load. However, we observe that current dynamic interrupt throttling mechanism has two limitations. First, existing network driver, which dynamically throttle the interrupt, is too slow to increase the throttle level to handle burst network packets which is common in OnLine Data Intensive (OLDI) benchmarks. Second, the network driver does not fully utilize the hardware specification since the interrupt throttle range, which is dynamically controlled, is limited. In order to mitigate these limitations, we propose a Turbo Throttle that fast increases the throttle level of network interrupt in high network load. In addition, Turbo Throttle largely increases the throttling level by monitoring the requirement of throttle state and CPU utilization. In evaluation, we show that Turbo Throttle improves 95th per-centile latency by up to 2.2x compared to existing Intel dynamic interrupt throttling.