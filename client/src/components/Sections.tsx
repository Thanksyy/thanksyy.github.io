import { ArrowUpRight, Trophy, Mail, FileText } from "lucide-react";
import { PROJECTS, ADOPTERS } from "@/data/projects";
import { AWARDS, STUDENTS, SERVICES } from "@/data/misc";
import { PROFILE, ASSETS, RECRUITMENT_EN, RECRUITMENT_ZH } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal">
        <p className="section-eyebrow">// open source</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Open-source DATA+AI systems, adopted by enterprises including {ADOPTERS.join(", ")}.
        </p>
      </div>
      <div className="reveal mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="hover-lift group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.highlight && (
              <p className="mt-3 font-mono text-xs font-medium text-gold">{p.highlight}</p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal">
        <p className="section-eyebrow">// recognition</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Selected Awards</h2>
      </div>
      <div className="reveal mt-6 space-y-1">
        {AWARDS.map((a, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 rounded-lg border-l-2 px-4 py-2.5 transition-colors hover:bg-accent/50 ${
              a.highlight ? "border-gold" : "border-border"
            }`}
          >
            <span className="w-12 flex-shrink-0 pt-0.5 font-mono text-sm text-muted-foreground">
              {a.year}
            </span>
            <span className="flex items-start gap-2 text-[15px]">
              {a.highlight && <Trophy className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />}
              <span className={a.highlight ? "font-medium text-foreground" : "text-muted-foreground"}>
                {a.title}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Students() {
  // 按年级分组
  const cohorts = Array.from(new Set(STUDENTS.map((s) => s.cohort))).sort();
  return (
    <section id="students" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal">
        <p className="section-eyebrow">// the lab</p>
        <h2 className="mt-1 font-display text-3xl font-bold">PhD Students</h2>
      </div>
      <div className="reveal mt-6 space-y-5">
        {cohorts.map((c) => (
          <div key={c} className="grid gap-3 sm:grid-cols-[80px_1fr]">
            <div className="font-mono text-sm text-primary">{c}</div>
            <div className="flex flex-wrap gap-2">
              {STUDENTS.filter((s) => s.cohort === c).map((s) => (
                <div
                  key={s.name}
                  className="hover-lift rounded-lg border border-border bg-card px-3 py-2"
                >
                  <span className="text-sm font-medium">{s.name}</span>
                  {s.note && (
                    <span className="ml-1.5 font-mono text-[11px] text-muted-foreground">
                      {s.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal">
        <p className="section-eyebrow">// community</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Academic Services</h2>
      </div>
      <div className="reveal mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.role} className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-display text-sm font-semibold text-gold">{s.role}</h3>
            <ul className="mt-2 space-y-1">
              {s.items.map((it) => (
                <li key={it} className="text-sm text-muted-foreground">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Join() {
  return (
    <section id="join" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-7 dot-grid">
        <p className="section-eyebrow">// join us</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Prospective Students & Collaborators</h2>
        <div className="mt-4 max-w-3xl space-y-3">
          <p className="text-[15px] leading-relaxed text-muted-foreground">{RECRUITMENT_EN}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{RECRUITMENT_ZH}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={PROFILE.emailHref}
            className="hover-lift inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href={ASSETS.recruitmentPdf}
            target="_blank"
            rel="noreferrer"
            className="hover-lift inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium hover:border-gold hover:text-gold"
          >
            <FileText className="h-4 w-4" /> 招生介绍 PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} ({PROFILE.nameZh}) · {PROFILE.affiliations[1]}
        </p>
        <p className="font-mono text-xs">Built with React · Hosted on GitHub Pages</p>
      </div>
    </footer>
  );
}
