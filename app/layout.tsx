import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_SC } from 'next/font/google';
import { Mail, MapPin } from 'lucide-react';
import './globals.css';

/* oxlint-disable next/no-html-link-for-pages -- full-page navigation is required for GitHub Pages static hosting */

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const notoSans = Noto_Sans_SC({ variable: '--font-noto-sc', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: { default: '魏志强 | Zhiqiang Wei', template: '%s | 魏志强' },
  description: '魏志强教授学术个人主页：高移动性无线通信、OTFS、通感一体化与 B5G/6G 网络研究。',
};

const nav = [['首页', '/'], ['科学研究', '/research'], ['论文专著', '/publications'], ['教书育人', '/teaching'], ['学术服务', '/service'], ['新闻', '/news']];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable}`}>
        <header className="site-header">
          <a className="brand" href="/" aria-label="魏志强个人主页"><span className="brand-mark">ZW</span><span><strong>魏志强</strong><small>Zhiqiang Wei</small></span></a>
          <nav aria-label="主导航">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <a className="header-contact" href="mailto:zhiqiang.wei@xjtu.edu.cn"><Mail size={16} /> zhiqiang.wei@xjtu.edu.cn</a>
        </header>
        {children}
        <footer>
          <div className="shell footer-grid">
            <div><strong>魏志强 · Zhiqiang Wei</strong><p>西安交通大学数学与统计学院</p></div>
            <div><MapPin size={17} /><span>兴庆校区数学楼 326 办公室</span></div>
            <div><p>© {new Date().getFullYear()} Zhiqiang Wei</p><a href="mailto:zhiqiang.wei@xjtu.edu.cn">zhiqiang.wei@xjtu.edu.cn</a></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
