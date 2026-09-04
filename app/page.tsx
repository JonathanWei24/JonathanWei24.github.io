import { ArrowRight, BookOpen, Radio, Satellite, ScanLine } from 'lucide-react';

/* oxlint-disable next/no-html-link-for-pages -- full-page navigation is required for GitHub Pages static hosting */

const research = [
  { icon: Radio, number: '01', title: '高移动性信道传输', en: 'High-mobility communications', text: '面向无人机、车联网、卫星与航空通信，研究调制波形、检测及信道估计方法。' },
  { icon: Satellite, number: '02', title: '高移动性网络优化', en: 'Network optimization', text: '结合无线感知与人工智能，研究空时频资源协同设计及在线自适应网络优化。' },
  { icon: ScanLine, number: '03', title: '通感一体化理论', en: 'Integrated sensing & communication', text: '刻画通信与感知的性能边界，为通感一体化系统设计提供信息论基础。' },
];

const highlights = [
  '国家自然科学基金优秀青年科学基金（海外）项目获得者',
  '爱思唯尔中国高被引学者（公开简介记载自 2021 年起）',
  '斯坦福大学全球前 2% 顶尖科学家榜单（2021–2024）',
];

export default function Home() {
  return (
    <main>
      <section className="hero shell" id="about">
        <div className="hero-copy">
          <p className="eyebrow">XI&apos;AN JIAOTONG UNIVERSITY · 西安交通大学</p>
          <h1>魏志强 <span>Zhiqiang Wei</span></h1>
          <p className="role">教授 · 博士生导师 · 洪堡学者</p>
          <p className="lead">面向 B5G/6G 无线网络，研究高移动性通信、时延–多普勒域信号处理与通感一体化信息理论。</p>
          <div className="hero-actions">
            <a className="button primary" href="/research">探索研究 <ArrowRight size={17} /></a>
            <a className="button ghost" href="/publications"><BookOpen size={17} /> 论文成果</a>
          </div>
          <a className="fresh-project" href="/research"><span>NEW · 2026 NSFC</span><strong>基于隐式信道图谱的低空无线网络预测式资源优化方法研究</strong><ArrowRight size={17}/></a>
          <div className="affiliations">
            <span>数学与统计学院</span><span>信息科学系</span><span>大数据算法与分析技术国家工程实验室</span>
          </div>
        </div>
        <div className="portrait-wrap">
          {/* oxlint-disable-next-line next/no-img-element -- archived local portrait */}
          <div className="portrait-frame"><img src="/assets/legacy/cda45472-e14d-48d0-83e9-8d82e1604c4d-b70c112c3c.png" alt="魏志强教授" width="241" height="290" /></div>
          <div className="signal-card"><span>RESEARCH SIGNAL</span><strong>6G · OTFS · ISAC</strong></div>
        </div>
      </section>

      <section className="research-band" id="research">
        <div className="shell">
          <div className="section-heading split">
            <div><p className="eyebrow">RESEARCH FOCUS</p><h2>从信道理论到智能网络</h2></div>
            <a className="text-link" href="/research">查看完整研究介绍 <ArrowRight size={16} /></a>
          </div>
          <div className="research-grid">
            {research.map((item) => (
              <article className="research-card" key={item.number}>
                <div className="card-top"><item.icon size={24} /><span>{item.number}</span></div>
                <h3>{item.title}</h3><p className="card-en">{item.en}</p><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell two-column" id="profile">
        <div>
          <p className="eyebrow">PROFILE</p><h2>学术经历</h2>
          <div className="timeline">
            <div><time>2022 — 至今</time><strong>西安交通大学</strong><span>教授、博士生导师</span></div>
            <div><time>2021 — 2022</time><strong>埃朗根–纽伦堡大学</strong><span>洪堡博士后研究员</span></div>
            <div><time>2019 — 2021</time><strong>新南威尔士大学</strong><span>博士后研究员</span></div>
            <div><time>2015 — 2019</time><strong>新南威尔士大学</strong><span>电气工程博士</span></div>
          </div>
        </div>
        <aside className="recognition">
          <p className="eyebrow">RECOGNITION</p><h2>荣誉与影响</h2>
          <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="text-link light" href="/service">学术服务与荣誉 <ArrowRight size={16} /></a>
        </aside>
      </section>

      <section className="shell latest" id="news">
        <div className="section-heading split"><div><p className="eyebrow">LATEST</p><h2>近期动态</h2></div><a className="text-link" href="/news">全部新闻 <ArrowRight size={16} /></a></div>
        <div className="news-list">
          <a href="/research"><time>2026</time><strong>新增国家自然科学基金面上项目：基于隐式信道图谱的低空无线网络预测式资源优化方法研究</strong><ArrowRight /></a>
          <a href="/publications"><time>2026.06</time><strong>Elsevier 专著 Delay-Doppler Communications and Sensing 出版</strong><ArrowRight /></a>
          <a href="/news"><time>2026.01.08</time><strong>杜若琳同学第一作者论文被 IEEE Transactions on Wireless Communications 接收</strong><ArrowRight /></a>
        </div>
      </section>
    </main>
  );
}
