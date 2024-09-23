---
layout: publication
title: "IDIO: Orchestrating Inbound Network Data on Server Processors"
image:
authors:
  - name: Mohammad Alian
    short: M. Alian
  - name: Jongmin Shin
    short: J. Shin
  - name: Ki-Dong Kang
    short: K.-D. Kang
  - name: Ren Wang
    short: R. Wang
  - name: Alexandros Daglis
    short: A. Daglis
  - name: Daehoon Kim
    short: D. Kim
  - name: Nam Sung Kim
    short: N. S. Kim
co-first: true
type: Paper
international: true
researches: [memory, cloud]
keywords:
  - Inbound network data placement
  - Memory hierarchy optimization
  - Cache architecture
  - Server processors
  - Data center performance
paper: # delete if patent
  year: 2021
  publisher: "IEEE Computer Architecture Letters"
  publisher-short: "CAL"
  publisher-type: Journal
  ref: vol. 20, no. 1, pp. 30-33
sidebar:
doi: 10.1109/LCA.2020.3044923
components: [abstract, keywords, topics]
hidden: false
---

Network bandwidth demand in datacenters is doubling every 12 to 15 months. In response to this demand, high-bandwidth network interface cards, each capable of transferring 100s of Gigabits of data per second, are making inroads into the servers of next-generation datacenters. Such unprecedented data delivery rates on server endpoints raise new challenges, as inbound network traffic placement decisions within the memory hierarchy have a direct impact on end-to-end performance. Modern server-class Intel processors leverage DDIO technology to steer all inbound network data into the last-level cache (LLC), regardless of the network traffic’s nature. This static data placement policy is suboptimal, both from a performance and an energy efficiency standpoint. In this work, we design IDIO , a framework that—unlike DDIO—dynamically decides where to place inbound network traffic within a server’s multi-level memory hierarchy. IDIO dynamically monitors system behavior and distinguishes between different traffic classes to determine and periodically re-evaluate the best placement location for each flow: LLC, mid-level (L2) cache or DRAM. Our results show that IDIO increases a server’s maximum sustainable load by up to ∼ 33.3% across various network functions.