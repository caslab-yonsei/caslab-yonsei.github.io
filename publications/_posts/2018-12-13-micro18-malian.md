---
layout: publication
title: "Application-Transparent Near-Memory Processing Architecture with Memory Channel Network"
image:
authors:
  - name: Mohammad Alian
    short: M. Alian
  - name: Seung Won Min
    short: S. W. Min
  - name: Hadi Asgharimoghaddam
    short: H. Asgharimoghaddam
  - name: Ashutosh Dhar
    short: A. Dhar
  - name: Dong Kai Wang
    short: D. K. Wang
  - name: Thomas Roewer
    short: T. Roewer
  - name: Adam McPadden
    short: A. McPadden
  - name: Oliver O'Halloran
    short: O. O'Halloran
  - name: Deming Chen
    short: D. Chen
  - name: Jinjun Xiong
    short: J. Xiong
  - name: Daehoon Kim
    short: D. Kim
    corresponding: true
  - name: Wen-mei Hwu
    short: W.-m. Hwu
  - name: Nam Sung Kim
    short: N. S. Kim
    corresponding: true
type: Paper
international: true
paper: 
  year: 2018
  publisher: "IEEE/ACM International Symposium on Microarchitecture"
  publisher-short: "MICRO"
  publisher-type: Conference
  ref: pp. 802-814
researches: [memory, power]
keywords:
  - Near-memory processing
  - Memory Channel Network
  - Non-volatile memory
  - Data-intensive applications
  - High-bandwidth communication
  - Energy efficiency
sidebar:
  - title: Awards
    items:
      - type: text
        text: Nominated for the Best Paper Award
        icon: trophy
        overt: true
        reveal: true
doi: 10.1109/MICRO.2018.00070
components: [abstract, keywords, topics]
hidden: false
---

The physical memory capacity of servers is expected to increase drastically with deployment of the forthcoming non-volatile memory technologies. This is a welcomed improvement for emerging data-intensive applications. For such servers to be cost-effective, nonetheless, we must cost-effectively increase compute throughput and memory bandwidth commensurate with the increase in memory capacity without compromising application readiness. Tackling this challenge, we present Memory Channel Network (MCN) architecture in this paper. Specifically, first, we propose an MCN DIMM, an extension of a buffered DIMM where a small but capable processor called MCN processor is integrated with a buffer device on the DIMM for near-memory processing. Second, we implement device drivers to give the host and MCN processors in a server an illusion that they are independent heterogeneous nodes connected through an Ethernet link. These allow the host and MCN processors in a server to run a given data-intensive application together based on popular distributed computing frameworks such as MPI and Spark without any change in the host processor hardware and its application software, while offering the benefits of high-bandwidth and low-latency communications between the host and the MCN processors over memory channels. As such, MCN can serve as an application-transparent framework which can seamlessly unify near-memory processing within a server and distributed computing across such servers for data-intensive applications. Our simulation running the full software stack shows that a server with 8 MCN DIMMs offers 4.56X higher throughput and consume 47.5% less energy than a cluster with 9 conventional nodes connected through Ethernet links, as it facilitates up to 8.17X higher aggregate DRAM bandwidth utilization. Lastly, we demonstrate the feasibility of MCN with an IBM POWER8 system and an experimental buffered DIMM.