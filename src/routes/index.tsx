import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowRight,
  MonitorSmartphone,
  Megaphone,
  Cpu,
  Zap,
  Target,
  Layers,
  Handshake,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- Reusable bits ---------- */

function NumberedCircle({ n }: { n: number }) {
  return (
    <div className="relative inline-flex h-14 w-14 items-center justify-center">
      <span
        className="absolute inset-0 rounded-full border border-blue/40"
        aria-hidden
      />
      <span
        className="absolute inset-1.5 rounded-full border border-teal/30"
        aria-hidden
      />
      <span className="relative font-display text-lg font-semibold text-blue">
        {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue">
      {children}
    </p>
  );
}

/* ---------- Page ---------- */

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Work />
        <Testimonial />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Circular motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[42rem] w-[42rem] opacity-60"
      >
        <div className="absolute inset-0 rounded-full border border-blue/25" />
        <div className="absolute inset-10 rounded-full border border-blue/20" />
        <div className="absolute inset-24 rounded-full border border-teal/20" />
        <div className="absolute inset-40 rounded-full border border-teal/15" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue/20 blur-3xl"
      />

      <div className="container-x relative">
        <div className="max-w-3xl fade-up">
          <Eyebrow>Digital Agency</Eyebrow>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            We build websites, grow brands, and automate the busywork.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
            Dinexity is a small, senior team shipping high-performance sites,
            social campaigns that convert, and AI automation that gives your
            team its calendar back.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-medium text-white hover:brightness-110 transition"
            >
              Start a project <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/90 hover:bg-white/5 transition"
            >
              See what we do
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["120+", "Projects shipped"],
              ["4.9/5", "Client rating"],
              ["11 yrs", "Combined craft"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-white">
                  {n}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    desc: "Brand sites, e-commerce, and web apps built for speed, SEO, and conversion. Design that ships, code that lasts.",
    bullets: ["Marketing sites & landing pages", "Shopify & headless commerce", "Custom web apps"],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Strategy, content, and paid campaigns that turn audiences into customers. Reporting that shows the money, not just likes.",
    bullets: ["Content strategy & production", "Paid & organic campaigns", "Community & analytics"],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Workflow automation, AI chatbots, and internal tooling that remove hours from your week and errors from your process.",
    bullets: ["Workflow automation", "AI chat & support agents", "Internal tools & integrations"],
  },
];

function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
            Three pillars. One team that ships.
          </h2>
          <p className="mt-5 text-slate-body text-lg leading-relaxed">
            We work across the full stack of modern digital growth — from the
            site itself, to the audience visiting it, to the automations
            running quietly behind it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative rounded-2xl bg-mist p-8 transition hover:bg-white hover:shadow-[var(--shadow-card)] border border-transparent hover:border-border"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon size={22} />
                  </div>
                  <NumberedCircle n={i + 1} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-slate-body leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-body">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const whyPoints = [
  {
    icon: Zap,
    title: "Speed without shortcuts",
    desc: "Most engagements ship a first meaningful result inside three weeks.",
  },
  {
    icon: Target,
    title: "Results, measured",
    desc: "Every project has a KPI. Every month you get a straight-talk report.",
  },
  {
    icon: Layers,
    title: "Technical depth",
    desc: "Senior engineers on every build. No handoffs, no juniors learning on your dime.",
  },
  {
    icon: Handshake,
    title: "Real partnership",
    desc: "One team, one channel, a founder in the room. We stay after launch.",
  },
];

