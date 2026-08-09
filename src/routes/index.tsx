import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowRight,
  MonitorSmartphone,
  Smartphone,
  Rocket,
  RefreshCw,
  ShoppingCart,
  Search,
  Zap,
  Target,
  Layers,
  Handshake,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dinexity — Professional Website Design Agency" },
      {
        name: "description",
        content:
          "Dinexity builds modern, professional business websites that attract customers: responsive design, landing pages, redesigns, e-commerce and SEO-ready builds.",
      },
      { property: "og:title", content: "Dinexity — Professional Website Design Agency" },
      {
        property: "og:description",
        content:
          "Modern, mobile-friendly, SEO-ready websites for businesses. Get a free demo of your new site.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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

function PrimaryCta({
  children = "Get a Free Demo",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-medium text-white hover:brightness-110 transition ${className}`}
    >
      {children} <ArrowRight size={16} />
    </a>
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
          <Eyebrow>Website Design Agency</Eyebrow>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            We build professional websites that bring you customers.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
            Dinexity designs and builds modern business websites — fast,
            mobile-friendly, and SEO-ready. See a free demo of your new site
            before you commit to anything.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCta>Get a Free Demo</PrimaryCta>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/90 hover:bg-white/5 transition"
            >
              Request a Website
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["120+", "Websites launched"],
              ["4.9/5", "Client rating"],
              ["3 wks", "Typical launch time"],
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
    title: "Professional Business Websites",
    desc: "A site that looks credible on the first click and turns visitors into enquiries.",
    bullets: ["Clear structure and copy", "Fast, secure hosting setup", "Easy to update yourself"],
  },
  {
    icon: Smartphone,
    title: "Responsive, Mobile-Friendly Design",
    desc: "Most of your customers arrive on a phone. Your site is built for them first.",
    bullets: ["Phone, tablet, desktop", "Tap-friendly navigation", "Fast on mobile networks"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Single-purpose pages built for ads and campaigns, focused on one action.",
    bullets: ["Offer-led layout", "Lead forms and tracking", "Built to test and iterate"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Keep what works, fix what doesn't. A modern rebuild without losing your traffic.",
    bullets: ["Design refresh", "Speed and structure fixes", "Safe migration and redirects"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    desc: "Online stores that are simple to run and easy for customers to buy from.",
    bullets: ["Product and category pages", "Checkout and payments", "Shipping and stock setup"],
  },
  {
    icon: Search,
    title: "SEO-Ready Websites",
    desc: "Built clean from day one so search engines can find and rank your pages.",
    bullets: ["Technical SEO basics", "Page titles and metadata", "Speed and Core Web Vitals"],
  },
];

function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
            Websites, done properly.
          </h2>
          <p className="mt-5 text-slate-body text-lg leading-relaxed">
            We do one thing: build websites businesses can grow on. Every build
            is responsive, fast, and ready to be found on Google.
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
                <p className="mt-3 text-slate-body leading-relaxed">{s.desc}</p>
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
                  Get a free demo <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <PrimaryCta>Request a Website</PrimaryCta>
          <p className="text-sm text-slate-body">
            Not sure which fits? We'll tell you straight in one call.
          </p>
        </div>
      </div>
    </section>
  );
}

const whyPoints = [
  {
    icon: Zap,
    title: "Launched in weeks",
    desc: "Most business sites go live within three weeks of kickoff.",
  },
  {
    icon: Target,
    title: "Built to convert",
    desc: "Clear calls-to-action and copy aimed at enquiries, not decoration.",
  },
  {
    icon: Layers,
    title: "Fast and technical",
    desc: "Senior developers on every build. Clean code, high Lighthouse scores.",
  },
  {
    icon: Handshake,
    title: "Support after launch",
    desc: "We stay on for updates, fixes, and improvements as you grow.",
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
              A website agency that ships on time.
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-md">
              We take fewer projects so each site gets senior attention. You get
              a site that loads fast, reads clearly, and earns trust.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <Stat n="98" l="average Lighthouse performance" />
              <Stat n="100%" l="responsive on every device" />
              <Stat n="3 wks" l="average time to launch" />
              <Stat n="< 24h" l="response time, always" />
            </div>

            <div className="mt-10">
              <PrimaryCta>Get a Free Demo</PrimaryCta>
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
  { title: "Free Demo", desc: "Tell us about your business. We show you a demo of your new site — no cost." },
  { title: "Plan & Design", desc: "We agree pages, copy direction, and design. You approve before we build." },
  { title: "Build & Launch", desc: "We build, test on every device, connect your domain, and go live." },
  { title: "Improve & Support", desc: "Updates, speed checks, and SEO fixes so the site keeps working for you." },
];

function Process() {
  return (
    <section id="process" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
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

        <div className="mt-12">
          <PrimaryCta>Request a Website</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    tag: "E-commerce website",
    title: "Northline Supply",
    desc: "Rebuilt the online store with faster product pages and a simpler checkout.",
    metrics: [
      ["+64%", "online revenue in 90 days"],
      ["-38%", "page load time"],
      ["+41%", "mobile conversions"],
    ],
  },
  {
    tag: "Website redesign",
    title: "Fielder Services",
    desc: "Replaced a dated site with a clean, mobile-first build and clear enquiry paths.",
    metrics: [
      ["2.3×", "enquiries per month"],
      ["96", "Lighthouse performance"],
      ["+58%", "organic traffic"],
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
              Sites that earned their keep.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue"
          >
            Get a free demo <ArrowRight size={14} />
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
          "Dinexity showed us a demo before we paid anything. Three weeks later
          we had a site that loads instantly, works on every phone, and finally
          brings in enquiries."
        </blockquote>
        <div className="mt-8 text-sm text-white/70">
          <div className="font-medium text-white">Priya Anand</div>
          <div>Founder, Northline Supply</div>
        </div>
        <div className="mt-10">
          <PrimaryCta>Get a Free Demo</PrimaryCta>
        </div>
      </div>
    </section>
  );
}

const team = [
  { name: "Marcus Vale", role: "Founder, Strategy" },
  { name: "Ana Okafor", role: "Web Design Lead" },
  { name: "Ravi Shen", role: "Development Lead" },
  { name: "Elena Cruz", role: "SEO & Content" },
];

function Team() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-navy">
              A small team of website specialists.
            </h2>
            <p className="mt-6 text-slate-body text-lg leading-relaxed">
              Dinexity is four people who design, build, and launch websites for
              small businesses, retailers, and service companies. No account
              managers between you and the work.
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
              <Eyebrow>Request a website</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight">
                Get a free demo of your new site.
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                Send a few details and we'll show you a demo built for your
                business — free, no obligation. We reply within one business
                day, always with a real person.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/80">
                <div>hello@dinexity.com</div>
                <div>+1 (415) 555-0140</div>
                <a
                  href="#contact"
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
              <Field label="Business" id="company" />
              <Field label="Current website (optional)" id="site" />
              <div>
                <label
                  htmlFor="msg"
                  className="text-xs uppercase tracking-widest text-white/60"
                >
                  What do you need?
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  className="mt-2 w-full rounded-xl bg-navy/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-blue"
                  placeholder="New website, redesign, landing page, online store..."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-medium text-white hover:brightness-110 transition"
              >
                Get a Free Demo <ArrowRight size={16} />
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
