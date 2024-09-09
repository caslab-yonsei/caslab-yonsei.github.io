---
layout: publication
title: "Memory Sharing-based Co-scheduling for Improving Cache efficiency of SMP Virtual Machines"
image: 
authors:
  - name: Minjun Hong
  - name: Sungjin Lee
    short: S. Lee
  - name: Daehoon Kim
co-first: false
type: Thesis
international: false
paper: 
  year: 2019
  publisher: "DGIST"
  publisher-short: "Thesis"
  ref:
sidebar:
  doi: 10.22697/thesis.200000171470
  links:
    - name: DGIST Scholar Page
      url: https://scholar.dgist.ac.kr/handle/20.500.11750/10747
      reveal: true
hidden: false
---

In native operating systems, CPUs running multithreaded application with memory sharing workload, which threads of the application have similar memory footprint, is deemed as always online and the CPUs can effectively use the last level cache (LLC) for their sharing working set. However, in the virtualized system, since the virtual CPUs (vCPUs) should be consolidated for physical resource utilization, the hypervisor also schedules them like processes scheduled by the physical CPUs in the native system. Therefore, it is possible that the vCPUs with memory sharing workload run in the different time quantum from each other, which can cause significantly more number of cache misses because it is not sure that the hypervisor simultaneously schedules the vCPUs which share much portion of used memory as possible and help them use the LLC effectively. Since access speed of DRAM is quite slower than LLC, if cache miss occurs too much, the vCPUs in the system have to wait for the data from DRAM for long time. Thus, the problem can lead to severe performance degradation. In this paper, we propose MCSCHED that stands for Memory sharing-based CO-SCHEDuling, a new vCPU scheduling policy on the virtualized system. MCSCHED detects the vCPUs with similar memory footprint and drives those vCPUs to be scheduled together. Since it can achieve more efficient use of the LLC, improves performance on highly consolidated system which the number of vCPU is much more than the number of physical CPU. Also, although our solution enforces the vCPUs with similar memory footprint to be scheduled more, we guarantee fairness between the virtual machines (VMs) in the system. We implemented MCSCHED for Xen hypervisor. And we measured performance of our solution by employing some micro benchmarks and certain benchmarks with various workloads. Result of the evaluations demonstrates that MCSCHED efficiently improves use of the LLC and accomplishes performance gain in the highly consolidated system.