function Why() {
  return (
    <section id="why" className="section-pad bg-navy text-white">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <Eyebrow>Why Dinexity</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
              A studio built to move fast and stay honest.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md">
              We pick fewer clients so the work stays sharp. That means senior
              attention, quick decisions, and outcomes you can actually point to.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <Stat n="92%" l="of clients see lift within 60 days" />
              <Stat n="3.4×" l="average ROAS on paid social" />
              <Stat n="98" l="average Lighthouse performance" />
              <Stat n="< 24h" l="response time, always" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {whyPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/15 text-blue">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-teal">{n}</div>
      <div className="text-xs text-white/60 mt-1 leading-snug">{l}</div>
    </div>
  );
}

const steps = [
  { title: "Discover", desc: "We dig into your goals, users, and constraints. No boilerplate discovery decks." },
  { title: "Design & Strategize", desc: "A plan you can read in ten minutes. Designs that solve the actual problem." },
  { title: "Build & Launch", desc: "Weekly demos, no surprises. We ship, then we polish in the light." },
  { title: "Grow & Optimize", desc: "Post-launch we run the numbers, refine, and keep compounding results." },
];

function Process() {
  return (
    <section id="process" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
            Four steps. No mystery.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl bg-white p-7 border border-border"
            >
              <NumberedCircle n={i + 1} />
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-body leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const cases = [
  {
    tag: "E-commerce",
    title: "Northline Supply",
    desc: "Rebuilt the storefront on headless Shopify and rewired the acquisition funnel.",
    metrics: [
      ["+64%", "revenue in 90 days"],
      ["-38%", "page load time"],
      ["2.1×", "return on ad spend"],
    ],
  },
  {
    tag: "SaaS + AI",
    title: "Fielder CRM",
    desc: "Shipped an AI support agent and automated the top ten repeat tickets.",
    metrics: [
      ["71%", "tickets auto-resolved"],
      ["+22 NPS", "in one quarter"],
      ["11h/wk", "returned to the team"],
    ],
  },
];

function Work() {
  return (
    <section id="work" className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
              Outcomes we're proud to point at.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue"
          >
            See more work <ArrowRight size={14} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl bg-mist p-8 md:p-10 border border-transparent hover:border-blue/30 transition"
            >
              <span className="inline-flex text-xs font-medium uppercase tracking-widest text-blue">
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
                {c.title}
              </h3>
              <p className="mt-3 text-slate-body leading-relaxed">{c.desc}</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {c.metrics.map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-xl font-semibold text-navy">
                      {n}
                    </div>
                    <div className="text-xs text-slate-body mt-1 leading-snug">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-x max-w-3xl text-center">
        <Quote className="mx-auto text-blue" size={32} />
        <blockquote className="mt-6 font-display text-2xl md:text-3xl font-medium leading-snug">
          "Dinexity replaced three vendors for us. The site is faster, the ads
          actually work, and their AI agent handles most of our support queue.
          They act like part of the team."
        </blockquote>
        <div className="mt-8 text-sm text-white/70">
          <div className="font-medium text-white">Priya Anand</div>
          <div>Founder, Northline Supply</div>
        </div>
      </div>
    </section>
  );
}

const team = [
  { name: "Marcus Vale", role: "Founder, Strategy" },
  { name: "Ana Okafor", role: "Design Lead" },
  { name: "Ravi Shen", role: "Engineering Lead" },
  { name: "Elena Cruz", role: "Growth & Social" },
];

function Team() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
              A small team of senior operators.
            </h2>
            <p className="mt-6 text-slate-body text-lg leading-relaxed">
              Dinexity is four people who have shipped for startups, retailers,
              and fintechs. No account managers between you and the work.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-mist p-5 aspect-[3/4] flex flex-col justify-end"
              >
                <div className="font-display text-base font-semibold text-navy">
                  {t.name}
                </div>
                <div className="text-xs text-slate-body mt-1">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad bg-mist">
      <div className="container-x">
        <div className="rounded-3xl bg-navy text-white p-8 md:p-14 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-40 h-[30rem] w-[30rem] opacity-40"
          >
            <div className="absolute inset-0 rounded-full border border-blue/30" />
            <div className="absolute inset-10 rounded-full border border-teal/25" />
            <div className="absolute inset-20 rounded-full border border-teal/20" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            <div>
              <Eyebrow>Start a project</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
                Tell us what you want to ship.
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                Send a short brief or book a 20-minute intro call. We reply
                within one business day, always with a real person.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/80">
                <div>hello@dinexity.com</div>
                <div>+1 (415) 555-0140</div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-2 rounded-full border border-white/25 px-5 py-2.5 hover:bg-white/5 transition"
                >
                  Book a call <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-4 rounded-2xl bg-white/[0.04] p-6 border border-white/10"
            >
              <Field label="Name" id="name" />
              <Field label="Email" id="email" type="email" />
              <Field label="Company" id="company" />
              <div>
                <label
                  htmlFor="msg"
                  className="text-xs uppercase tracking-widest text-white/60"
                >
                  Project brief
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  className="mt-2 w-full rounded-xl bg-navy/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue"
                  placeholder="What are you building, and by when?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-medium text-white hover:brightness-110 transition"
              >
                Send brief <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-widest text-white/60"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="mt-2 w-full rounded-xl bg-navy/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue"
      />
    </div>
  );
}
