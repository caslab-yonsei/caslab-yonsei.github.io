---
layout: publication
title: "Exploiting OS-level Page Offlining for DRAM Power Management"
image: 
authors:
  - name: Seunghak Lee
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
  - title: DGIST Scholar Page
    items:
      - type: link
        url: https://scholar.dgist.ac.kr/handle/20.500.11750/10741
doi: 10.22694/thesis.200000171481
components: [abstract, keywords, topics]
hidden: false
---

Data centers have consumed more power than past, and the increasing rate of consumed power intensifies every each year[25]. In the past, CPU is the most contributor to power consumption in the whole computing system[22, 23], but now the trend is changing. As the kind of workload is diversifying, the number of big memory workload that uses large memory space also increases. This trend leads to expanding of total memory capacities in modern computer systeMaster. DRAM is generally adopted as main memory, it should need refreshing of cells periodically preventing decay of data because the charge in each DRAM cell is discharged over time. With expanding of total memory capacities, the number of cells that should be refreshed also increase, general-scale servers, of course, energy consumed by memory in large-scale datacenter gradually increase. To overcome this, modern memory system has DRAM power management technique but actually it is not useful in modern computing system because of memory parallelism. In thesis, we show in the simulation that a novel proposed framework, called DMPC, can monitor unused free memory areas as well as also it turn-off DRAM cells that are mapped to each free memory areas so it can optimize energy consumed memory. Based on our evaluation result, we finally suggest necessity of lowest-power mode in future DRAM.

현대의 컴퓨터 시스템에서는 기존보다 더 다양하고 복잡한 워크로드를 동시에 실시간으로 수행하게 되었다. 이러한 상황에서 최근 인공지능 및 빅 데이터, 컴퓨터 그래픽, 과학 데이터 처리와 같은 메모리 사용량이 매우 큰 워크로드들은 컴퓨터 시스템의 메모리를 기존보다 더 많이 사용하게 되었다. 이에 따라 컴퓨터 시스템에서는 과거에 비해 더 많은 메모리 용량을 확보하는 것이 매우 중요하게 되었다. 그러나 더 많은 메모리 용량을 확보한 결과 기존에 비해 메모리에서 소모하는 전력의 양이 매우 늘어, 전체 컴퓨터 시스템에서 소모하는 에너지의 양이 늘어나게 되었다. 이는 단기적으로 봤을 때 컴퓨터 시스템의 운영 비용을 증가시키며 장기적으로는 전력 소모 증가에 따른 발열량에 의한 기기 수명까지도 감소시킬 수 있다. 메모리가 소모하는 전력 중에서도 유휴 상태일 때 소모되는 배경 전력이 증가함에 따라 시스템 내에서 프로세스나 커널이 전혀 사용하지 않고 있는 영역에 대해서도 소모되는 전력의 양이 매우 커졌다. 본 연구는 이처럼 시스템이 소모하는 전력 중에서 항시 소모되는 전력을 최소화하여 기존의 메모리 전력 관리 기법의 한계점을 극복한다. 다양한 워크로드에서의 실험 결과 본 연구에서 제시한 동적 메모리 전력관리 기법은 2%의 성능 오버헤드만으로도 전체 메모리 전력 소모량의20%를 평균적으로 감소시켰다.