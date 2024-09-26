---
layout: publication
title: "dist-gem5: Distributed simulation of computer clusters"
image:
authors:
  - name: Mohammad Alian
    short: M. Alian
  - name: Umur Darbaz
    short: U. Darbaz
  - name: Gabor Dozsa
    short: G. Dozsa
  - name: Stephan Diestelhorst
    short: S. Diestelhorst
  - name: Daehoon Kim
    short: D. Kim
  - name: Nam Sung Kim
    short: N. S. Kim
type: Paper
international: true
paper:
  year: 2017
  publisher: IEEE International Symposium on Performance Analysis of Systems and Software
  publisher-short: ISPASS
  publisher-type: Conference
  ref: pp. 153-162
researches: 
keywords:
  - Distributed computer systems
  - Full-system simulation
  - Performance analysis
  - Simulation infrastructure
sidebar:
  - title: Awards
    items:
      - type: text
        text: Nominated for the Best Paper Award
        icon: trophy
        overt: true
        reveal: true
doi: 10.1109/ISPASS.2017.7975287
components: [abstract, keywords, topics]
hidden: false
---

When analyzing a distributed computer system, we often observe that the complex interplay among processor, node, and network sub-systems can profoundly affect the performance and power efficiency of the distributed computer system. Therefore, to effectively cross-optimize hardware and software components of a distributed computer system, we need a full-system simulation infrastructure that can precisely capture the complex interplay. Responding to the aforementioned need, we present dist-gem5, a flexible, detailed, and open-source full-system simulation infrastructure that can model and simulate a distributed computer system using multiple simulation hosts. Then we validate dist-gem5 against a physical cluster and show that the latency and bandwidth of the simulated network sub-system are within 18% of the physical one. Compared with the single threaded and parallel versions of gem5, dist-gem5 speeds up the simulation of a 63-node computer cluster by 83.1x and 12.8x, respectively.