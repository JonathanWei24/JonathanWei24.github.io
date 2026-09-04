import type { Metadata } from 'next';
export const metadata: Metadata = { title: '研究方向' };
export const dynamic = 'force-static';

const areas = [
  { n:'01', title:'高移动性信道信息传输', en:'Information transmission in high-mobility channels', image:'/assets/legacy/1b433201-13d2-4f57-a1d2-cbedd94f3989-d4e5027efe.jpg', caption:'时延–多普勒域调制波形', text:'未来 6G 将广泛服务于无人机、车联网、卫星和航空通信等高移动场景。针对无线信道快速时变问题，团队从调制波形、检测与信道估计等环节寻求突破，提升信息传输可靠性。' },
  { n:'02', title:'高移动性网络优化', en:'High-mobility network optimization', image:'/assets/legacy/251420ed-aed1-4f1e-9b96-b8c89c2abd99-c0ca953919.jpg', caption:'无人机网络优化', text:'聚焦高移动通信场景需求，利用无线感知并结合人工智能，研究空–时–频资源联合优化和基于深度强化学习的在线自适应网络优化。' },
  { n:'03', title:'通感一体化信息理论与技术', en:'Information theory for integrated sensing and communication', image:'/assets/legacy/a64074f1-d27d-48e6-a5f2-58de3f259c98-e2910e4d82.jpg', caption:'双基地感通一体化信息论模型', text:'建立通感一体化的信息理论等价模型，分析通信与感知的性能边界，为资源高效利用及通感协同系统的优化设计提供理论指导。' },
];

const projects = [
  ['2026–','国家自然科学基金面上项目：基于隐式信道图谱的低空无线网络预测式资源优化方法研究','主持 · 2026 年新增'],
  ['2023–2025','国家自然科学基金优秀青年科学基金（海外）项目','主持'],
  ['2022–2028','西安交通大学青年拔尖人才科研启动项目','主持'],
  ['2023–2028','国家重点研发计划子课题（55 万元）','主持'],
  ['2024–2025','华为技术有限公司合作项目（82.4 万元）','主持'],
  ['2022–2023','三一智能装备有限公司合作项目（80 万元）','主持'],
  ['2022–2025','陕西省秦创原引进高层次创新创业人才项目（43 万元）','主持'],
  ['2023–2024','华为技术有限公司合作项目（79 万元）','参与'],
  ['2021–2022','Alexander von Humboldt Foundation Project（45 万元）','主持'],
  ['2020','Telstra：Integrated Access and Backhaul for mmWave Systems（35 万元）','主持'],
];

export default function ResearchPage(){return <main>
  <section className="page-hero shell"><p className="eyebrow">RESEARCH</p><h1>研究方向</h1><p>围绕 B5G/6G 高移动无线网络，连接物理层算法、网络优化与信息理论。</p></section>
  <section className="shell content-section"><div className="area-list">{areas.map((a,i)=><article className="area" key={a.n}>
    <div className="area-copy"><span className="big-number">{a.n}</span><p className="eyebrow">{a.en}</p><h2>{a.title}</h2><p>{a.text}</p></div>
    <figure className={i===2?'wide-diagram':''}>{/* oxlint-disable-next-line next/no-img-element -- archived local research figure */}<img src={a.image} alt={a.caption} width={i===0?811:i===1?700:695} height={i===0?571:i===1?547:268}/><figcaption>{a.caption}</figcaption></figure>
  </article>)}</div></section>
  <section className="project-band"><div className="shell"><p className="eyebrow">RESEARCH PROJECTS</p><h2>科研项目</h2><p className="project-intro">2026 年国家自然科学基金面上项目为本次新增信息；公开检索暂未获得可可靠核验的批准号、资助金额与结题年份，因此只发布已确认内容，待后续材料补齐。</p><div className="project-list">{projects.map(p=><div key={p[1]}><time>{p[0]}</time><strong>{p[1]}</strong><span>{p[2]}</span></div>)}</div></div></section>
</main>}
