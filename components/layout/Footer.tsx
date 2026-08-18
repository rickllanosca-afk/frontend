"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { navLinks, services } from "@/data/site";
import { getApiUrl } from "@/lib/api";

export function Footer() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitNewsletter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setMessage("Enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const body = new FormData(form);
      body.set("formName", "Newsletter signup form");
      const response = await fetch(getApiUrl("/api/forms"), { method: "POST", body });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Submission failed");
      }
      setMessage("Subscribed.");
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className="border-t border-electric/10 bg-white text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/avorynai-logo.png" width={120} height={100} alt="avorynai logo" className="h-10 w-auto object-contain" />
            <span className="font-display text-xl font-bold">avorynai</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">avorynai connects people, data, and intelligent software into clear operating systems for modern teams.</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => <a key={i} className="focus-ring rounded-md bg-mist p-2 text-electric hover:bg-electric hover:text-white" href="#" aria-label="Social link"><Icon size={18} /></a>)}
          </div>
        </div>
        <div><h2 className="font-bold">Navigation</h2><div className="mt-4 grid gap-2">{navLinks.map((l) => <Link className="text-sm text-muted hover:text-electric" href={l.href} key={l.href}>{l.label}</Link>)}</div></div>
        <div><h2 className="font-bold">Services</h2><div className="mt-4 grid gap-2">{services.slice(0, 6).map((s) => <Link className="text-sm text-muted hover:text-electric" href="/services" key={s.title}>{s.title}</Link>)}</div></div>
        <div>
          <h2 className="font-bold">Newsletter</h2>
          <form onSubmit={submitNewsletter} className="mt-4 flex gap-2" noValidate><input required name="email" aria-label="Email" type="email" placeholder="you@company.com" className="focus-ring min-w-0 flex-1 rounded-md border border-electric/15 bg-mist px-3 py-3 text-sm text-ink placeholder:text-muted" /><button disabled={submitting} className="focus-ring rounded-md bg-electric p-3 text-white transition hover:bg-electricHover disabled:cursor-not-allowed disabled:opacity-70" aria-label="Subscribe"><Send size={18} /></button></form>
          {message ? <p role="status" className="mt-3 text-sm text-muted">{message}</p> : null}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-use">Terms of Use</Link><Link href="/cookie-policy">Cookie Policy</Link></div>
        </div>
      </div>
      <div className="border-t border-electric/10 px-4 py-5 text-center text-sm text-muted">Copyright 2026 avorynai. All rights reserved.</div>
    </footer>
  );
}
