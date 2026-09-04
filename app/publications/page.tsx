import type { Metadata } from 'next';
import { BookOpen, ExternalLink } from 'lucide-react';
import { bookChapterPublications, bookUrl, conferencePublications, journalPublications, scholarProfile, scholarSearch, underReviewPublications, type Publication } from '@/lib/profile-data';

export const metadata: Metadata = { title: '论文专著' };
export const dynamic = 'force-static';

function PublicationList({ items, start = 1 }: { items: Publication[]; start?: number }) {
  return <div className="publication-list">{items.map((p, i) => {
    const href = p.href || scholarSearch(p.title);
    return <article key={`${p.year}-${p.title}`}><span>{String(start + i).padStart(2, '0')}</span><div><time>{p.year}</time><h2><a href={href} target="_blank" rel="noreferrer">{p.title} <ExternalLink size={14}/></a></h2>{p.authors && <p className="publication-authors">{p.authors}</p>}<p>{p.venue}</p>{p.note && <em>{p.note}</em>}</div></article>;
  })}</div>;
}

export default function PublicationsPage(){return <main>
  <section className="page-hero shell"><p className="eyebrow">PUBLICATIONS & BOOK</p><h1>论文专著</h1><div className="page-actions"><a className="button primary" href={scholarProfile} target="_blank" rel="noreferrer">Google Scholar <ExternalLink size={16}/></a></div></section>
  <section className="shell content-section">
    <article className="book-feature"><BookOpen size={34}/><div><p className="eyebrow">MONOGRAPH · 2026</p><h2><a href={bookUrl} target="_blank" rel="noreferrer">Delay-Doppler Communications and Sensing <ExternalLink size={17}/></a></h2><p><strong>Principles, Advances, and Applications of OTFS</strong></p><p>Shuangyang Li, Weijie Yuan, <strong>Zhiqiang Wei</strong>, Jinhong Yuan, Giuseppe Caire · Elsevier · 1st Edition · June 2026</p><p>系统介绍 Zak 变换、时延–多普勒域通信、OTFS、MIMO、雷达感知及 DD 域通感一体化，共 15 章。</p></div></article>
    <div className="section-heading publication-heading"><div><p className="eyebrow">UNDER REVIEW</p><h2>投稿中论文</h2></div><span>{underReviewPublications.length} entries</span></div><PublicationList items={underReviewPublications}/>
    <div className="section-heading publication-heading second"><div><p className="eyebrow">JOURNAL</p><h2>期刊论文</h2></div><span>{journalPublications.length} entries</span></div><PublicationList items={journalPublications}/>
    <div className="section-heading publication-heading second"><div><p className="eyebrow">CONFERENCE</p><h2>会议论文</h2></div><span>{conferencePublications.length} entries</span></div><PublicationList items={conferencePublications}/>
    <div className="section-heading publication-heading second"><div><p className="eyebrow">BOOK & CHAPTERS</p><h2>专著与章节</h2></div><span>{bookChapterPublications.length} entries</span></div><PublicationList items={bookChapterPublications}/>
  </section>
</main>}
