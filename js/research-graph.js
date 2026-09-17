/**
 * CASLAB Research Knowledge Graph & Publication Inspector
 * Powered by D3.js v7
 * Cleaned & Curated Concept Network
 */

(function () {
  'use strict';

  // Domain configuration & color palette
  const DOMAINS = {
    llm: {
      id: 'llm',
      name: 'Efficient LLM & Emerging ML Systems',
      shortName: 'LLM & ML',
      color: '#7c5aa6',
      bgLight: '#efe7f7',
      target: { xOffset: -250, yOffset: -150 },
      // matchOrder controls precedence when a text could match several domains
      matchOrder: 50,
      filterLabel: 'LLM & ML Systems',
      matchers: ['llm', 'anns', 'rag', 'recommendation', 'transformer', 'language model', 'machine learning', 'ai system', 'ai hw', 'ai ', ' ml '],
      pillarTitle: 'Efficient LLM and Emerging ML Systems',
      pillarDesc: 'We develop efficient systems for large language models and emerging machine learning workloads, focusing on reducing computation, memory, and data-movement overhead. Our research includes LLM training and serving, RAG and ANNS, memory optimization, and hardware-aware acceleration.',
      topKeywords: ['LLM Training', 'LLM Inference', 'Vector Search (ANNS)', 'CPU Offloading & SIMD', 'On-Device AI']
    },
    cxl: {
      id: 'cxl',
      name: 'CXL-based Memory Systems',
      shortName: 'CXL Memory',
      color: '#2f6f9f',
      bgLight: '#e3eef7',
      target: { xOffset: -260, yOffset: 90 },
      matchOrder: 40,
      filterLabel: 'CXL Memory',
      matchers: ['cxl', 'tiered memory', 'disaggregat'],
      pillarTitle: 'CXL-based Memory Systems',
      pillarDesc: 'We design CXL-based memory systems for efficient use of tiered and disaggregated memory. Our research focuses on memory placement, capacity expansion, and resource management across diverse memory devices.',
      topKeywords: ['CXL & Tiered Memory', 'Memory Disaggregation', 'Memory Placement', 'Capacity Expansion']
    },
    pim: {
      id: 'pim',
      name: 'Processing-in/Near-Memory (PIM/PNM)',
      shortName: 'PIM / PNM',
      color: '#3d8e82',
      bgLight: '#e0efec',
      target: { xOffset: -60, yOffset: 200 },
      matchOrder: 30,
      filterLabel: 'PIM / PNM',
      matchers: ['pim', 'pnm', 'processing-in-memory', 'processing in memory', 'near-memory', 'near memory', 'near-data', 'ndp'],
      pillarTitle: 'Processing-in/Near-Memory (PIM/PNM)',
      pillarDesc: 'We explore PIM/PNM architectures that reduce costly data movement by bringing computation closer to memory. Our work spans architectural design, data placement, and system support for memory-intensive workloads.',
      topKeywords: ['Processing-in-Memory', 'Near-Data Processing', 'NDP', 'Memory-Intensive Workloads']
    },
    gpu: {
      id: 'gpu',
      name: 'GPU/NPU Computing Systems',
      shortName: 'GPU / NPU',
      color: '#9a7d2e',
      bgLight: '#f2ecd8',
      target: { xOffset: 0, yOffset: -220 },
      matchOrder: 60,
      filterLabel: 'GPU / NPU',
      matchers: ['gpu', 'npu', 'accelerator', 'amx', 'tpu'],
      pillarTitle: 'GPU/NPU Computing Systems',
      pillarDesc: 'We study efficient execution of emerging workloads on GPUs, NPUs, and other on-chip accelerators. Our research covers accelerator-aware execution, CPU–accelerator cooperation, on-device computing, and hardware/software co-design.',
      topKeywords: ['GPU UVM & Oversubscription', 'Intel AMX Acceleration', 'CPU–Accelerator Cooperation', 'On-Device AI']
    },
    cloud: {
      id: 'cloud',
      name: 'Cloud & Datacenter Resource Management',
      shortName: 'Cloud / Datacenter',
      color: '#4a6fa5',
      bgLight: '#e6ecf5',
      target: { xOffset: 250, yOffset: -110 },
      matchOrder: 20,
      filterLabel: 'Cloud & Datacenter',
      matchers: ['cloud', 'datacenter', 'data center', 'virtualization', 'hypervisor', 'faas', 'serverless', 'power', 'energy', 'qos', 'schedul', 'latency-critical', 'resource management'],
      pillarTitle: 'Cloud and Datacenter Resource Management',
      pillarDesc: 'We develop resource management techniques for cloud and datacenter systems to improve performance, utilization, and energy efficiency. Our work includes scheduling, resource isolation, SLO/QoS management, and workload consolidation.',
      topKeywords: ['Serverless & FaaS', 'Latency-Critical QoS', 'DVFS & Power Management', 'Datacenter Systems', 'Virtualization & Hypervisor']
    },
    security: {
      id: 'security',
      name: 'Secure Computer Architecture',
      shortName: 'Security',
      color: '#a84564',
      bgLight: '#f5e2e8',
      target: { xOffset: 240, yOffset: 150 },
      matchOrder: 70,
      filterLabel: 'Secure Architecture',
      matchers: ['security', 'side-channel', 'side channel', 'rowhammer', 'transient', 'speculat', 'covert', 'attack', 'trusted execution'],
      pillarTitle: 'Secure Computer Architecture',
      pillarDesc: 'We investigate architectural security vulnerabilities and develop mechanisms to protect modern computing systems. Our research covers side-channel and transient-execution attacks, DRAM RowHammer, memory integrity, and architectural defenses.',
      topKeywords: ['Transient Execution Attacks', 'Side-Channel Attacks', 'DRAM Reliability & Rowhammer', 'Speculative Execution Defense', 'Microarchitectural Security']
    }
  };

  // Fallback domain used when nothing matches.
  const FALLBACK_DOMAIN = 'cloud';

  // Domains ordered for display (filters, legend, pillars).
  const DOMAIN_ORDER = ['llm', 'cxl', 'pim', 'gpu', 'cloud', 'security'];

  // Domains ordered by match precedence (higher matchOrder wins first).
  const DOMAIN_MATCH_ORDER = Object.values(DOMAINS)
    .slice()
    .sort((a, b) => b.matchOrder - a.matchOrder);

  // High-level Semantic Concept Map: Merges near-duplicate and context-overlapping terms
  const CONCEPT_MAP = {
    // 1. LLM Training
    'llm training': 'LLM Training',
    'cpu offloaded llm training': 'LLM Training',
    'large language model, optimizer, training, heterogeneous memory, distributed training': 'LLM Training',
    'deep partitioned training': 'LLM Training',
    'model partitioning': 'LLM Training',

    // 2. LLM Inference
    'llm inference': 'LLM Inference',
    'on-device llm inference': 'LLM Inference',
    'processing-in-memory, sparse llm inference, large language model inference': 'LLM Inference',
    'transformer models': 'LLM Inference',
    'rotary positional embedding': 'LLM Inference',

    // 3. CPU Offloading & SIMD
    'cpu offloading': 'CPU Offloading & SIMD',
    'simd': 'CPU Offloading & SIMD',
    'register-resident simd fusion': 'CPU Offloading & SIMD',
    'optimizer update scheduling': 'CPU Offloading & SIMD',

    // 4. Hardware Accelerators
    'accelerator': 'Hardware Accelerators',
    'accelerators': 'Hardware Accelerators',
    'accelerator design': 'Hardware Accelerators',
    'data streaming accelerators': 'Hardware Accelerators',
    'data streaming accelerator': 'Hardware Accelerators',
    'dnn accelerators': 'Hardware Accelerators',
    'dnn training acceleration': 'Hardware Accelerators',
    'ai hw accelerators': 'Hardware Accelerators',
    'hardware acceleration': 'Hardware Accelerators',
    'npu': 'Hardware Accelerators',
    'neural processing unit': 'Hardware Accelerators',
    'fpga prototype': 'Hardware Accelerators',

    // 5. Intel AMX Acceleration
    'amx': 'Intel AMX Acceleration',
    'amx-gpu cooperative acceleration': 'Intel AMX Acceleration',
    'gemm reformulation': 'Intel AMX Acceleration',
    'gemm': 'Intel AMX Acceleration',
    'intel amx, cache optimization, large language model inference, numa-aware systems, performance analysis': 'Intel AMX Acceleration',

    // 6. Vector Search (ANNS)
    'anns': 'Vector Search (ANNS)',
    'billion-scale anns': 'Vector Search (ANNS)',
    'approximate nearest neighbor search': 'Vector Search (ANNS)',
    'locality-aware inner product processing': 'Vector Search (ANNS)',
    'large-scale data analytics': 'Vector Search (ANNS)',
    'dynamic subspace adjustment': 'Vector Search (ANNS)',

    // 7. GPU Architecture
    'gpu': 'GPU Architecture',

    // 8. CXL & Tiered Memory
    'cxl': 'CXL & Tiered Memory',
    'compute express link': 'CXL & Tiered Memory',
    'tiered memory': 'CXL & Tiered Memory',
    'tiered memory system': 'CXL & Tiered Memory',
    'tiered memory systems': 'CXL & Tiered Memory',
    'memory channel network': 'CXL & Tiered Memory',
    'non-volatile memory': 'CXL & Tiered Memory',
    'numa interleaving': 'CXL & Tiered Memory',

    // 9. PIM / NDP
    'pim': 'PIM / NDP',
    'ndp': 'PIM / NDP',
    'cxl-ndp systems': 'PIM / NDP',
    'ndp, cxl, llm': 'PIM / NDP',
    'processing-in-memory': 'PIM / NDP',
    'near-memory processing': 'PIM / NDP',
    'near-storage computing': 'PIM / NDP',
    'data movement reduction': 'PIM / NDP',
    'sparse matrix multiplication': 'PIM / NDP',

    // 10. GPU UVM & Oversubscription
    'uvm': 'GPU UVM & Oversubscription',
    'unified virtual memory': 'GPU UVM & Oversubscription',
    'gpu uvm': 'GPU UVM & Oversubscription',
    'memory oversubscription': 'GPU UVM & Oversubscription',
    'gpu memory oversubscription': 'GPU UVM & Oversubscription',
    'uvm oversubscription': 'GPU UVM & Oversubscription',
    'device-side memory reclamation': 'GPU UVM & Oversubscription',
    'memory reclamation': 'GPU UVM & Oversubscription',

    // 11. DRAM & Memory Hierarchies
    'dram': 'DRAM & Memory Hierarchies',
    'dram cache': 'DRAM & Memory Hierarchies',
    'memory-efficient computing': 'DRAM & Memory Hierarchies',
    'memory hierarchy optimization': 'DRAM & Memory Hierarchies',
    'memory performance optimization': 'DRAM & Memory Hierarchies',

    // 12. DRAM Reliability
    'row hammering': 'DRAM Reliability',
    'row hammer attack': 'DRAM Reliability',
    'memory offlining': 'DRAM Reliability',
    'os-level memory offlining': 'DRAM Reliability',
    'dram vulnerabilities': 'DRAM Reliability',
    'dram power management': 'DRAM Reliability',
    'integrity': 'DRAM Reliability',
    'reliability': 'DRAM Reliability',
    'memory integrity': 'DRAM Reliability',

    // 13. OS Memory Management
    'memory management': 'OS Memory Management',
    'os-assisted memory management': 'OS Memory Management',
    'page table monitor': 'OS Memory Management',
    'page table walk': 'OS Memory Management',
    'memory page table': 'OS Memory Management',
    'physical memory address': 'OS Memory Management',
    'page coloring': 'OS Memory Management',
    'page migration': 'OS Memory Management',
    'prefetching': 'OS Memory Management',
    'kernel samepage merging': 'OS Memory Management',
    'kernel samepage mering': 'OS Memory Management',
    'memory deduplication': 'OS Memory Management',
    'memory isolation': 'OS Memory Management',
    'data-intensive applications': 'OS Memory Management',

    // 14. On-Chip Cache Design (solution names → generic concept)
    'cache architecture': 'On-Chip Cache Design',
    'last-level cache': 'On-Chip Cache Design',
    'last-level cache management': 'On-Chip Cache Design',
    'mid-level cache': 'On-Chip Cache Design',
    'vcache': 'On-Chip Cache Design',      // solution name → concept
    'virtual llc': 'On-Chip Cache Design', // solution name → concept
    'on-chip caching': 'On-Chip Cache Design',
    'dynamic cache allocation': 'On-Chip Cache Design',
    'cache hierarchy optimization': 'On-Chip Cache Design',
    'cache management': 'On-Chip Cache Design',
    'cache optimization': 'On-Chip Cache Design',
    'pollute buffer': 'On-Chip Cache Design',
    'fine-grained on-chip memory management': 'On-Chip Cache Design',

    // 15. Cache Coherence Protocols
    'cache coherence': 'Cache Coherence Protocols',
    'coherence protocol': 'Cache Coherence Protocols',
    'coherence filtering': 'Cache Coherence Protocols',
    'snoop-based coherence protocol': 'Cache Coherence Protocols',
    'subspace snooping': 'Cache Coherence Protocols',
    'virtual snooping': 'Cache Coherence Protocols',
    'token coherence': 'Cache Coherence Protocols',
    'cache-to-cache transfers': 'Cache Coherence Protocols',
    'shrinking mechanisms': 'Cache Coherence Protocols',
    'speculative shrinking': 'Cache Coherence Protocols',
    'multi-core scalability': 'Cache Coherence Protocols',

    // 16. Serverless & FaaS
    'faas': 'Serverless & FaaS',
    'function-as-a-service': 'Serverless & FaaS',
    'faas workloads': 'Serverless & FaaS',
    'worker-driven scheduling': 'Serverless & FaaS',
    'faas, cloud, shared memory, memory isolation': 'Serverless & FaaS',

    // 17. Datacenter & Cloud Systems
    'cloud': 'Datacenter & Cloud Systems',
    'cloud servers': 'Datacenter & Cloud Systems',
    'public clouds': 'Datacenter & Cloud Systems',
    'data center': 'Datacenter & Cloud Systems',
    'data center architecture': 'Datacenter & Cloud Systems',
    'data center performance': 'Datacenter & Cloud Systems',
    'data center servers': 'Datacenter & Cloud Systems',
    'data-center servers': 'Datacenter & Cloud Systems',
    'server processors': 'Datacenter & Cloud Systems',
    'distributed computer systems': 'Datacenter & Cloud Systems',
    'parallel/distributed systems': 'Datacenter & Cloud Systems',

    // 18. Isolation & QoS Management
    'performance isolation': 'Isolation & QoS Management',
    'shared-memory isolation': 'Isolation & QoS Management',
    'latency-critical workloads': 'Isolation & QoS Management',
    'latency-critical applications': 'Isolation & QoS Management',
    'latency-critical application': 'Isolation & QoS Management',
    'service level objectives': 'Isolation & QoS Management',
    'service level agreement': 'Isolation & QoS Management',
    'scheduling and resource management': 'Isolation & QoS Management',
    'online monitoring': 'Isolation & QoS Management',

    // 19. Virtualization & Hypervisor
    'virtualization': 'Virtualization & Hypervisor',
    'system virtualization': 'Virtualization & Hypervisor',
    'virtual machines': 'Virtualization & Hypervisor',
    'hypervisor': 'Virtualization & Hypervisor',
    'guest os': 'Virtualization & Hypervisor',
    'heterogeneous vms': 'Virtualization & Hypervisor',
    'virtualized environments': 'Virtualization & Hypervisor',

    // 20. Network I/O & Packet Processing
    'network packet processing': 'Network I/O & Packet Processing',
    'parallel network packet processing': 'Network I/O & Packet Processing',
    'high performance networking': 'Network I/O & Packet Processing',
    'high-bandwidth communication': 'Network I/O & Packet Processing',
    'inbound network data orchestration': 'Network I/O & Packet Processing',
    'inbound network data placement': 'Network I/O & Packet Processing',
    'network-driven packet context': 'Network I/O & Packet Processing',
    'network applications': 'Network I/O & Packet Processing',
    'direct data i/o': 'Network I/O & Packet Processing',
    'transmission queue management': 'Network I/O & Packet Processing',
    'external device communication': 'Network I/O & Packet Processing',
    'interrupt management': 'Network I/O & Packet Processing',
    'interrupt rate adjustment': 'Network I/O & Packet Processing',
    'client-server architecture': 'Network I/O & Packet Processing',

    // 21. Energy Efficiency
    'energy efficiency': 'Energy Efficiency',
    'power efficiency': 'Energy Efficiency',
    'background power reduction': 'Energy Efficiency',
    'sub-array granularity power-down': 'Energy Efficiency',

    // 22. DVFS & Power Management
    'power management': 'DVFS & Power Management',
    'dynamic voltage and frequency scaling': 'DVFS & Power Management',
    'dynamic voltage/frequency scaling': 'DVFS & Power Management',
    'processor idle states': 'DVFS & Power Management',
    'processor idle state': 'DVFS & Power Management',

    // 23. Dynamic Core Management
    'core allocation': 'Dynamic Core Management',
    'dynamic core allocation': 'Dynamic Core Management',
    'dynamic core management': 'Dynamic Core Management',

    // 24. Microarchitectural Security
    'security': 'Microarchitectural Security',
    'security mitigation techniques': 'Microarchitectural Security',
    'security attacks': 'Microarchitectural Security',
    'attack detection': 'Microarchitectural Security',
    'hardware performance counters': 'Microarchitectural Security',
    'data center security': 'Microarchitectural Security',
    'network security': 'Microarchitectural Security',

    // 25. Transient Execution Attacks
    'transient execution attacks': 'Transient Execution Attacks',
    'transient execution': 'Transient Execution Attacks',
    'spectre, transient-execution attacks, microarchitectural attacks, side-channel attacks': 'Transient Execution Attacks',
    'cache quarantine': 'Transient Execution Attacks',
    'invisible speculation': 'Transient Execution Attacks',
    'speculation': 'Transient Execution Attacks',

    // 26. Side-Channel & Contention Attacks
    'side-channel attack': 'Side-Channel & Contention Attacks',
    'side channel attacks': 'Side-Channel & Contention Attacks',
    'cache side-channel attacks': 'Side-Channel & Contention Attacks',
    'flush+reload attack': 'Side-Channel & Contention Attacks',
    'covert channel attacks': 'Side-Channel & Contention Attacks',
    'covert/side channel attacks': 'Side-Channel & Contention Attacks',
    'microarchitectural side channel, mshr contention': 'Side-Channel & Contention Attacks',
    'timing attacks': 'Side-Channel & Contention Attacks',
    'throughput contention': 'Side-Channel & Contention Attacks',
    'mshr contention': 'Side-Channel & Contention Attacks',

    // 27. Drop: too generic or noisy → return null to exclude node
    'computer hardware': null,
    'computing system': null,
    'physical systems': null,
    'embedded systems': null,
    'agricultural robots': null,
    'failure analysis': null,
    'failure rate': null,
    'simulation infrastructure': null,
    'full system simulation': null,
    'full-system simulation': null,
    'performance optimization': null,
    'performance analysis': null,
    'data center performance': null,
  };

  // Map an arbitrary text signal (a field label or a keyword) to a domain.
  // Returns null when nothing matches, so callers can combine multiple signals.
  function matchDomain(text) {
    if (!text) return null;
    const low = ' ' + String(text).toLowerCase().trim() + ' ';
    for (const domain of DOMAIN_MATCH_ORDER) {
      if (domain.matchers.some(m => low.includes(m))) return domain.id;
    }
    if (low.includes('memory')) return 'cxl';
    return null;
  }

  // Resolve the domains a paper belongs to. Keyword signals are more specific
  // than the broad publication_fields tags, so keywords take precedence.
  function resolvePaperDomains(paper) {
    const domains = new Set();
    (paper.keywords || []).forEach(k => {
      // A keyword entry can be a comma-separated list (e.g. "NDP, CXL, LLM")
      String(k).split(',').forEach(part => {
        const d = matchDomain(part);
        if (d) domains.add(d);
      });
    });
    if (domains.size === 0) {
      (paper.fields || []).forEach(f => {
        const d = matchDomain(f);
        if (d) domains.add(d);
      });
    }
    if (domains.size === 0) domains.add(FALLBACK_DOMAIN);
    return domains;
  }

  // Application state
  let allPapers = [];
  let graphNodes = [];
  let graphLinks = [];
  let nodeMap = new Map();
  let linkMap = new Map();
  let activeDomain = 'all';
  let selectedKeyword = null;
  let simulation = null;
  let svg = null;
  let gZoom = null;
  let zoomBehavior = null;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const dataElem = document.getElementById('caslab-pubs-data');
    if (!dataElem) return;

    try {
      allPapers = JSON.parse(dataElem.textContent);
    } catch (e) {
      console.error('Failed to parse publication data:', e);
      return;
    }

    renderFilters();
    renderLegend();
    buildGraphData();
    renderGraph();
    bindEvents();
    renderInspector(null);
    renderMatrixView();
  }

  // Build the domain filter chips from DOMAINS (single source of truth).
  function renderFilters() {
    const bar = document.getElementById('research-filters');
    if (!bar) return;
    // Keep the "Filter:" label (first child), append All + one chip per domain.
    const chips = [`<button class="research-filter-chip active" data-domain="all">All Domains</button>`]
      .concat(DOMAIN_ORDER.map(id =>
        `<button class="research-filter-chip" data-domain="${id}">${DOMAINS[id].filterLabel}</button>`
      ));
    bar.insertAdjacentHTML('beforeend', chips.join(''));
  }

  // Build the graph legend from DOMAINS.
  function renderLegend() {
    const legend = document.querySelector('.graph-legend-overlay');
    if (!legend) return;
    const items = DOMAIN_ORDER.map(id => {
      const d = DOMAINS[id];
      return `<div class="graph-legend-item">
          <div class="graph-legend-color" style="background: ${d.bgLight}; border: 1.5px solid ${d.color};"></div>
          <span>${d.filterLabel}</span>
        </div>`;
    });
    legend.insertAdjacentHTML('beforeend', items.join(''));
  }

  function buildGraphData() {
    nodeMap.clear();
    linkMap.clear();

    allPapers.forEach(paper => {
      const paperDomains = resolvePaperDomains(paper);

      const rawKws = paper.keywords || [];
      const paperConcepts = new Map(); // conceptName -> Set of original terms

      rawKws.forEach(k => {
        const clean = String(k).trim();
        if (!clean) return;
        const low = clean.toLowerCase();
        // Use representative concept if mapped, or clean Title Case if not
        const concept = CONCEPT_MAP[low] || clean
          .split(/\s+/)
          .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(' ');

        if (!paperConcepts.has(concept)) {
          paperConcepts.set(concept, new Set());
        }
        paperConcepts.get(concept).add(clean);
      });

      // Deduplicate concepts in this paper: prevents cliques of near-synonyms!
      const uniqueConcepts = Array.from(paperConcepts.keys());

      uniqueConcepts.forEach(concept => {
        if (!nodeMap.has(concept)) {
          nodeMap.set(concept, {
            id: concept,
            label: concept,
            count: 0,
            papers: [],
            domains: new Map(),
            neighbors: new Set(),
            subKeywords: new Set()
          });
        }
        const node = nodeMap.get(concept);
        node.count += 1;
        node.papers.push(paper);
        paperConcepts.get(concept).forEach(orig => node.subKeywords.add(orig));
        paperDomains.forEach(d => {
          node.domains.set(d, (node.domains.get(d) || 0) + 1);
        });
      });

      // Co-occurrence edges between distinct concepts
      for (let i = 0; i < uniqueConcepts.length; i++) {
        for (let j = i + 1; j < uniqueConcepts.length; j++) {
          const c1 = uniqueConcepts[i];
          const c2 = uniqueConcepts[j];
          nodeMap.get(c1).neighbors.add(c2);
          nodeMap.get(c2).neighbors.add(c1);

          const edgeKey = c1 < c2 ? `${c1}___${c2}` : `${c2}___${c1}`;
          if (!linkMap.has(edgeKey)) {
            linkMap.set(edgeKey, {
              source: c1,
              target: c2,
              weight: 0
            });
          }
          linkMap.get(edgeKey).weight += 1;
        }
      }
    });

    // Curate nodes: Filter out obscure one-offs, keeping core concepts and significant nodes (count >= 2)
    const curatedConceptValues = new Set(Object.values(CONCEPT_MAP));
    
    graphNodes = Array.from(nodeMap.values())
      .filter(node => node.count >= 2 || curatedConceptValues.has(node.id))
      .map(node => {
        let maxCount = -1;
        let primary = FALLBACK_DOMAIN;
        node.domains.forEach((cnt, dom) => {
          if (cnt > maxCount) {
            maxCount = cnt;
            primary = dom;
          }
        });
        node.primaryDomain = primary;
        node.domainList = Array.from(node.domains.keys());
        // Node sizing
        node.radius = Math.min(Math.max(Math.sqrt(node.count) * 6.5 + 7, 10), 28);
        return node;
      });

    const activeNodeIds = new Set(graphNodes.map(n => n.id));

    // Filter links so both endpoints are in graphNodes
    graphLinks = Array.from(linkMap.values()).filter(l => 
      activeNodeIds.has(l.source) && activeNodeIds.has(l.target)
    );
  }

  function renderGraph() {
    const container = document.getElementById('research-graph-card');
    if (!container) return;

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 640;

    d3.select('#research-graph-svg').selectAll('*').remove();

    svg = d3.select('#research-graph-svg')
      .attr('viewBox', [0, 0, width, height]);

    gZoom = svg.append('g').attr('class', 'zoom-layer');

    zoomBehavior = d3.zoom()
      .scaleExtent([0.3, 4])
      .on('zoom', (event) => {
        gZoom.attr('transform', event.transform);
      });

    svg.call(zoomBehavior);

    // D3 Force Simulation with more breathing space
    simulation = d3.forceSimulation(graphNodes)
      .alphaDecay(0.025)
      .force('link', d3.forceLink(graphLinks)
        .id(d => d.id)
        .distance(d => Math.max(95 - Math.min(d.weight * 12, 45), 50))
        .strength(0.35)
      )
      .force('charge', d3.forceManyBody()
        .strength(d => -160 - (d.radius * 4.5))
      )
      .force('collide', d3.forceCollide().radius(d => d.radius + 14).iterations(2))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('domainX', d3.forceX(d => {
        const offset = DOMAINS[d.primaryDomain]?.target?.xOffset || 0;
        return (width / 2) + offset;
      }).strength(0.055))
      .force('domainY', d3.forceY(d => {
        const offset = DOMAINS[d.primaryDomain]?.target?.yOffset || 0;
        return (height / 2) + offset;
      }).strength(0.055));

    // Draw Links
    const link = gZoom.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graphLinks)
      .join('line')
      .attr('class', 'graph-link')
      .attr('stroke-width', d => Math.min(1.2 + d.weight * 0.9, 4.5));

    // Draw Nodes
    const node = gZoom.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(graphNodes)
      .join('g')
      .attr('class', 'graph-node')
      .call(drag(simulation));

    // Node Circle — light domain fill with a matching darker domain outline
    node.append('circle')
      .attr('r', d => d.radius)
      .attr('fill', d => DOMAINS[d.primaryDomain]?.bgLight || '#e0f2fe')
      .attr('fill-opacity', 1)
      .attr('stroke', d => DOMAINS[d.primaryDomain]?.color || '#4a6fa5')
      .attr('stroke-width', 2);

    // Labels for all curated nodes
    node.append('text')
      .attr('dy', d => d.radius + 13)
      .attr('text-anchor', 'middle')
      .text(d => d.label)
      .style('display', 'block');

    const tooltip = d3.select('#graph-tooltip');

    node
      .on('mouseenter', (event, d) => {
        highlightNode(d);
        tooltip
          .style('display', 'block')
          .html(`
            <div class="graph-tooltip-title">${d.label}</div>
            <div class="graph-tooltip-domain">${DOMAINS[d.primaryDomain]?.name || 'Systems'}</div>
            <div class="graph-tooltip-count">${d.count} Publication${d.count > 1 ? 's' : ''}</div>
          `);
      })
      .on('mousemove', (event) => {
        const containerRect = container.getBoundingClientRect();
        tooltip
          .style('left', (event.clientX - containerRect.left + 15) + 'px')
          .style('top', (event.clientY - containerRect.top + 15) + 'px');
      })
      .on('mouseleave', () => {
        tooltip.style('display', 'none');
        if (!selectedKeyword) {
          resetHighlights();
        } else {
          highlightNode(nodeMap.get(selectedKeyword));
        }
      })
      .on('click', (event, d) => {
        event.stopPropagation();
        selectKeyword(d.id);
      });

    svg.on('click', () => {
      clearSelection();
    });

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  }

  function drag(sim) {
    function dragstarted(event) {
      if (!event.active) sim.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) sim.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  }

  function highlightNode(d) {
    if (!d) return;

    const connectedNodeIds = new Set(d.neighbors);
    connectedNodeIds.add(d.id);

    gZoom.selectAll('.graph-node')
      .classed('dimmed', n => !connectedNodeIds.has(n.id));

    gZoom.selectAll('.graph-link')
      .classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id)
      .classed('highlighted', l => l.source.id === d.id || l.target.id === d.id);
  }

  function resetHighlights() {
    gZoom.selectAll('.graph-node')
      .classed('dimmed', false);

    gZoom.selectAll('.graph-link')
      .classed('dimmed', false)
      .classed('highlighted', false);

    if (activeDomain !== 'all') {
      filterByDomain(activeDomain);
    }
  }

  function selectKeyword(keywordName) {
    const node = nodeMap.get(keywordName);
    if (!node) return;

    selectedKeyword = keywordName;

    gZoom.selectAll('.graph-node')
      .classed('active', n => n.id === keywordName);

    highlightNode(node);

    if (svg && zoomBehavior && node.x !== undefined) {
      const container = document.getElementById('research-graph-card');
      const width = container.clientWidth || 700;
      const height = container.clientHeight || 640;

      svg.transition()
        .duration(650)
        .call(
          zoomBehavior.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(1.3)
            .translate(-node.x, -node.y)
        );
    }

    renderInspector(node);
  }

  function clearSelection() {
    selectedKeyword = null;
    gZoom.selectAll('.graph-node').classed('active', false);
    resetHighlights();
    renderInspector(null);
  }

  function renderInspector(node) {
    const headerElem = document.getElementById('inspector-header');
    const bodyElem = document.getElementById('inspector-body');
    if (!headerElem || !bodyElem) return;

    if (!node) {
      headerElem.innerHTML = `
        <div class="inspector-header-top">
          <span class="inspector-domain-badge" style="background: #f1f5f9; color: #003876;">Interactive Navigator</span>
        </div>
        <div class="inspector-title" style="font-size: 1.25em;">Explore Research Topics</div>
        <div class="inspector-meta">Select any core concept in the graph to inspect relevant publications.</div>
      `;

      bodyElem.innerHTML = `
        <div class="inspector-welcome">
          <div class="inspector-welcome-icon"><i class="fa fa-share-alt"></i></div>
          <div class="inspector-welcome-title">CASLAB Knowledge Nexus</div>
          <div class="inspector-welcome-text">
            Our research spans emerging AI, Memory hierarchies, Cloud systems, and Microarchitectural security. Click any node in the graph or explore featured topics below:
          </div>
          <div class="inspector-featured-box">
            <div class="inspector-featured-title">Featured Research Themes</div>
            <div class="inspector-featured-chips">
              ${['LLM Training', 'CXL & Tiered Memory', 'GPU UVM & Oversubscription', 'Serverless & FaaS', 'Intel AMX Acceleration', 'CPU Offloading & SIMD', 'Cache Coherence Protocols', 'Transient Execution Attacks'].map(k => `
                <button class="inspector-chip" onclick="window.caslabSelectKeyword('${k}')">${k}</button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      return;
    }

    const domainInfo = DOMAINS[node.primaryDomain] || DOMAINS.cloud;

    // Show sub-keywords / specific terms included
    const subKwArray = Array.from(node.subKeywords || []).filter(k => k.toLowerCase() !== node.label.toLowerCase());
    const subKwHtml = subKwArray.length > 0 ? `
      <div style="font-size: 0.78em; color: #64748b; margin-top: 5px;">
        <strong>Included topics:</strong> ${subKwArray.slice(0, 6).join(', ')}
      </div>
    ` : '';

    headerElem.innerHTML = `
      <div class="inspector-header-top">
        <div class="inspector-badge-row">
          <span class="inspector-domain-badge" style="background: ${domainInfo.bgLight}; color: ${domainInfo.color};">
            ${domainInfo.name}
          </span>
        </div>
        <button class="graph-tool-btn" style="width: 24px; height: 24px; font-size: 0.8em;" onclick="window.caslabClearSelection()" title="Close Inspector">✕</button>
      </div>
      <div class="inspector-title">${node.label}</div>
      <div class="inspector-meta">
        Found in <strong>${node.count}</strong> publication${node.count > 1 ? 's' : ''} • Connected to <strong>${node.neighbors.size}</strong> related themes
      </div>
      ${subKwHtml}
      ${node.neighbors.size > 0 ? `
        <div class="inspector-connected-section">
          <div class="inspector-connected-label">Interconnected Research Themes</div>
          <div class="inspector-connected-chips">
            ${Array.from(node.neighbors).filter(n => nodeMap.has(n)).slice(0, 10).map(neigh => `
              <button class="inspector-chip" onclick="window.caslabSelectKeyword('${neigh}')">${neigh}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;

    const pubCardsHtml = node.papers.map(pub => {
      const isTopTier = (pub.tier || '').toLowerCase().includes('top') || ['ASPLOS', 'ISCA', 'MICRO', 'HPCA', 'ATC', 'PACT'].includes(pub.venue);
      const authorsStr = (pub.authors || []).join(', ');

      return `
        <div class="pub-card">
          <div class="pub-card-header">
            <span class="pub-card-venue ${isTopTier ? 'top-tier' : ''}">
              ${pub.venue ? pub.venue : 'Publication'} ${pub.year ? `'${String(pub.year).slice(-2)}` : ''}
            </span>
            ${pub.tier ? `<span class="pub-card-year">${pub.tier}</span>` : ''}
          </div>
          <div class="pub-card-title">
            <a href="${pub.url}">${pub.title}</a>
          </div>
          <div class="pub-card-authors">${authorsStr}</div>
          <div class="pub-card-action">
            <a href="${pub.url}" class="pub-card-link-btn">
              View Publication Subpage <span>→</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

    bodyElem.innerHTML = `
      <div class="inspector-section-heading">Key Publications (${node.papers.length})</div>
      ${pubCardsHtml}
    `;
  }

  function filterByDomain(domain) {
    activeDomain = domain;

    document.querySelectorAll('.research-filter-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-domain') === domain);
    });

    if (domain === 'all') {
      gZoom.selectAll('.graph-node')
        .classed('dimmed', false)
        .classed('hidden', false);
      gZoom.selectAll('.graph-link')
        .classed('dimmed', false)
        .classed('hidden', false);
    } else {
      const inDomain = n => n.primaryDomain === domain || n.domainList.includes(domain);
      gZoom.selectAll('.graph-node')
        .classed('dimmed', false)
        .classed('hidden', n => !inDomain(n));

      gZoom.selectAll('.graph-link')
        .classed('dimmed', false)
        .classed('hidden', l => !inDomain(l.source) || !inDomain(l.target));
    }
  }

  function resizeGraph() {
    const container = document.getElementById('research-graph-card');
    if (!container || !svg || !simulation) return;
    const width = container.clientWidth || 700;
    const height = container.clientHeight || 640;

    svg.attr('viewBox', [0, 0, width, height]);

    simulation
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('domainX', d3.forceX(d => {
        const offset = DOMAINS[d.primaryDomain]?.target?.xOffset || 0;
        return (width / 2) + offset;
      }).strength(0.055))
      .force('domainY', d3.forceY(d => {
        const offset = DOMAINS[d.primaryDomain]?.target?.yOffset || 0;
        return (height / 2) + offset;
      }).strength(0.055));

    // Reheat so nodes animate outward to fill the new space
    simulation.alpha(0.6).restart();
  }

  function bindEvents() {
    const searchInput = document.getElementById('research-search-input');
    const searchClear = document.getElementById('research-search-clear');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        if (searchClear) searchClear.style.display = q.length > 0 ? 'block' : 'none';

        if (!q) {
          resetHighlights();
          return;
        }

        let bestMatch = null;
        gZoom.selectAll('.graph-node')
          .classed('dimmed', n => {
            const matches = n.label.toLowerCase().includes(q) ||
              Array.from(n.subKeywords || []).some(sub => sub.toLowerCase().includes(q)) ||
              n.papers.some(p => p.title.toLowerCase().includes(q));
            if (matches && (!bestMatch || n.count > bestMatch.count)) {
              bestMatch = n;
            }
            return !matches;
          });

        if (bestMatch) {
          highlightNode(bestMatch);
        }
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const q = e.target.value.trim().toLowerCase();
          const match = graphNodes.find(n => n.label.toLowerCase().includes(q));
          if (match) selectKeyword(match.id);
        }
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchClear.style.display = 'none';
        resetHighlights();
      });
    }

    document.querySelectorAll('.research-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const domain = chip.getAttribute('data-domain');
        filterByDomain(domain);
      });
    });

    document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
      svg.transition().duration(300).call(zoomBehavior.scaleBy, 1.3);
    });

    document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
      svg.transition().duration(300).call(zoomBehavior.scaleBy, 0.75);
    });

    document.getElementById('btn-zoom-reset')?.addEventListener('click', () => {
      clearSelection();
      const container = document.getElementById('research-graph-card');
      const width = container.clientWidth || 700;
      const height = container.clientHeight || 640;
      svg.transition().duration(600).call(
        zoomBehavior.transform,
        d3.zoomIdentity.translate(0, 0).scale(1)
      );
    });

    // Fullscreen toggle
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const fsTarget = document.getElementById('research-graph-workspace');
    btnFullscreen?.addEventListener('click', () => {
      const fsElement = document.fullscreenElement || document.webkitFullscreenElement;
      if (!fsElement) {
        if (fsTarget.requestFullscreen) fsTarget.requestFullscreen();
        else if (fsTarget.webkitRequestFullscreen) fsTarget.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    });

    const onFullscreenChange = () => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      const icon = btnFullscreen?.querySelector('i');
      if (icon) icon.className = isFs ? 'fa fa-compress' : 'fa fa-expand';
      // Let the browser settle the new size, then re-fit the graph
      setTimeout(resizeGraph, 60);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);

    const btnViewGraph = document.getElementById('btn-view-graph');
    const btnViewMatrix = document.getElementById('btn-view-matrix');
    const graphWorkspace = document.getElementById('research-graph-workspace');
    const matrixWorkspace = document.getElementById('research-matrix-workspace');
    const filtersBar = document.getElementById('research-filters');

    btnViewGraph?.addEventListener('click', () => {
      btnViewGraph.classList.add('active');
      btnViewMatrix?.classList.remove('active');
      if (graphWorkspace) graphWorkspace.style.display = 'flex';
      if (matrixWorkspace) matrixWorkspace.classList.remove('active');
      if (filtersBar) filtersBar.style.display = 'flex';
      // Card now has its real dimensions; re-fit the graph to them
      setTimeout(resizeGraph, 60);
    });

    btnViewMatrix?.addEventListener('click', () => {
      btnViewMatrix.classList.add('active');
      btnViewGraph?.classList.remove('active');
      if (graphWorkspace) graphWorkspace.style.display = 'none';
      if (matrixWorkspace) matrixWorkspace.classList.add('active');
      if (filtersBar) filtersBar.style.display = 'none';
    });

    window.caslabSelectKeyword = selectKeyword;
    window.caslabClearSelection = clearSelection;
  }

  function renderMatrixView() {
    const matrixContainer = document.getElementById('research-matrix-workspace');
    if (!matrixContainer) return;

    // Pillars are derived from the single DOMAINS source of truth.
    const pillars = DOMAIN_ORDER.map(id => DOMAINS[id]);

    const html = pillars.map(p => {
      const relatedPapers = allPapers.filter(paper => {
        return resolvePaperDomains(paper).has(p.id);
      });

      return `
        <div class="pillar-card">
          <div class="pillar-card-header">
            <h2 class="pillar-card-title">${p.pillarTitle}</h2>
            <span class="inspector-domain-badge" style="background: ${p.bgLight}; color: ${p.color};">
              ${relatedPapers.length} Publications
            </span>
          </div>
          <p class="pillar-card-desc">${p.pillarDesc}</p>
          <div class="pillar-keywords-box">
            <div class="pillar-keywords-title">Core Research Themes</div>
            <div class="inspector-connected-chips">
              ${p.topKeywords.map(k => `
                <button class="inspector-chip" onclick="window.caslabSelectKeyword('${k}'); document.getElementById('btn-view-graph').click();">
                  ${k}
                </button>
              `).join('')}
            </div>
          </div>
          <div>
            <div class="pillar-pubs-title">Selected Publications</div>
            <ul class="pillar-pubs-list">
              ${relatedPapers.slice(0, 5).map(paper => `
                <li>
                  <a href="${paper.url}">${paper.title}</a>
                  <span style="color: #64748b; font-size: 0.9em;">(${paper.venue ? paper.venue + ' ' : ''}${paper.year || ''})</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }).join('');

    matrixContainer.innerHTML = html;
  }
})();
