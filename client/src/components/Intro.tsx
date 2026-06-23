import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, RESEARCH_INTERESTS, BIO_EN, BIO_ZH, ASSETS } from "@/data/profile";

export function About() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const bio = lang === "en" ? BIO_EN : BIO_ZH;
  return (
    <section id="about" className="scroll-mt-20 pb-14 pt-10 lg:pt-16">
      <div className="reveal flex items-center justify-between gap-4">
        <div>
          <p className="section-eyebrow">// about</p>
          <h2 className="mt-1 font-display text-3xl font-bold">Biography</h2>
        </div>
        <div className="flex overflow-hidden rounded-md border border-border">
          {(["en", "zh"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                lang === l ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {l === "en" ? "EN" : "中文"}
            </button>
          ))}
        </div>
      </div>
      <div className="reveal mt-5 max-w-3xl space-y-4">
        {bio.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
      <div className="reveal mt-5">
        <a
          href={PROFILE.lab.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-gold"
        >
          {PROFILE.lab.full} ({PROFILE.lab.name})
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-border py-14">
      <div className="reveal">
        <p className="section-eyebrow">// research</p>
        <h2 className="mt-1 font-display text-3xl font-bold">Research Interests</h2>
      </div>
      <div className="reveal mt-6 grid gap-3 sm:grid-cols-2">
        {RESEARCH_INTERESTS.map((r, i) => (
          <div
            key={r.title}
            className="hover-lift group relative overflow-hidden rounded-xl border border-border bg-card p-5 hover:border-primary/50"
          >
            <span className="font-mono text-xs text-gold">0{i + 1}</span>
            <h3 className="mt-1 font-display text-lg font-semibold">{r.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
