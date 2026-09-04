export const scholarProfile = 'https://scholar.google.com.sg/citations?user=4yxo8G0AAAAJ&hl=zh-CN';
export const oldProfile = 'https://gr.xjtu.edu.cn/zqwei/';
export const bookUrl = 'https://shop.elsevier.com/books/delay-doppler-communications-and-sensing/li/978-0-443-26528-0';

export const scholarSearch = (title: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(`Zhiqiang Wei ${title}`)}`;

export type Publication = { year: string; title: string; authors?: string; venue: string; note?: string; href?: string };

// Source: Google Scholar workbook collected 2026-09-03. Active unpublished manuscripts are kept separate.
export const underReviewPublications: Publication[] = [
  {
    year: "2026",
    title: "Game-Theoretic Multi-Agent Reinforcement Learning for Swarm Trajectory Planning in Low-Altitude Wireless Networks",
    authors: "NDM Quang, R Chong, Z Wei, C Liu, DWK Ng",
    venue: "arXiv preprint arXiv:2606.16386, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:5ugPr518TE4C"
  },
  {
    year: "2025",
    title: "Hybrid Iterative Detection for OTFS: Interplay between Local L-MMSE and Global Message Passing",
    authors: "R Yang, S Li, H Yu, Z Wei, K Wan, G Caire",
    venue: "arXiv preprint arXiv:2512.14116, 2025",
    href: "https://doi.org/10.48550/arxiv.2512.14116"
  }
];

export const journalPublications: Publication[] = [
  {
    year: "2026",
    title: "Scalable-Predictive Beamforming for RIS-Assisted Communications in Low-Altitude Wireless Networks: A Graph Neural Network Approach",
    authors: "C Liu, X Liu, Z Wei, DWK Ng",
    venue: "IEEE Journal of Selected Topics in Signal Processing, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:tkaPQYYpVKoC"
  },
  {
    year: "2026",
    title: "ISAC with affine frequency division multiplexing: An FMCW-based signal processing perspective",
    authors: "J Zhu, Y Tang, C Yi, H Yin, Y Ni, F Liu, Z Wei, H Arslan",
    venue: "IEEE Transactions on Wireless Communications, 2026",
    href: "https://doi.org/10.1109/twc.2026.3706989"
  },
  {
    year: "2026",
    title: "Delay-Doppler domain signal processing aided OFDM (DD-a-OFDM) for 6G and beyond",
    authors: "Y Ma, B Ai, J Yuan, S Li, Q Cheng, Z Shi, W Yuan, Z Wei, F Liu, A Shafie, ...",
    venue: "IEEE Transactions on Communications, 2026",
    href: "https://doi.org/10.1109/tcomm.2026.3706603"
  },
  {
    year: "2026",
    title: "Orthogonal Time Frequency Space Modulation: A Tutorial View on Delay-Doppler Communications via Zak Transform",
    authors: "S Li, P Jung, W Yuan, Z Wei, J Yuan, B Bai, G Caire",
    venue: "IEEE Open Journal of the Communications Society, 2026",
    href: "https://doi.org/10.1109/ojcoms.2026.3701935"
  },
  {
    year: "2026",
    title: "Intelligent Predictive Beamforming for Integrated Sensing, Communication and Power Transfer for Low-Altitude Economy",
    authors: "J Zhang, FA Khan, Z Wei, J Xue, C Masouros, D Niyato, Z Xu",
    venue: "IEEE Transactions on Wireless Communications 25, 17165-17179, 2026",
    href: "https://doi.org/10.1109/twc.2026.3693103"
  },
  {
    year: "2026",
    title: "A Novel Symbol Level Precoding-Based AFDM Transmission Framework: Offloading Equalization Burden to Transmitter Side",
    authors: "S Tang, Z Fei, X Wang, D Zhou, Z Wei, C Masouros",
    venue: "IEEE Transactions on Wireless Communications 25, 17042-17057, 2026",
    href: "https://doi.org/10.1109/twc.2026.3692638"
  },
  {
    year: "2026",
    title: "Fast and Accurate Two-Dimensional Direction-of-Arrival Estimation Using a Modified Projected Descent Algorithm",
    authors: "W Wang, J Shi, Z Wei, Z Yang",
    venue: "Signal Processing, 110556, 2026",
    href: "https://doi.org/10.1016/j.sigpro.2026.110556"
  },
  {
    year: "2026",
    title: "Task-Oriented Integrated Sensing and Communication for Multidevice Cooperative Motion Recognition",
    authors: "Z Sun, Z Yu, H Mao, Z Wei, Z Wang, B Guo",
    venue: "IEEE Transactions on Mobile Computing, 2026",
    href: "https://doi.org/10.1109/tmc.2026.3664359"
  },
  {
    year: "2026",
    title: "FALCON: Fast and Accurate Spatio-Temporal Signal Recovery Based on Low-Rankness and Nonlocal Variation",
    authors: "K Wang, Z Yang, Z Wei",
    venue: "Signal Processing, 110513, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:D_sINldO8mEC"
  },
  {
    year: "2026",
    title: "Channel Knowledge Map-assisted Dual-domain Tracking and Predictive Beamforming for High-Mobility Wireless Networks",
    authors: "R Du, Z Wei, Z Yang, L Yang, Y Zeng, DWK Ng, J Yuan",
    venue: "IEEE Transactions on Wireless Communications, 2026",
    href: "https://doi.org/10.1109/twc.2026.3654755"
  },
  {
    year: "2026",
    title: "Extended Arimoto–Blahut Algorithms for Bistatic Integrated Sensing and Communications Systems",
    authors: "T Jiao, Y Geng, Z Wei, Z Yang",
    venue: "Entropy 28 (1), 115, 2026",
    href: "https://doi.org/10.3390/e28010115"
  },
  {
    year: "2025",
    title: "Code-Length Optimization for Polar-Coded OTFS Modulation via Tensor Decomposition",
    authors: "HD Zheng, W Xu, D Li, D Wang, Z Wei",
    venue: "IEEE Communications Letters, 2025",
    href: "https://doi.org/10.1109/lcomm.2025.3625583"
  },
  {
    year: "2025",
    title: "Information-theoretic limits of bistatic integrated sensing and communication",
    authors: "T Jiao, K Wan, Z Wei, Y Geng, Y Li, Z Yang, G Caire",
    venue: "IEEE Transactions on Information Theory, 2025",
    href: "https://doi.org/10.1109/tit.2025.3621465"
  },
  {
    year: "2025",
    title: "Downlink-Uplink Collaborative Channel Estimation for TDD Massive MIMO Communications",
    authors: "Y Chu, W Wang, S Liu, Z Wei, Z Yang",
    venue: "IEEE Transactions on Signal Processing, 2025",
    href: "https://doi.org/10.1109/tsp.2025.3607997"
  },
  {
    year: "2025",
    title: "Direction-of-Arrival Estimation From a Mixture of Linear and Magnitude-Only Measurements",
    authors: "W Chen, Z Yang, Z Wei",
    venue: "IEEE Transactions on Vehicular Technology, 2025",
    href: "https://doi.org/10.1109/tvt.2025.3605470"
  },
  {
    year: "2025",
    title: "AdaptTrack: A Robust Tracking System for Complex Environments Based on WiFi Device Selection Strategy",
    authors: "D Ma, Z Sun, Z Wei, Y Guo, Y Lei, Z Wang, Z Yu, B Guo",
    venue: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous …, 2025",
    href: "https://doi.org/10.1145/3749506"
  },
  {
    year: "2025",
    title: "An Integrated OTFS-NOMA Framework for Multi-Beam LEO Systems: Reliability and Capacity Analysis",
    authors: "X Zhao, L Lei, Z Wei, H Fang, W Wang, S Chatzinotas",
    venue: "IEEE Transactions on Wireless Communications, 2025",
    href: "https://doi.org/10.1109/twc.2025.3594792"
  },
  {
    year: "2025",
    title: "Multi-scale attention-based spectral neural network for underwater reverberation suppression",
    authors: "Y Fan, Z Wang, Z Wei, Q Hu",
    venue: "Measurement, 118484, 2025",
    href: "https://doi.org/10.1016/j.measurement.2025.118484"
  },
  {
    year: "2025",
    title: "Self-interference-alleviated multi-beam steering for on-demand sensing and communication performance tradeoff of full-duplex ISAC",
    authors: "B Zhou, H Gao, Z Wei, X Li, J Wang, Y Zhuang, W Wang",
    venue: "IEEE Transactions on Wireless Communications 25, 177-194, 2025",
    href: "https://doi.org/10.1109/twc.2025.3582057"
  },
  {
    year: "2025",
    title: "Cross-domain iterative detection for OTFS transmission with frequency domain equalization",
    authors: "R Chong, S Li, Z Wei, M Matthaiou, DWK Ng, G Caire",
    venue: "IEEE Transactions on Communications 73 (10), 9886-9902, 2025",
    href: "https://doi.org/10.1109/tcomm.2025.3581967"
  },
  {
    year: "2025",
    title: "Deep learning-empowered secure predictive beamforming design for integrated sensing and communications systems",
    authors: "J Zhang, Z Qiao, FA Khan, G Liu, Z Wei, J Xue, Z Xu, DWK Ng",
    venue: "IEEE Transactions on Wireless Communications 24 (10), 8565-8580, 2025",
    href: "https://doi.org/10.1109/twc.2025.3567799"
  },
  {
    year: "2025",
    title: "Near optimal hybrid digital-analog beamforming for mmWave point-to-point MIMO transmissions using OTFS waveforms",
    authors: "M Liu, S Li, Z Wei, B Bai, G Caire, DWK Ng",
    venue: "IEEE Transactions on Communications 73 (10), 9356-9371, 2025",
    href: "https://doi.org/10.1109/tcomm.2025.3560392"
  },
  {
    year: "2025",
    title: "RIS-aided MIMO beamforming: Piecewise near-field channel model",
    authors: "W Chen, Z Yang, Z Wei, DWK Ng, M Matthaiou",
    venue: "IEEE Transactions on Communications 73 (10), 9612-9626, 2025",
    href: "https://doi.org/10.1109/tcomm.2025.3556779"
  },
  {
    year: "2025",
    title: "Robust Beamfocusing for Secure NFC with Imperfect CSI",
    authors: "W Chen, Z Wei, Z Yang",
    venue: "Sensors 25 (4), 1240, 2025",
    href: "https://doi.org/10.3390/s25041240"
  },
  {
    year: "2025",
    title: "On hybrid detection of wireless communications over interference channels: A generalized framework",
    authors: "W Yuan, S Li, Z Wei, Y Li, P Fan",
    venue: "IEEE Journal on Selected Areas in Communications 43 (4), 1214-1229, 2025",
    href: "https://doi.org/10.1109/jsac.2025.3531570"
  },
  {
    year: "2025",
    title: "Low-altitude Secure Communication Driven by Deep Reinforcement Learning: An Integrated Sensing and Communication Design",
    authors: "Z Wei, J Zhang, F Liu, Z Yang, Z Fei",
    venue: "Journal of Radars 14 (4), 1005-1018, 2025",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:eq2jaN3J8jMC"
  },
  {
    year: "2024",
    title: "Low-complexity minimum BER precoder design for ISAC systems: A delay-Doppler perspective",
    authors: "J Wu, W Yuan, Z Wei, K Zhang, F Liu, DWK Ng",
    venue: "IEEE Transactions on Wireless Communications 24 (2), 1526-1540, 2024",
    href: "https://doi.org/10.1109/twc.2024.3509973"
  },
  {
    year: "2024",
    title: "Special Topic on Integrated Sensing and Communication (ISAC) Technologies for Future Wireless Communication",
    authors: "J Yuan, Z Fei, Z Wei",
    venue: "ZtE Communications 22 (3), 1-3, 2024",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:dshw04ExmUIC"
  },
  {
    year: "2024",
    title: "Integrated sensing and communication: Who benefits more?",
    authors: "D Ruolin, WEI Zhiqiang, Y Zai",
    venue: "ZTE Communications 22 (3), 37-47, 2024",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:P5F9QuxV20EC"
  },
  {
    year: "2024",
    title: "Coordinated multi-satellite transmission for OTFS-based 6G LEO satellite communication systems",
    authors: "Z Zhang, Y Wu, Z Ma, X Lei, L Lei, Z Wei",
    venue: "IEEE Journal on Selected Areas in Communications 43 (1), 156-170, 2024",
    href: "https://doi.org/10.1109/jsac.2024.3460108"
  },
  {
    year: "2024",
    title: "Resource allocation design for next-generation multiple access: A tutorial overview",
    authors: "Z Wei, D Xu, S Li, S Song, DWK Ng, G Caire",
    venue: "Proceedings of the IEEE 112 (9), 1230-1263, 2024",
    href: "https://doi.org/10.1109/jproc.2024.3434700"
  },
  {
    year: "2024",
    title: "COFFEE: Covariance fitting and focusing for wideband direction-of-arrival estimation",
    authors: "X Wu, Z Yang, Z Wei, R Schober, Z Xu",
    venue: "IEEE Transactions on Signal Processing 72, 5659-5674, 2024",
    href: "https://doi.org/10.1109/tsp.2024.3441059"
  },
  {
    year: "2024",
    title: "Channel estimation for RIS-aided MIMO systems: A partially decoupled atomic norm minimization approach",
    authors: "Y Chu, Z Wei, Z Yang, DWK Ng",
    venue: "IEEE Transactions on Wireless Communications 23 (11), 16048-16061, 2024",
    href: "https://doi.org/10.1109/twc.2024.3436059"
  },
  {
    year: "2024",
    title: "Active aerial reconfigurable intelligent surface assisted secure communications: Integrating sensing and positioning",
    authors: "D Wang, Z Wang, K Yu, Z Wei, H Zhao, N Al-Dhahir, M Guizani, ...",
    venue: "IEEE Journal on Selected Areas in Communications 42 (10), 2769-2785, 2024",
    href: "https://doi.org/10.1109/jsac.2024.3414621"
  },
  {
    year: "2024",
    title: "Networked integrated sensing and communications for 6G wireless systems",
    authors: "J Li, X Shao, F Chen, S Wan, C Liu, Z Wei, DWK Ng",
    venue: "IEEE Internet of Things Journal 11 (17), 29062-29075, 2024",
    href: "https://doi.org/10.1109/jiot.2024.3406598"
  },
  {
    year: "2024",
    title: "Spatial–temporal resource optimization for uneven-traffic LEO satellite systems: Beam pattern selection and user scheduling",
    authors: "L Lei, A Wang, E Lagunas, X Hu, Z Zhang, Z Wei, S Chatzinotas",
    venue: "IEEE Journal on Selected Areas in Communications 42 (5), 1279-1291, 2024",
    href: "https://doi.org/10.1109/jsac.2024.3383445"
  },
  {
    year: "2024",
    title: "Toward 6g multicell orthogonal time frequency space systems: Interference coordination and cooperative communications",
    authors: "Z Zhang, Y Wu, X Lei, L Lei, Z Wei",
    venue: "IEEE Vehicular Technology Magazine 19 (1), 55-64, 2024",
    href: "https://doi.org/10.1109/mvt.2023.3345609"
  },
  {
    year: "2023",
    title: "Integrated sensing, navigation, and communication for secure UAV networks with a mobile eavesdropper",
    authors: "Z Wei, F Liu, C Liu, Z Yang, DWK Ng, R Schober",
    venue: "IEEE Transactions on Wireless Communications 23 (7), 7060-7078, 2023",
    href: "https://doi.org/10.1109/twc.2023.3337148"
  },
  {
    year: "2023",
    title: "Direction-of-arrival estimation for constant modulus signals using a structured matrix recovery technique",
    authors: "X Wu, Z Yang, Z Wei, Z Xu",
    venue: "IEEE Transactions on Wireless Communications 23 (4), 3117-3130, 2023",
    href: "https://doi.org/10.1109/twc.2023.3305612"
  },
  {
    year: "2023",
    title: "New delay Doppler communication paradigm in 6G era: A survey of orthogonal time frequency space (OTFS)",
    authors: "W Yuan, S Li, Z Wei, Y Cui, J Jiang, H Zhang, P Fan",
    venue: "China Communications 20 (6), 1-25, 2023",
    note: "封面文章",
    href: "https://doi.org/10.23919/jcc.fa.2022-0578.202306"
  },
  {
    year: "2023",
    title: "New reweighted atomic norm minimization approach for line spectral estimation",
    authors: "Y Chu, Z Wei, Z Yang",
    venue: "Signal Processing 206, 108897, 2023",
    href: "https://doi.org/10.1016/j.sigpro.2022.108897"
  },
  {
    year: "2022",
    title: "A survey on orthogonal time frequency space: New delay Doppler communications paradigm in 6G era",
    authors: "W Yuan, S Li, Z Wei, J Jiang, H Zhang, P Fan",
    venue: "China Communications, 1-23, 2022",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:70eg2SAEIzsC"
  },
  {
    year: "2022",
    title: "Orthogonal time frequency space modulation—Part III: ISAC and potential applications",
    authors: "W Yuan, Z Wei, S Li, R Schober, G Caire",
    venue: "IEEE Communications Letters 27 (1), 14-18, 2022",
    note: "EiC invited paper",
    href: "https://doi.org/10.1109/lcomm.2022.3209651"
  },
  {
    year: "2022",
    title: "Orthogonal time frequency space modulation—Part I: Fundamentals and challenges ahead",
    authors: "Z Wei, S Li, W Yuan, R Schober, G Caire",
    venue: "IEEE Communications Letters 27 (1), 4-8, 2022",
    note: "EiC invited paper",
    href: "https://doi.org/10.1109/lcomm.2022.3209689"
  },
  {
    year: "2022",
    title: "Orthogonal time frequency space modulation—Part II: Transceiver designs",
    authors: "S Li, W Yuan, Z Wei, R Schober, G Caire",
    venue: "IEEE Communications Letters 27 (1), 9-13, 2022",
    note: "EiC invited paper",
    href: "https://doi.org/10.1109/lcomm.2022.3209683"
  },
  {
    year: "2022",
    title: "Resource allocation and 3D trajectory design for power-efficient IRS-assisted UAV-NOMA communications",
    authors: "Y Cai, Z Wei, S Hu, C Liu, DWK Ng, J Yuan",
    venue: "IEEE Transactions on Wireless Communications 21 (12), 10315-10334, 2022",
    href: "https://doi.org/10.1109/twc.2022.3183300"
  },
  {
    year: "2022",
    title: "A novel ISAC transmission framework based on spatially-spread orthogonal time frequency space modulation",
    authors: "S Li, W Yuan, C Liu, Z Wei, J Yuan, B Bai, DWK Ng",
    venue: "IEEE Journal on Selected Areas in Communications, 2022",
    note: "JSAC featured article",
    href: "https://doi.org/10.1109/jsac.2022.3155538"
  },
  {
    year: "2022",
    title: "Genetic Algorithm for Sparse Optimization of Mills Cross Array Used in Underwater Acoustic Imaging",
    authors: "D Teng, Y Li, H Yang, Z Wei, Y Li",
    venue: "Journal of Marine Science and Engineering 10 (2), 155, 2022",
    href: "https://doi.org/10.3390/jmse10020155"
  },
  {
    year: "2022",
    title: "Faster-than-Nyquist Asynchronous NOMA Outperforms Synchronous NOMA",
    authors: "S Li, Z Wei, W Yuan, J Yuan, B Bai, DWK Ng, L Hanzo",
    venue: "IEEE Journal on Selected Areas in Communications 40 (4), 1128-1145, 2022",
    href: "https://doi.org/10.1109/jsac.2022.3143245"
  },
  {
    year: "2021",
    title: "Resource allocation for simultaneous wireless information and power transfer systems: A tutorial overview",
    authors: "Z Wei, X Yu, DWK Ng, R Schober",
    venue: "Proceedings of the IEEE 110 (1), 127-149, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:hMod-77fHWUC"
  },
  {
    year: "2021",
    title: "Integrated sensing and communication-assisted orthogonal time frequency space transmission for vehicular networks",
    authors: "W Yuan, Z Wei, S Li, J Yuan, DWK Ng",
    venue: "IEEE Journal of Selected Topics in Signal Processing 15 (6), 1515-1528, 2021",
    note: "JSTSP featured article · ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:iH-uZ7U-co4C"
  },
  {
    year: "2021",
    title: "Channel Estimation and User Identification With Deep Learning for Massive Machine-Type Communications",
    authors: "B Liu, Z Wei, W Yuan, J Yuan, M Pajovic",
    venue: "IEEE Transactions on Vehicular Technology 70 (10), 10709-10722, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:JV2RwH3_ST0C"
  },
  {
    year: "2021",
    title: "Cross domain iterative detection for orthogonal time frequency space modulation",
    authors: "S Li, W Yuan, Z Wei, J Yuan",
    venue: "IEEE transactions on wireless communications 21 (4), 2227-2242, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:-f6ydRqryjwC"
  },
  {
    year: "2021",
    title: "Orthogonal time-frequency space modulation: A promising next-generation waveform",
    authors: "Z Wei, W Yuan, S Li, J Yuan, G Bharatula, R Hadani, L Hanzo",
    venue: "IEEE Wireless Communications 28 (4), 136-144, 2021",
    note: "ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:BqipwSGYUEgC"
  },
  {
    year: "2021",
    title: "Robust and secure sum-rate maximization for multiuser MISO downlink systems with self-sustainable IRS",
    authors: "S Hu, Z Wei, Y Cai, C Liu, DWK Ng, J Yuan",
    venue: "IEEE Transactions on Communications 69 (10), 7032-7049, 2021",
    note: "ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:mB3voiENLucC"
  },
  {
    year: "2021",
    title: "Data-aided channel estimation for OTFS systems with a superimposed pilot and data transmission scheme",
    authors: "W Yuan, S Li, Z Wei, J Yuan, DWK Ng",
    venue: "IEEE wireless communications letters 10 (9), 1954-1958, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:TFP_iSt0sucC"
  },
  {
    year: "2021",
    title: "Hybrid MAP and PIC detection for OTFS modulation",
    authors: "S Li, W Yuan, Z Wei, J Yuan, B Bai, DWK Ng, Y Xie",
    venue: "IEEE transactions on vehicular technology 70 (7), 7193-7198, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:IWHjjKOFINEC"
  },
  {
    year: "2021",
    title: "Performance analysis of coded OTFS systems over high-mobility channels",
    authors: "S Li, J Yuan, W Yuan, Z Wei, B Bai, DWK Ng",
    venue: "IEEE transactions on wireless communications 20 (9), 6033-6048, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:L8Ckcad2t8MC"
  },
  {
    year: "2021",
    title: "Transmitter and Receiver Window Designs for Orthogonal Time-Frequency Space Modulation",
    authors: "Z Wei, W Yuan, S Li, J Yuan, DWK Ng",
    venue: "IEEE Transactions on Communications 69 (4), 2207-2223, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:ZeXyd9-uunAC"
  },
  {
    year: "2020",
    title: "Location-aware predictive beamforming for UAV communications: A deep learning approach",
    authors: "C Liu, W Yuan, Z Wei, X Liu, DWK Ng",
    venue: "IEEE Wireless Communications Letters 10 (3), 668-672, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:QIV2ME_5wuYC"
  },
  {
    year: "2020",
    title: "Sum-rate maximization for IRS-assisted UAV OFDMA communication systems",
    authors: "Z Wei, Y Cai, Z Sun, DWK Ng, J Yuan, M Zhou, L Sun",
    venue: "IEEE Transactions on Wireless Communications 20 (4), 2530-2550, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:7PzlFSSx8tAC"
  },
  {
    year: "2020",
    title: "Deep transfer learning for signal detection in ambient backscatter communications",
    authors: "C Liu, Z Wei, DWK Ng, J Yuan, YC Liang",
    venue: "IEEE Transactions on Wireless Communications 20 (3), 1624-1638, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:9ZlFYXVOiuMC"
  },
  {
    year: "2020",
    title: "Energy-efficient resource allocation design for NOMA systems",
    authors: "Z Wei, Y Cai, J Li, DWK Ng, J Yuan",
    venue: "Green Communications for Energy-Efficient Wireless Systems and Networks, HA …, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:TQgYirikUcIC"
  },
  {
    year: "2020",
    title: "Wireless powered mobile edge computing: Dynamic resource allocation and throughput maximization",
    authors: "X Deng, J Li, L Shi, Z Wei, X Zhou, J Yuan",
    venue: "IEEE Transactions on Mobile Computing 21 (6), 2271-2288, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:qUcmZB5y_30C"
  },
  {
    year: "2020",
    title: "Two-tier communication for uav-enabled massive IoT systems: Performance analysis and joint design of trajectory and resource allocation",
    authors: "Z Sun, Z Wei, N Yang, X Zhou",
    venue: "IEEE Journal on Selected Areas in Communications 39 (4), 1132-1146, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:mVmsd5A6BfQC"
  },
  {
    year: "2020",
    title: "Sparse Bayesian learning localization method with environmental perturbation constrains",
    authors: "Q Wang, Y Wang, Z Wei",
    venue: "Acta Acustica 45 (4), 7, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:LPZeul_q3PIC"
  },
  {
    year: "2020",
    title: "A simple variational Bayes detector for orthogonal time frequency space (OTFS) modulation",
    authors: "W Yuan, Z Wei, J Yuan, DWK Ng",
    venue: "IEEE Transactions on Vehicular Technology 69 (7), 7976-7980, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:4TOpqqG69KYC"
  },
  {
    year: "2020",
    title: "Resource allocation for secure multi-UAV communication systems with multi-eavesdropper",
    authors: "R Li, Z Wei, L Yang, DWK Ng, J Yuan, J An",
    venue: "IEEE Transactions on Communications 68 (7), 4490-4506, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:aqlVkmm33-oC"
  },
  {
    year: "2020",
    title: "Joint trajectory and resource allocation design for energy-efficient secure UAV communication systems",
    authors: "Y Cai, Z Wei, R Li, DWK Ng, J Yuan",
    venue: "IEEE Transactions on Communications 68 (7), 4536-4553, 2020",
    note: "ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:qxL8FJ1GzNcC"
  },
  {
    year: "2019",
    title: "Energy‐Efficient Radio Resource Management",
    authors: "Z Wei, Y Cai, DWK Ng, J Yuan",
    venue: "Wiley 5G Ref: The Essential 5G Reference Online, 1-23, 2019",
    href: "https://doi.org/10.1002/9781119471509.w5gref072"
  },
  {
    year: "2019",
    title: "On the performance gain of NOMA over OMA in uplink communication systems",
    authors: "Z Wei, L Yang, DWK Ng, J Yuan, L Hanzo",
    venue: "IEEE Transactions on Communications 68 (1), 536-568, 2019",
    note: "EiC invited paper · ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:kNdYIx-mwKoC"
  },
  {
    year: "2019",
    title: "Exploiting transmission control for joint user identification and channel estimation in massive connectivity",
    authors: "Z Sun, Z Wei, L Yang, J Yuan, X Cheng, L Wan",
    venue: "IEEE Transactions on Communications 67 (9), 6311-6326, 2019",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:ULOm3_A8WrAC"
  },
  {
    year: "2019",
    title: "NOMA for hybrid mmwave communication systems with beamwidth control",
    authors: "Z Wei, DWK Ng, J Yuan",
    venue: "IEEE Journal of Selected Topics in Signal Processing 13 (3), 567-583, 2019",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:MXK_kJrjxJIC"
  },
  {
    year: "2018",
    title: "Multi-beam NOMA for hybrid mmWave systems",
    authors: "Z Wei, L Zhao, J Guo, DWK Ng, J Yuan",
    venue: "IEEE Transactions on Communications 67 (2), 1705-1719, 2018",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:roLk4NBRz8UC"
  },
  {
    year: "2018",
    title: "Multi-cell hybrid millimeter wave systems: Pilot contamination and interference mitigation",
    authors: "L Zhao, Z Wei, DWK Ng, J Yuan, MC Reed",
    venue: "IEEE Transactions on Communications 66 (11), 5740-5755, 2018",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:LkGwnXOMwfcC"
  },
  {
    year: "2018",
    title: "Joint Pilot and Payload Power Control for Uplink MIMO-NOMA with MRC-SIC Receivers",
    authors: "Z Wei, DWK Ng, J Yuan",
    venue: "IEEE Communications Letters, 2018",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:WF5omc3nYNoC"
  },
  {
    year: "2017",
    title: "Optimal resource allocation for power-efficient MC-NOMA with imperfect channel state information",
    authors: "Z Wei, DWK Ng, J Yuan, HM Wang",
    venue: "IEEE Transactions on Communications 65 (9), 3944-3961, 2017",
    note: "ESI Highly Cited Paper",
    href: "https://doi.org/10.1109/tcomm.2017.2709301"
  }
];

export const conferencePublications: Publication[] = [
  {
    year: "2026",
    title: "Exploiting the Wavenumber-Domain MISO Channel with Uniform Linear Array",
    authors: "Y Zhang, K Zhi, C Du, S Li, Z Wei, X Wang, A Farhang, G Caire",
    venue: "2026 IEEE International Conference on Communications Workshops (ICC …, 2026",
    href: "https://doi.org/10.1109/iccworkshops63917.2026.11586316"
  },
  {
    year: "2026",
    title: "MIMO-OTFS Transceiver Design Based on Stream-Level SINR",
    authors: "R Xin, Z Wei, S Li, Z Yang, B Bai",
    venue: "2026 IEEE International Conference on Communications Workshops (ICC …, 2026",
    href: "https://doi.org/10.1109/iccworkshops63917.2026.11586614"
  },
  {
    year: "2026",
    title: "OFDM waveform optimization for bistatic integrated sensing and communications",
    authors: "R Du, Z Wei, Z Yang, YF Liu, B Zhou, DWK Ng",
    venue: "2026 IEEE International Conference on Communications Workshops (ICC …, 2026",
    href: "https://doi.org/10.1109/iccworkshops63917.2026.11586314"
  },
  {
    year: "2026",
    title: "A Novel Iterative OTFS Detector Based on Local L-MMSE and Global Message Passing",
    authors: "R Yang, S Li, H Yu, Z Wei, K Wan, G Caire",
    venue: "ICASSP 2026-2026 IEEE International Conference on Acoustics, Speech and …, 2026",
    href: "https://doi.org/10.1109/icassp55912.2026.11462455"
  },
  {
    year: "2026",
    title: "CKM Beyond Channel Gain: Spatial Correlation Map Construction with Deep Learning",
    authors: "Z Chen, S Fu, Y Zeng, X Xu, Z Wei",
    venue: "2026 IEEE Wireless Communications and Networking Conference (WCNC), 1-6, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:mvPsJ3kp5DgC"
  },
  {
    year: "2025",
    title: "A Fractional Programming Approach for the Joint Optimization of Communication Performance and Detection Probability",
    authors: "J Chen, D Xu, Z Wei",
    venue: "2025 8th International Conference on Information Communication and Signal …, 2025",
    href: "https://doi.org/10.1109/icicsp66564.2025.11338303"
  },
  {
    year: "2025",
    title: "LANM: Learned Atomic Norm Minimization for Superfast Gridless Spectral Compressed Sensing",
    authors: "Z Yang, Z Zhang, W Wang, W Zheng, Y Yang, Z Wei",
    venue: "2025 IEEE 35th International Workshop on Machine Learning for Signal …, 2025",
    href: "https://doi.org/10.1109/mlsp62443.2025.11204277"
  },
  {
    year: "2025",
    title: "Downlink-Uplink Collaborative Channel Estimation for TDD Massive MIMO Systems",
    authors: "Y Chu, W Wang, S Liu, Z Wei, Z Yang",
    venue: "2025 IEEE/CIC International Conference on Communications in China (ICCC), 1-6, 2025",
    href: "https://doi.org/10.1109/iccc65529.2025.11148727"
  },
  {
    year: "2025",
    title: "Self-Interference-Alleviated Beamforming Towards 6G Integrated Sensing and Communication",
    authors: "H Gao, B Zhou, L Lian, Z Wei, X Li, Y Zhuang",
    venue: "ICC 2025-IEEE International Conference on Communications, 4493-4498, 2025",
    href: "https://doi.org/10.1109/icc52391.2025.11161047"
  },
  {
    year: "2025",
    title: "Channel Knowledge Map-assisted Dual-domain Tracking for High-mobility Wireless Networks",
    authors: "R Du, Z Wei, Z Yang, Y Zeng, DWK Ng",
    venue: "2025 IEEE International Conference on Communications Workshops (ICC …, 2025",
    href: "https://doi.org/10.1109/iccworkshops67674.2025.11162289"
  },
  {
    year: "2024",
    title: "Analysis of Cross-Domain Message Passing for OTFS Transmissions",
    authors: "R Chong, S Li, Z Wei, M Matthaiou, DWK Ng, G Caire",
    venue: "2024 IEEE Information Theory Workshop (ITW), 424-429, 2024",
    href: "https://doi.org/10.1109/itw61385.2024.10806925"
  },
  {
    year: "2024",
    title: "Rate-distortion tradeoff of bistatic integrated sensing and communication",
    authors: "T Jiao, Z Wei, Y Geng, K Wan, Z Yang, G Caire",
    venue: "2024 IEEE Information Theory Workshop (ITW), 360-365, 2024",
    href: "https://doi.org/10.1109/itw61385.2024.10806984"
  },
  {
    year: "2024",
    title: "Fast Spatio-Temporal Signal Recovery Based on Differential Smoothness Regularization",
    authors: "K Wang, Z Yang, Z Wei",
    venue: "2024 IEEE International Conference on Signal, Information and Data …, 2024",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:uWQEDVKXjbEC"
  },
  {
    year: "2024",
    title: "Wideband Direction-of-Arrival Estimation via Covariance Fitting and Focusing",
    authors: "X Wu, Z Yang, Z Wei, R Schober, Z Xu",
    venue: "2024 32nd European Signal Processing Conference (EUSIPCO), 2282-2286, 2024",
    href: "https://doi.org/10.23919/eusipco63174.2024.10715111"
  },
  {
    year: "2024",
    title: "Closed-Form Outage Probability Analysis For OTFS-Based Multi-Beam LEO Satellites",
    authors: "X Zhao, L Lei, Z Wei, H Fang, W Wang",
    venue: "2024 IEEE/CIC International Conference on Communications in China (ICCC …, 2024",
    href: "https://doi.org/10.1109/iccc62479.2024.10681896"
  },
  {
    year: "2024",
    title: "Secure OTFS Transmission via Joint Delay-Doppler Precoding and Time-Domain Noise Injection",
    authors: "Q Liu, Q Xu, C Li, Z Wei, X Yang, L Wang",
    venue: "2024 IEEE/CIC International Conference on Communications in China (ICCC …, 2024",
    href: "https://doi.org/10.1109/icccworkshops62562.2024.10693839"
  },
  {
    year: "2024",
    title: "Beamforming Design for RIS-Aided MIMO Communication: A Piece-Wise Near-Field Model",
    authors: "W Chen, Z Wei, Z Yang, DWK Ng, M Matthaiou",
    venue: "2024 IEEE/CIC International Conference on Communications in China (ICCC …, 2024",
    href: "https://doi.org/10.1109/icccworkshops62562.2024.10693716"
  },
  {
    year: "2024",
    title: "Target Signal Power Improvement and Clutter Suppression via Beamforming for Integrated Sensing and Communication Systems",
    authors: "S Ge, Z Wei, Z Yang",
    venue: "ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and …, 2024",
    href: "https://doi.org/10.1109/icassp48485.2024.10447658"
  },
  {
    year: "2024",
    title: "Optimal Ber Minimum Precoder Design for OTFS-Based ISAC Systems",
    authors: "J Wu, W Yuan, Z Wei, J Yan, DWK Ng",
    venue: "ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and …, 2024",
    href: "https://doi.org/10.1109/icassp48485.2024.10446140"
  },
  {
    year: "2023",
    title: "Channel Estimation for RIS-Aided MIMO Systems via Partially Decoupled Atomic Norm Minimization",
    authors: "Y Chu, Z Wei, Z Yang, DWK Ng",
    venue: "GLOBECOM 2023-2023 IEEE Global Communications Conference, 6615-6620, 2023",
    href: "https://doi.org/10.1109/globecom54140.2023.10436833"
  },
  {
    year: "2023",
    title: "On the pulse shaping for delay-Doppler communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, B Bai, G Caire",
    venue: "GLOBECOM 2023-2023 IEEE Global Communications Conference, 4909-4914, 2023",
    href: "https://doi.org/10.1109/globecom54140.2023.10437976"
  },
  {
    year: "2023",
    title: "Sensing-enhanced secure communication: Joint time allocation and beamforming design",
    authors: "D Xu, Y Xu, Z Wei, S Song, DWK Ng",
    venue: "2023 21st International Symposium on Modeling and Optimization in Mobile, Ad …, 2023",
    href: "https://doi.org/10.23919/wiopt58741.2023.10349846"
  },
  {
    year: "2023",
    title: "Source Localization for Constant Modulus Signals Using a Structured Matrix Recovery Technique (SMART)",
    authors: "X Wu, Z Yang, Z Wei, Z Xu",
    venue: "2023 IEEE Statistical Signal Processing Workshop (SSP), 175-179, 2023",
    href: "https://doi.org/10.1109/ssp53291.2023.10208081"
  },
  {
    year: "2023",
    title: "Near Optimal Hybrid Digital-Analog Beamforming for Point-to-Point MIMO-OTFS Transmissions",
    authors: "M Liu, S Li, Z Wei, B Bai",
    venue: "2023 IEEE Wireless Communications and Networking Conference (WCNC), 1-6, 2023",
    note: "Best Paper Award",
    href: "https://doi.org/10.1109/wcnc55385.2023.10118648"
  },
  {
    year: "2023",
    title: "SDR System Design and Implementation on Delay-Doppler Communications and Sensing",
    authors: "X Wei, L Zhang, W Yuan, F Liu, S Li, Z Wei",
    venue: "2023 IEEE Wireless Communications and Networking Conference (WCNC), 1-6, 2023",
    href: "https://doi.org/10.1109/wcnc55385.2023.10118889"
  },
  {
    year: "2022",
    title: "Trajectory Design and Resource Allocation for UAV-Enabled Data Collection in Wireless Sensor Networks with 3D Blockages",
    authors: "Y Cai, W Yuan, Z Wei, C Liu, S Hu, DWK Ng",
    venue: "2022 1st International Conference on 6G Networking (6GNet), 1-8, 2022",
    href: "https://doi.org/10.1109/6gnet54646.2022.9830200"
  },
  {
    year: "2022",
    title: "Safeguarding UAV networks through integrated sensing, jamming, and communications",
    authors: "Z Wei, F Liu, DWK Ng, R Schober",
    venue: "ICASSP 2022-2022 IEEE International Conference on Acoustics, Speech and …, 2022",
    href: "https://doi.org/10.1109/icassp43922.2022.9746707"
  },
  {
    year: "2022",
    title: "Beamforming design for intelligent reflecting surface-enhanced symbiotic radio systems",
    authors: "S Hu, C Liu, Z Wei, Y Cai, DWK Ng, J Yuan",
    venue: "ICC 2022-IEEE International Conference on Communications, 2651-2657, 2022",
    href: "https://doi.org/10.1109/icc45855.2022.9838902"
  },
  {
    year: "2021",
    title: "A New Off-grid Channel Estimation Method with Sparse Bayesian Learning for OTFS Systems",
    authors: "Z Wei, W Yuan, S Lit, J Yuant, DWK Ngt",
    venue: "2021 IEEE Global Communications Conference (GLOBECOM), 01-07, 2021",
    href: "https://doi.org/10.1109/globecom46510.2021.9685329"
  },
  {
    year: "2021",
    title: "Secrecy Outage-Constrained Robust Resource Allocation Design for MU-MISO RSMA Systems",
    authors: "H Fu, S Feng, W Tang, Z Wei, DWK Ng",
    venue: "2021 IEEE Globecom Workshops (GC Wkshps), 1-7, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:ns9cj8rnVeAC"
  },
  {
    year: "2021",
    title: "Deep learning-empowered predictive beamforming for IRS-assisted multi-user communications",
    authors: "C Liu, X Liu, Z Wei, S Hu, DWK Ng, J Yuan",
    venue: "2021 IEEE Global Communications Conference (GLOBECOM), 01-07, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:RHpTSmoSYBkC"
  },
  {
    year: "2021",
    title: "A Tutorial to Orthogonal Time Frequency Space Modulation for Future Wireless Communications",
    authors: "S Li, W Yuan, Z Wei, R He, B Ai, B Bai, J Yuan",
    venue: "2021 IEEE/CIC International Conference on Communications in China (ICCC …, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:M3NEmzRMIkIC"
  },
  {
    year: "2021",
    title: "Deep Reinforcement Learning-based Spectrum Allocation and Power Management for IAB Networks",
    authors: "Q Cheng, Z Wei, J Yuan",
    venue: "2021 IEEE International Conference on Communications Workshops (ICC …, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:k_IJM867U9cC"
  },
  {
    year: "2021",
    title: "On the performance of coded OTFS modulation over high-mobility channels",
    authors: "S Li, J Yuan, W Yuan, Z Wei, B Bai, DWK Ng",
    venue: "2021 IEEE International Conference on Communications Workshops (ICC …, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:isC4tDSrTZIC"
  },
  {
    year: "2021",
    title: "Performance analysis and window design for channel estimation of OTFS modulation",
    authors: "Z Wei, W Yuan, S Li, J Yuan, DWK Ng",
    venue: "ICC 2021-IEEE International Conference on Communications, 1-7, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:HDshCWvjkbEC"
  },
  {
    year: "2021",
    title: "On the Achievable Rates of Uplink NOMA with Asynchronized Transmission",
    authors: "S Li, Z Wei, W Yuan, J Yuan, B Bai, DWK Ng",
    venue: "2021 IEEE Wireless Communications and Networking Conference (WCNC), 1-7, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:r0BpntZqJG4C"
  },
  {
    year: "2021",
    title: "Bypassing Channel Estimation for OTFS Transmission: An Integrated Sensing and Communication Solution",
    authors: "W Yuan, S Li, Z Wei, J Yuan, DWK Ng",
    venue: "2021 IEEE Wireless Communications and Networking Conference Workshops (WCNCW …, 2021",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:j3f4tGmQtD8C"
  },
  {
    year: "2020",
    title: "Deep transfer learning-assisted signal detection for ambient backscatter communications",
    authors: "C Liu, X Liu, Z Wei, DWK Ng, J Yuan, YC Liang",
    venue: "GLOBECOM 2020-2020 IEEE Global Communications Conference, 1-6, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:hC7cP41nSMkC"
  },
  {
    year: "2020",
    title: "Sum-rate maximization for multiuser MISO downlink systems with self-sustainable IRS",
    authors: "S Hu, Z Wei, Y Cai, DWK Ng, J Yuan",
    venue: "GLOBECOM 2020-2020 IEEE Global Communications Conference, 1-7, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:4DMP91E08xMC"
  },
  {
    year: "2020",
    title: "Resource allocation for power-efficient IRS-assisted UAV communications",
    authors: "Y Cai, Z Wei, S Hu, DWK Ng, J Yuan",
    venue: "2020 IEEE International Conference on Communications Workshops (ICC …, 2020",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:Wp0gIr-vW9MC"
  },
  {
    year: "2019",
    title: "Deep learning assisted user identification in massive machine-type communications",
    authors: "B Liu, Z Wei, J Yuan, M Pajovic",
    venue: "2019 IEEE Global Communications Conference (GLOBECOM), 1-6, 2019",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:YOwf2qJgpHMC"
  },
  {
    year: "2019",
    title: "A two-stage beam alignment framework for hybrid mmwave distributed antenna systems",
    authors: "Z Wei, M Qiu, DWK Ng, J Yuan",
    venue: "2019 IEEE 20th International Workshop on Signal Processing Advances in …, 2019",
    href: "https://doi.org/10.1109/spawc.2019.8815404"
  },
  {
    year: "2019",
    title: "A distributed multi-RF chain hybrid mmwave scheme for small-cell systems",
    authors: "L Zhao, J Guo, Z Wei, DWK Ng, J Yuan",
    venue: "ICC 2019-2019 IEEE International Conference on Communications (ICC), 1-7, 2019",
    href: "https://doi.org/10.1109/icc.2019.8761757"
  },
  {
    year: "2019",
    title: "Beamwidth control for noma in hybrid mmwave communication systems",
    authors: "Z Wei, DWK Ng, J Yuan",
    venue: "ICC 2019-2019 IEEE International Conference on Communications (ICC), 1-6, 2019",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:5nxA0vEk-isC"
  },
  {
    year: "2019",
    title: "Energy-efficient resource allocation for secure UAV communication systems",
    authors: "Y Cai, Z Wei, R Li, DWK Ng, J Yuan",
    venue: "2019 IEEE Wireless Communications and Networking Conference (WCNC), 1-8, 2019",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:0EnyYjriUFMC"
  },
  {
    year: "2018",
    title: "On the performance gain of NOMA over OMA in uplink single-cell systems",
    authors: "Z Wei, L Yang, DWK Ng, J Yuan",
    venue: "2018 IEEE Global Communications Conference (GLOBECOM), 1-7, 2018",
    note: "EiC invited paper · ESI Highly Cited Paper",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:8k81kl-MbHgC"
  },
  {
    year: "2018",
    title: "Physical-Layer Secure Transmissions in Cache-Enabled Cooperative Small Cell Networks",
    authors: "TX Zheng, Q Yang, KW Huang, HM Wang, Z Wei, J Yuan",
    venue: "2018 IEEE Global Communications Conference (GLOBECOM), 1-6, 2018",
    href: "https://doi.org/10.1109/glocom.2018.8647492"
  },
  {
    year: "2018",
    title: "Joint trajectory and resource allocation design for UAV communication systems",
    authors: "R Li, Z Wei, L Yang, DWK Ng, N Yang, J Yuan, J An",
    venue: "2018 IEEE Globecom Workshops (GC Wkshps), 1-6, 2018",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:Se3iqnhoufwC"
  },
  {
    year: "2018",
    title: "Joint user identification and channel estimation in massive connectivity with transmission control",
    authors: "Z Sun, Z Wei, L Yang, J Yuan, X Cheng, L Wan",
    venue: "2018 IEEE 10th International Symposium on Turbo Codes & Iterative …, 2018",
    href: "https://doi.org/10.1109/istc.2018.8625352"
  },
  {
    year: "2018",
    title: "A multi-beam NOMA framework for hybrid mmWave systems",
    authors: "Z Wei, L Zhao, J Guo, DWK Ng, J Yuan",
    venue: "2018 IEEE International Conference on Communications (ICC), 1-7, 2018",
    note: "Best Paper Award",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:_FxGoFyzp5QC"
  },
  {
    year: "2018",
    title: "Mitigating pilot contamination in multi-cell hybrid millimeter wave systems",
    authors: "L Zhao, Z Wei, DWK Ng, J Yuan, MC Reed",
    venue: "2018 IEEE International Conference on Communications (ICC), 1-7, 2018",
    href: "https://doi.org/10.1109/icc.2018.8422926"
  },
  {
    year: "2017",
    title: "Fairness comparison of uplink NOMA and OMA",
    authors: "Z Wei, J Guo, DWK Ng, J Yuan",
    venue: "2017 IEEE 85th vehicular technology conference (VTC Spring), 1-6, 2017",
    href: "https://doi.org/10.1109/vtcspring.2017.8108680"
  },
  {
    year: "2017",
    title: "Performance analysis of a hybrid downlink-uplink cooperative NOMA scheme",
    authors: "Z Wei, L Dai, DWK Ng, J Yuan",
    venue: "2017 IEEE 85th Vehicular Technology Conference (VTC Spring), 1-7, 2017",
    href: "https://doi.org/10.1109/vtcspring.2017.8108407"
  },
  {
    year: "2016",
    title: "Power-efficient resource allocation for MC-NOMA with statistical channel state information",
    authors: "Z Wei, DWK Ng, J Yuan",
    venue: "Global Communications Conference (GLOBECOM), 2016 IEEE, 1-7, 2016",
    note: "ESI Highly Cited Paper",
    href: "https://doi.org/10.1109/glocom.2016.7842161"
  }
];

export const bookChapterPublications: Publication[] = [
  {
    year: "2026",
    title: "Delay-Doppler communications and sensing: principles, advances, and applications of OTFS",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Academic Press, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:SdhP9T11ey4C"
  },
  {
    year: "2026",
    title: "Delay-Doppler multiple access",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:JoZmwDi-zQgC"
  },
  {
    year: "2026",
    title: "Delay-Doppler MIMO communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:PELIpwtuRlgC"
  },
  {
    year: "2026",
    title: "Performance analysis of delay-Doppler integrated sensing and communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:_B80troHkn4C"
  },
  {
    year: "2026",
    title: "Wireless channels for communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:Y5dfb0dijaUC"
  },
  {
    year: "2026",
    title: "Delay-Doppler sensing algorithms and performance analysis",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:eMMeJKvmdy0C"
  },
  {
    year: "2026",
    title: "Fundamentals of delay-Doppler communications and sensing",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:AXPGKjj_ei8C"
  },
  {
    year: "2026",
    title: "Performance analysis for delay-Doppler communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:Mojj43d5GZwC"
  },
  {
    year: "2026",
    title: "Channel estimation for delay-Doppler communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:WA5NYHcadZ8C"
  },
  {
    year: "2026",
    title: "Equalization and detection of delay-Doppler communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:t6usbXjVLHcC"
  },
  {
    year: "2026",
    title: "Introduction and background",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:olpn-zPbct0C"
  },
  {
    year: "2026",
    title: "Algorithmic perspectives of delay-Doppler integrated communications and sensing",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:XiVPGOgt02cC"
  },
  {
    year: "2026",
    title: "Implementation of delay-Doppler communications",
    authors: "S Li, W Yuan, Z Wei, J Yuan, G Caire",
    venue: "Elsevier, 2026",
    href: "https://scholar.google.com.sg/citations?view_op=view_citation&hl=zh-CN&user=4yxo8G0AAAAJ&pagesize=100&sortby=pubdate&citation_for_view=4yxo8G0AAAAJ:bnK-pcrLprsC"
  }
];
