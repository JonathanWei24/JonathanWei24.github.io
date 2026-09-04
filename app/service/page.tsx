import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
export const metadata: Metadata = { title: '学术服务与荣誉' };
export const dynamic = 'force-static';

const roles=[
  ['IEEE Senior Member','https://www.ieee.org/membership/senior/'],
  ['IEEE ComSoc OTFS Special Interest Group 创始联合主席（Publications）','https://sites.google.com/view/otfs-sig/otfs-sig'],
  ['IEEE Transactions on Communications 编委','https://www.comsoc.org/publications/journals/ieee-tcom'],
  ['IEEE Transactions on Wireless Communications 编委','https://www.comsoc.org/publications/journals/ieee-twc'],
  ['IEEE Open Journal of the Communications Society 编委','https://www.comsoc.org/publications/journals/ieee-ojcoms'],
];
const activities=[
  ['2026','IEEE ISIT 2026 Workshop Keynote：On Modulation Waveforms for 6G High-Mobility Communications','https://ngwd2026.github.io/isit_workshop/'],
  ['2025','IEEE GLOBECOM Workshop on Delay-Doppler Communications, Sensing, and Their Integration','https://globecom2025.ieee-globecom.org/'],
  ['2025','IEEE ICC Workshop on OTFS and Delay-Doppler Multicarrier Communications for 6G','https://icc2025.ieee-icc.org/'],
  ['2025','IEEE WCNC Workshop on Delay-Doppler Communications, Sensing, and Their Integration','https://wcnc2025.ieee-wcnc.org/'],
  ['2024','IEEE ICC Workshop on OTFS and DDMC for 6G · Publicity Chair','https://sites.google.com/view/otfs-ddmc-6g'],
  ['2024','IEEE WCNC Workshop on Delay-Doppler Communications, Sensing, and Their Integration','https://wcnc2024.ieee-wcnc.org/'],
  ['2023','IEEE VTC-Fall Workshop W4 · Delay-Doppler Communications and Sensing for Vehicular Networks · Co-organizer','https://events.vtsociety.org/vtc2023-fall/workshops/w4-delay-doppler-communications-and-sensing-for-vehicular-networks/'],
  ['2023','IEEE WCNC Workshop on Delay-Doppler Communications, Sensing, and Their Integration','https://wcnc2023.ieee-wcnc.org/'],
  ['2022','IEEE VTC-Spring Tutorial T13 · OTFS: Waveform for Future Wireless Networks · Co-organizer','https://events.vtsociety.org/vtc2022-spring/conference-sessions/call-for-tutorials/t13-orthogonal-time-frequency-space-modulation-waveform-for-future-wireless-networks/'],
  ['2022','IEEE ICC Workshop on OTFS and Delay-Doppler Signal Processing for 6G','https://icc2022.ieee-icc.org/'],
  ['2021','IEEE ICC Workshop on OTFS for 6G and Future High-mobility Communications','https://icc2021.ieee-icc.org/'],
];
const honors=[
  ['国家自然科学基金优秀青年科学基金（海外）项目获得者','https://www.nsfc.gov.cn/'],
  ['斯坦福大学 / Elsevier 全球前 2% 顶尖科学家榜单（已公开核验：2021–2024）','https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/7'],
  ['爱思唯尔“中国高被引学者”（公开个人简介记载自 2021 年起；原站明确列出 2024）','https://www.elsevier.com/zh-cn/solutions/scopus/how-scopus-works/highly-cited'],
  ['德国 Alexander von Humboldt Foundation 洪堡学者','https://www.humboldt-foundation.de/'],
  ['IEEE ICC 2018 最佳会议论文奖（第一作者）','https://icc2018.ieee-icc.org/'],
  ['IEEE WCNC 2023 最佳会议论文奖','https://wcnc2023.ieee-wcnc.org/'],
  ['IEEE TWC 杰出审稿专家（2017、2018）','https://www.comsoc.org/publications/journals/ieee-twc'],
  ['IEEE TCOM 杰出审稿专家（2017–2020）','https://www.comsoc.org/publications/journals/ieee-tcom'],
];
const tpc=['IEEE GLOBECOM：2017、2018、2020–2024','IEEE ICC：2018、2021–2024','IEEE WCNC：2019、2021–2024','IEEE/CIC ICCC：2021–2023','IEEE WCSP：2018'];

export default function ServicePage(){return <main><section className="page-hero shell"><p className="eyebrow">SERVICE & HONORS</p><h1>学术服务与荣誉</h1></section><section className="shell content-section service-layout">
  <div className="service-main"><p className="eyebrow">EDITORIAL & COMMUNITY</p><h2>学术兼职</h2><ul className="linked-list">{roles.map(([x,u])=><li key={x}><a href={u} target="_blank" rel="noreferrer">{x}<ExternalLink size={14}/></a></li>)}</ul>
  <div className="section-heading publication-heading second"><div><p className="eyebrow">CONFERENCE ORGANIZATION</p><h2>专题、教程与会议组织</h2></div></div><div className="activity-list">{activities.map(([y,x,u])=><article key={y+x}><time>{y}</time><a href={u} target="_blank" rel="noreferrer">{x}<ExternalLink size={14}/></a></article>)}</div>
  <h3 className="subhead">技术程序委员会</h3><ul className="clean-list compact">{tpc.map(x=><li key={x}>{x}</li>)}</ul><h3 className="subhead">专题客座编辑</h3><ul className="linked-list compact"><li><a href="https://www.ejournal.org.cn/zh/home/" target="_blank" rel="noreferrer">《电子学报》：面向 6G 的新型通信波形专题 <ExternalLink size={14}/></a></li><li>ZTE Communications：Integrated Sensing and Communication（2024）</li><li>Entropy：Delay-Doppler Domain Communications for Future Wireless Networks（2023）</li><li>《电子与信息学报》：面向 6G 的时延多普勒域通信范式（2022）</li></ul></div>
  <aside className="honor-panel"><p className="eyebrow">RECOGNITION</p><h2>荣誉获奖</h2><ol>{honors.map(([x,u],i)=><li key={x}><span>{String(i+1).padStart(2,'0')}</span><a href={u} target="_blank" rel="noreferrer">{x}<ExternalLink size={13}/></a></li>)}</ol></aside>
  </section></main>}
