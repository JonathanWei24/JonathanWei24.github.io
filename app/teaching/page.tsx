import type { Metadata } from 'next';
export const metadata: Metadata = { title: '教学与学生' };
export const dynamic = 'force-static';
const courses=[['2025 秋','线性代数与解析几何','本科 · 64 学时 · 180 人'],['2024 秋','研究生论文写作指导','研究生 · 16 学时'],['2024 寒假','Fundamentals of Wireless Communications','读书班 · 21 人'],['2024 秋','线性代数与解析几何','本科 · 64 学时 · 170 人'],['2023 秋','线性代数与解析几何','本科 · 48 学时 · 182 人'],['2023 秋','研究生论文写作指导','研究生 · 16 学时'],['2023 暑期','高等电磁场理论','读书班 · 8 人'],['2022 秋','线性代数与解析几何','本科 · 64 学时 · 151 人'],['2022 暑期','Fundamentals of Wireless Communications','读书班 · 13 人']];
const groups: Array<[string, string[]]>=[
  ['博士生',['辛荣荣（2024 秋）','杜若琳（2023 春）','焦天（2022 秋，联合培养，已毕业入职华为）','褚永辉（2020 秋，直博、联合培养，已毕业入职华为）','陈伟健（2019 秋，联合培养，已毕业入职北京维尔科技西安公司）']],
  ['硕士生 · 2026',['王铭澜','谭洋冰','徐瑜']],
  ['硕士生 · 2025',['周洁','张昱烨','陈豪鑫']],
  ['硕士生 · 2024',['胡子鸣','张博闻','罗超勇（联合培养）']],
  ['硕士生 · 2023',['吴汉伟（已毕业，嘉兴一中）','张家硕（已毕业，快手）','薛倩月（联合培养，已毕业，字节跳动）']],
  ['硕士生 · 2022',['辛荣荣（后转博士研究生）']],
  ['本科生培养',['本科毕业设计','学业导师','优本计划与强基计划']],
  ['班主任',['信息与计算科学 2301 班']],
];
export default function TeachingPage(){return <main><section className="page-hero shell"><p className="eyebrow">TEACHING & MENTORING</p><h1>教学与学生</h1><p>以课程、读书班和科研指导贯通数学基础、信号处理与无线通信前沿。</p></section><section className="shell content-section teaching-grid"><div><h2>近期课程</h2><div className="course-list">{courses.map(c=><div key={c.join()}><time>{c[0]}</time><strong>{c[1]}</strong><span>{c[2]}</span></div>)}</div></div><aside><h2>学生指导</h2>{groups.map(([group, students])=><div className="student-group" key={group}><h3>{group}</h3><ul>{students.map(student=><li key={student}>{student}</li>)}</ul></div>)}</aside></section></main>}
