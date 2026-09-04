import type { Metadata } from 'next';
export const metadata: Metadata = { title: '教书育人' };
export const dynamic = 'force-static';
const courses=[['2025 秋','线性代数与解析几何','本科 · 64 学时 · 180 人'],['2024 秋','研究生论文写作指导','研究生 · 16 学时'],['2024 寒假','Fundamentals of Wireless Communications','读书班 · 21 人'],['2024 秋','线性代数与解析几何','本科 · 64 学时 · 170 人'],['2023 秋','线性代数与解析几何','本科 · 48 学时 · 182 人'],['2023 秋','研究生论文写作指导','研究生 · 16 学时'],['2023 暑期','高等电磁场理论','读书班 · 8 人'],['2022 秋','线性代数与解析几何','本科 · 64 学时 · 151 人'],['2022 暑期','Fundamentals of Wireless Communications','读书班 · 13 人']];
const groups: Array<[string, string[]]>=[
  ['博士生',['辛荣荣（2024 秋）','杜若琳（2023 春）','焦天（2022 秋，联合培养，已毕业入职华为）','褚永辉（2020 秋，直博、联合培养，已毕业入职华为）','陈伟健（2019 秋，联合培养，已毕业入职北京未尔科技西安分公司）']],
  ['硕士生 · 2026',['王铭澜','谭洋冰','徐瑜']],
  ['硕士生 · 2025',['周洁','张昱烨','陈豪鑫']],
  ['硕士生 · 2024',['胡子鸣','张博闻','罗超勇（联合培养）']],
  ['硕士生 · 2023',['吴汉威（已毕业，嘉兴一中）','张家烁（已毕业，快手）','薛潜越（联合培养，已毕业，字节跳动）']],
  ['硕士生 · 2022',['辛荣荣（后转博士研究生）']],
  ['本科毕业设计',['王铭澜（2024 届）','陈纪潼（2024 届）','周洁（2024 届，重庆大学）','张昱烨（2024 届，郑州大学）','陈豪鑫（2024 届，河北工业大学）','胡子鸣（2024 届）','丁光伟（2024 届）','吴汉威（2023 届）','张家烁（2023 届，东北大学）','雷渝越（2023 届）']],
  ['学业导师',['李泓锦（2024 级）','汤之洋（2024 级）','王文杰（2023 级）','王鹏宵（2023 级）','陈一鸣（2023 级）','陆岳（2023 级）','许戈（2023 级）','原帅（2023 级）','曹弘睿（2022 级）','谢东皓（2022 级）','邓远韬（2022 级）','叶润植（2022 级）','胡楷（2022 级）']],
  ['优本计划',['吴汉威（2019 级）','葛思凯（2019 级）']],
  ['强基计划',['宋郅博（2021 级）']],
  ['班主任',['信息与计算科学 2301 班']],
];
export default function TeachingPage(){return <main><section className="page-hero shell"><p className="eyebrow">TEACHING & MENTORING</p><h1>教书育人</h1><p>以课程、读书班和科研指导贯通数学基础、信号处理与无线通信前沿。</p></section><section className="shell content-section teaching-grid"><div><h2>近期课程</h2><div className="course-list">{courses.map(c=><div key={c.join()}><time>{c[0]}</time><strong>{c[1]}</strong><span>{c[2]}</span></div>)}</div></div><aside><h2>学生指导</h2>{groups.map(([group, students])=><div className="student-group" key={group}><h3>{group}</h3><ul>{students.map(student=><li key={student}>{student}</li>)}</ul></div>)}</aside></section></main>}
