---
layout: publication
title: "Defending Against Flush+Reload Attack With DRAM Cache by Bypassing Shared SRAM Cache"
image: /publications/images/2020-09-30-access20.gif
authors:
  - name: Minwoo Jang
    short: M. Jang
  - name: Seungkyu Lee
    short: S. Lee
  - name: Jaeha Kung
    short: J. Kung
  - name: Daehoon Kim
    short: D. Kim
type: Journal
international: true
paper:
  year: 2020
  publisher: "IEEE Access"
  publisher-short: "Access"
  ref: vol. 8, pp. 179837-179844
sidebar:
  doi: 10.1109/ACCESS.2020.3027946
hidden: false
---

Cache side-channel attack is one of the critical security threats to modern computing systems. As a representative cache side-channel attack, Flush+Reload attack allows an attacker to steal confidential information (e.g., private encryption key) by monitoring a victim's cache access patterns while generating the confidential values. Meanwhile, for providing high performance with memory-intensive applications that do not fit in the on-chip SRAM-based last-level cache (e.g., L3 cache), modern computing systems start to deploy DRAM cache between the SRAM-based last-level cache and the main memory DRAM, which can provide low latency and/or high bandwidth. However, in this work, we propose an approach that exploits the DRAM cache for security rather than performance, called ByCA. ByCA bypasses the L3 shared cache when accessing cache blocks suspected as target blocks of an attacker. Consequently, ByCA eliminates the timing difference when the attacker accesses the target cache blocks, nullifying the Flush+Reload attacks. To this end, ByCA keeps cache blocks suspected as target blocks of the attacker and stores their states (i.e., flushed by clflush or not) in the L4 DRAM cache even with clflush instruction; ByCA re-defines and re-implements clflush instruction not to flush cache blocks from the L4 DRAM cache while flushing the blocks from other level caches (i.e., L1, L2, and L3 caches). In addition, ByCA bypasses L3 cache when the attacker or the victim accesses the target blocks flushed by clflush, making the attacker always obtain the blocks from L4 DRAM cache regardless of the victim's access patterns. Consequently, ByCA eliminates the timing difference, thus the attacker cannot monitor the victim's cache access patterns. For L4 DRAM cache, we implement Alloy Cache design and use an unused bit in a tag entry for each block to store its state. ByCA only requires a single bit extension to cache blocks in L1 and L2 private caches, and a tag entry for each block in the L4 DRAM cache. Our experimental results show that ByCA completely eliminates the timing differences when the attacker reloads the target blocks. Furthermore, ByCA does not show the performance degradation for the victim while co-running with the attacker that flushes and reloads target blocks temporally and repetitively.