---
layout: publication
title: "Co-Adjusting Voltage/Frequency State and Interrupt Rate for Improving Energy-Efficiency of Latency-Critical Applications"
image: /publications/images/2020-11-04-access20.jpg
authors:
  - name: Ki-Dong Kang
    short: K.-D. Kang
  - name: Hyungwon Park
    short: H. Park
  - name: Gyeongseo Park
    short: G. Park
  - name: Daehoon Kim
    short: D. Kim
co-first: true
type: Journal
international: true
paper:
  year: 2020
  publisher: "IEEE Access"
  publisher-short: "Access"
  ref: vol. 8, pp. 201028-201039
sidebar:
  doi: 10.1109/ACCESS.2020.3035777
hidden: false
---

As the power/energy consumption is one of the major contributors to the Total Cost of Ownership (TCO), improving power/energy efficiency is crucial for large-scale data centers where latency-critical applications are commonly accommodated while computing resources are usually under-utilized. For improving the power/energy efficiency of processors, most of the commercial processors support Dynamic Voltage and Frequency Scaling (DVFS) technology that enables to adjust Voltage and Frequency state (V/F state) of the processor dynamically. In particular, for the latency-critical applications, many prior studies propose power management policies using the DVFS for the latency-critical applications, which minimizes the performance degradation or satisfies the Service Level Objectives (SLOs) constraints. Meanwhile, although the interrupt rate also affects the response latency and energy efficiency of latency-critical applications considerably, those prior studies just introduce policies for V/F state adjustment while not considering the interrupt rate. Therefore, in this article, we investigate the impact of adjusting the interrupt rate on the tail response latency and energy consumption. Through our experimental results, we observe that adjusting interrupt rate along with V/F state management varies the performance and energy consumption considerably, and provides an opportunity to reduce energy further by showing latency overlap between different V/F states. Based on the observation, we show the quantitative potential in improving energy efficiency of co-adjusting V/F state and interrupt rate with a simple management policy, called Co-PI. Co-PI searches the most energy-efficient combination of the V/F state and interrupt rate from the latency and energy tables that we obtain through offline profiling, and reflect the combination to the core and NIC. Co-PI reduces energy consumption by 34.1% and 25.1% compared with performance and ondemand governors while showing the almost same tail response latency with the performance governor that operates cores at the highest V/F state statically.