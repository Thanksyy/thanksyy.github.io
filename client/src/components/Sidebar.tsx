import { useState } from "react";
import { Mail, MapPin, GraduationCap, Github, Menu, X, FileText } from "lucide-react";
import { PROFILE, ASSETS } from "@/data/profile";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "awards", label: "Awards" },
  { id: "students", label: "Students" },
  { id: "services", label: "Services" },
  { id: "join", label: "Join the Lab" },
];

// Google Scholar 图标（lucide 无此图标，用内联 SVG）
function ScholarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = (
    <div className="flex items-center gap-2">
      <a
        href={PROFILE.links.scholar}
        target="_blank"
        rel="noreferrer"
        aria-label="Google Scholar"
        className="hover-lift flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground hover:border-gold hover:text-gold"
      >
        <ScholarIcon className="h-[18px] w-[18px]" />
      </a>
      <a
        href={PROFILE.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="hover-lift flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground hover:border-gold hover:text-gold"
      >
        <Github className="h-[18px] w-[18px]" />
      </a>
    </div>
  );

  return (
    <>
      {/* 移动端顶栏（仅 < lg 显示） */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <button onClick={() => handleNav("top")} className="flex min-w-0 items-center gap-2">
          <img src={ASSETS.logo} alt="logo" className="h-8 w-8 flex-shrink-0" />
          <span className="truncate font-display text-lg font-bold">Yuyu Luo</span>
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* 移动端抽屉：紧凑个人信息头 + 导航，纯纵向 flow，杜绝重叠（仅 < lg 显示） */}
      {open && (
        <div className="sticky top-[57px] z-30 max-h-[calc(100vh-57px)] overflow-y-auto border-b border-border bg-background/97 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4 px-5 py-5">
            {/* 个人信息头 */}
            <div className="flex items-center gap-4">
              <img
                src={ASSETS.avatar}
                alt="Yuyu Luo"
                className="h-16 w-16 flex-shrink-0 rounded-xl object-cover ring-1 ring-border"
              />
              <div className="min-w-0">
                <p className="font-display text-xl font-bold leading-tight">{PROFILE.name}</p>
                <p className="text-sm text-muted-foreground">
                  {PROFILE.nameZh} · {PROFILE.title}
                </p>
              </div>
            </div>

            {/* 联系信息 */}
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="min-w-0 break-words">{PROFILE.affiliations.join(", ")}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="min-w-0 break-words">{PROFILE.office}</span>
              </p>
              <a href={PROFILE.emailHref} className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span className="min-w-0 break-all font-mono text-[12.5px]">{PROFILE.email}</span>
              </a>
            </div>

            {/* 招生按钮 + 社交 */}
            <div className="flex items-center gap-3">
              <a
                href={ASSETS.recruitmentPdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <FileText className="h-4 w-4" /> Recruitment / 招生介绍
              </a>
              {socials}
            </div>

            {/* 导航 */}
            <nav className="border-t border-border pt-3">
              <ul className="grid grid-cols-2 gap-1">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => handleNav(n.id)}
                      className="w-full rounded-md px-3 py-2 text-left text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* 桌面端 sticky 侧栏 */}
      <aside className="hidden lg:flex lg:h-screen lg:w-[340px] lg:min-w-[340px] lg:max-w-[340px] lg:flex-shrink-0 lg:flex-grow-0 lg:flex-col lg:sticky lg:top-0 lg:overflow-y-auto border-r border-border bg-card/40 px-8 py-10">
        <button onClick={() => handleNav("top")} className="mb-6 flex items-center gap-2.5 self-start">
          <img src={ASSETS.logo} alt="DIAL Lab logo" className="h-10 w-10" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            DIAL Lab
          </span>
        </button>

        <div className="mb-6 flex w-full min-w-0 flex-col items-center text-center">
          <img
            src={ASSETS.avatar}
            alt="Yuyu Luo"
            className="aspect-square w-44 max-w-full rounded-2xl object-cover ring-1 ring-border"
          />
          <h1 className="mt-5 w-full font-display text-3xl font-bold leading-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-0.5 text-sm text-muted-foreground">{PROFILE.nameZh}</p>
          <p className="mt-2 font-medium text-gold">{PROFILE.title}</p>
        </div>

        <div className="mt-3 w-full min-w-0 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="min-w-0 break-words">{PROFILE.affiliations.join(", ")}</span>
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
            <span className="min-w-0 break-words">{PROFILE.office}</span>
          </p>
          <a href={PROFILE.emailHref} className="flex items-center gap-2 hover:text-gold">
            <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
            <span className="min-w-0 break-all font-mono text-[12.5px]">{PROFILE.email}</span>
          </a>
        </div>

        <div className="my-5">{socials}</div>

        <a
          href={ASSETS.recruitmentPdf}
          target="_blank"
          rel="noreferrer"
          className="hover-lift mb-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <FileText className="h-4 w-4" /> Recruitment / 招生介绍
        </a>

        <nav className="mt-auto">
          <ul className="space-y-0.5">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => handleNav(n.id)}
                  className="group flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-gold" />
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
