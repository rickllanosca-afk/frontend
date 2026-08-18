import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TechVisual } from "@/components/sections/TechVisual";
import { advantages, industries, processSteps, projects, services, stats } from "@/data/site";
import { meetingUrl } from "@/lib/utils";

export function HomeSections() {
  return (
    <>
      <section className="dark-mesh pt-32 text-ink md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 md:grid-cols-2 md:px-6">
          <Reveal><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-electric">Adaptive AI systems for teams with real work to move.</p><h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">Shape Smarter Operations With Ntonyxai.</h1><p className="mt-6 text-lg leading-8 text-muted">Ntonyxai builds practical AI platforms that coordinate work, surface decisions, support customers, and keep critical processes moving.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Start Your Project</Button><Button href="/solutions" variant="secondary">Explore Our Solutions</Button></div></Reveal>
          <Reveal delay={0.15}><TechVisual /></Reveal>
        </div>
      </section>
      <section className="bg-white py-10"><div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-6">{stats.map((s, i) => <Reveal key={s.label} delay={i * 0.05}><div className="rounded-lg border border-ink/10 p-6"><p className="font-display text-4xl font-bold text-electric">{s.value}</p><p className="mt-2 text-sm text-muted">{s.label}</p></div></Reveal>)}</div></section>
      <SectionWrap><SectionHeading eyebrow="Services" title="Systems that connect decisions to execution" /><Grid>{services.map((s, i) => <Reveal key={s.title} delay={i * 0.04}><Card><s.icon className="text-electric" /><h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{s.description}</p><Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-electric" href="/services">Learn more <ArrowRight size={15} /></Link></Card></Reveal>)}</Grid></SectionWrap>
      <SectionWrap dark><SectionHeading eyebrow="Process" title="How Ntonyxai builds clarity into work" text="We map the operating reality first, then ship systems that are easy to adopt, audit, and improve." /><div className="grid gap-4 md:grid-cols-3">{processSteps.map((s, i) => <Reveal key={s.title} delay={i * 0.04}><div className="rounded-lg border border-electric/10 bg-white/80 p-6 text-ink shadow-sm"><span className="text-sm font-bold text-electric">0{i + 1}</span><h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{s.description}</p></div></Reveal>)}</div></SectionWrap>
      <SectionWrap><div className="grid items-center gap-10 md:grid-cols-2"><Reveal><h2 className="font-display text-4xl font-bold md:text-5xl">Your workflows should feel connected, visible, and controlled.</h2><p className="mt-5 text-lg leading-8 text-muted">We design intelligence around the systems teams already depend on, then remove the handoffs, duplicate updates, and unclear next steps that slow work down.</p></Reveal><Grid>{advantages.map((a) => <Card key={a}><CheckCircle2 className="text-electric" /><h3 className="mt-4 font-bold">{a}</h3></Card>)}</Grid></div></SectionWrap>
      <SectionWrap><SectionHeading eyebrow="Industries" title="Practical intelligence for operating teams" /><Grid>{industries.map((x) => <Card key={x.title}><x.icon className="text-violet" /><h3 className="mt-4 font-bold">{x.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{x.text}</p></Card>)}</Grid></SectionWrap>
      <SectionWrap><SectionHeading eyebrow="Featured projects" title="Ntonyxai delivery examples" /><div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((p) => <Card key={p.title}><div className="mb-5 grid aspect-[4/3] place-items-center rounded-md bg-mist text-sm font-bold text-electric">{p.category}</div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{p.industry}</p><h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{p.description}</p><p className="mt-4 font-bold text-electric">{p.results}</p></Card>)}</div></SectionWrap>
      <section className="dark-mesh px-4 py-20 text-ink md:px-6"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><Reveal><h2 className="font-display text-4xl font-bold">Work on Systems That Matter</h2><p className="mt-4 text-muted">Join the team building intelligent workflows for support, operations, sales, reporting, and internal productivity.</p></Reveal><div className="flex flex-wrap items-center gap-3 md:justify-end"><Button href="/careers">View Open Roles</Button><Button href={meetingUrl} variant="secondary">Join Interview</Button></div></div></section>
      <section className="bg-white px-4 py-20 text-center md:px-6"><Reveal><h2 className="font-display text-4xl font-bold md:text-5xl">Ready to Connect the Work?</h2><p className="mx-auto mt-4 max-w-2xl text-muted">Share the workflow, backlog, or decision process you want to improve. Ntonyxai will help turn it into a working system.</p><div className="mt-8 flex justify-center gap-3"><Button href="/contact">Start a Project</Button><Button href="/contact" variant="ghost">Contact Ntonyxai</Button></div></Reveal></section>
    </>
  );
}

function SectionWrap({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <section className={`${dark ? "dark-mesh text-ink" : "mesh-bg"} px-4 py-20 md:px-6`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{children}</div>;
}
