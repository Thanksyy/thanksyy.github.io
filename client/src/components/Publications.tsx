import { useMemo, useState } from "react";
import { Search, FileText, Code2, Database, Presentation, Home as HomeIcon, Video, Link2, X } from "lucide-react";
import { PUBLICATIONS, type Publication, type PubLink } from "@/data/publications";
import Authors from "./Authors";

const LINK_ICON: Record<string, typeof FileText> = {
  PDF: FileText,
  Code: Code2,
  Data: Database,
  Dataset: Database,
  "Dataset & Code": Database,
  "Code & Data": Code2,
  Slides: Presentation,
  Homepage: HomeIcon,
  Handbook: HomeIcon,
  Leaderboard: HomeIcon,
  Video: Video,
};

function LinkPill({ link }: { link: PubLink }) {
  const Icon = LINK_ICON[link.label] ?? Link2;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="hover-lift inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground hover:border-primary hover:text-primary"
    >
      <Icon className="h-3 w-3" />
      {link.label}
    </a>
  );
}

function PubCard({ pub }: { pub: Publication }) {
  return (
    <div className="hover-lift rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-gold/15 px-2 py-0.5 font-mono text-[11px] font-medium text-gold">
          {pub.venue}
        </span>
        {pub.note && (
          <span className="font-mono text-[11px] italic text-muted-foreground">{pub.note}</span>
        )}
      </div>
      <h3 className="font-display text-[15px] font-semibold leading-snug text-foreground">
        {pub.title}
      </h3>
      <div className="mt-1.5">
        <Authors text={pub.authors} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {pub.links?.map((l, i) => <LinkPill key={i} link={l} />)}
        {pub.tags.map((t) => (
          <span
            key={t}
            className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Publications() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  // 动态汇总实际出现过的标签（按字母排序），保证与数据一致
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PUBLICATIONS.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PUBLICATIONS.filter((p) => {
      const matchTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchTag && matchQuery;
    });
  }, [query, activeTag]);

  // 按年份分组
  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <section id="publications" className="scroll-mt-20 py-14">
      <div className="reveal">
        <p className="section-eyebrow">// selected works</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Publications</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {PUBLICATIONS.length} peer-reviewed papers. Filter by tag or search by title, author, venue,
          or keyword.
        </p>
      </div>

      {/* 搜索框 */}
      <div className="reveal mt-6">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author, venue or tag..."
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-9 text-sm outline-none transition-colors focus:border-primary"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* 标签筛选 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {allTags.map((t) => {
            const active = t === activeTag;
            return (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* 结果计数 */}
      <p className="mt-5 font-mono text-xs text-muted-foreground">
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        {activeTag !== "All" && ` · tag: ${activeTag}`}
        {query && ` · "${query}"`}
      </p>

      {/* 论文列表 */}
      <div className="mt-4 space-y-10">
        {grouped.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            No publications match your filter.
          </div>
        )}
        {grouped.map(([year, pubs]) => (
          <div key={year} className="grid gap-4 lg:grid-cols-[80px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <span className="font-display text-2xl font-bold text-primary">{year}</span>
              <span className="ml-2 font-mono text-xs text-muted-foreground lg:ml-0 lg:block">
                {pubs.length} paper{pubs.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {pubs.map((p, i) => (
                <PubCard key={`${year}-${i}`} pub={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
