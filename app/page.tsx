"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BOOKING_LINK = "https://calendar.app.google/oBGMHyXwKRDAF97b7";
const EMAIL_LINK = "mailto:jawadahmed7788666@gmail.com";
const LINKEDIN_LINK = "https://www.linkedin.com/in/jawad-ahmed-560716250/";
const WHATSAPP_LINK = "https://wa.me/923415395245";

type PricingPlan = {
  tier: string;
  badge: string;
  title: string;
  price: string;
  sub: string;
  ideal: string;
  desc: string;
  features: string[];
  addons?: string[];
  cta: string;
  featured: boolean;
  category: "setup" | "management";
  disclaimer?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  project: string;
};

const services = [
  {
    num: "01",
    icon: "⚡",
    title: "Server-Side Tracking",
    desc: "Deploy GTM server-side containers via Stape.io or GCP to bypass ad-blockers, recover lost signals, and send clean conversion data that browser tracking silently drops every day.",
    highlight: "Recover 15–40% of lost conversions",
    tag: "Core Infrastructure",
  },
  {
    num: "02",
    icon: "📡",
    title: "Meta Conversion API",
    desc: "Send hashed, deduped backend events directly to Meta via CAPI. Improve Event Match Quality scores, strengthen campaign learning, and lower CPAs with cleaner attribution.",
    highlight: "EMQ scores of 8+ consistently achieved",
    tag: "Meta Ads",
  },
  {
    num: "03",
    icon: "🔗",
    title: "Offline Conversion Tracking",
    desc: "Close the loop between online ads and real-world outcomes — phone calls, CRM deals closed, in-store visits — imported back into Google Ads and Meta to reveal true campaign ROI.",
    highlight: "Connect ads to actual revenue",
    tag: "Advanced Attribution",
  },
  {
    num: "04",
    icon: "📊",
    title: "GA4 Full-Funnel Analytics",
    desc: "Build or rebuild your GA4 property with custom events, funnel tracking, eCommerce measurement, and audiences you can actually use. Data you can act on — not just admire.",
    highlight: "Actionable data, not noise",
    tag: "Analytics",
  },
  {
    num: "05",
    icon: "🎯",
    title: "Google Ads Conversions",
    desc: "Primary and secondary conversion setup with Enhanced Conversions and consent-aware signals — giving Smart Bidding the accurate fuel it needs to spend your budget profitably.",
    highlight: "Better Smart Bidding signals",
    tag: "Google Ads",
  },
  {
    num: "06",
    icon: "🔒",
    title: "Consent Mode v2 & GDPR",
    desc: "Consent Mode v2 (Basic or Advanced) with Cookiebot or CookieYes. Stay fully compliant with GDPR and ePrivacy regulations while preserving maximum measurement quality.",
    highlight: "Compliant without sacrificing data",
    tag: "Compliance",
  },
  {
    num: "07",
    icon: "📅",
    title: "Lead & Booking Tracking",
    desc: "Every form submission, Google Calendar booking, phone click, and micro-conversion tracked correctly into GA4, Meta, and Google Ads — without duplication or gaps.",
    highlight: "Zero leads unaccounted for",
    tag: "Lead Generation",
  },
  {
    num: "08",
    icon: "🛍️",
    title: "eCommerce Tracking",
    desc: "Full purchase funnel for Shopify, WooCommerce, and custom stores — add-to-cart, checkout steps, purchase events, refunds, and product-level performance all measured precisely.",
    highlight: "Shopify & WooCommerce ready",
    tag: "eCommerce",
  },
  {
    num: "09",
    icon: "🔍",
    title: "Microsoft Clarity & Heatmaps",
    desc: "Clarity integrated alongside GA4 for session recordings, heatmaps, rage clicks, and dead-click analysis — so you understand exactly why visitors aren't converting.",
    highlight: "See where users drop off",
    tag: "UX Intelligence",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Our campaigns recovered around 15% more conversions after the tracking gaps were fixed. The whole process was professional, clear, and easy to understand. I'd recommend him to marketers who need reliable help with server-side tracking and conversion tracking.",
    name: "Jeff Allen",
    role: "Director of Growth Marketing",
    project: "Server Side Setup",
  },
  {
    quote:
      "Jawad is a very humble and reliable person to work with. I have worked with him multiple times on different projects, and he delivered exactly what he promised. In some cases, he even went beyond the original project scope. What I appreciated most was that he didn't just close the project after delivery, he also provided 14 days of free post-project support to make sure everything was working properly.",
    name: "Laura Davis",
    role: "CMO",
    project: "Tracking Audit + Server-Side Setup for Google Ads, Meta Ads & Microsoft Clarity",
  },
  {
    quote:
      "Our development team was struggling to set up tracking properly across the site and multiple lead funnels. Jawad helped us fix the issue within 3 days, which was really quick. He clearly understands tracking and made the setup much easier for us.",
    name: "Phil Barrett",
    role: "Marketing Manager",
    project: "Full-Funnel Conversion Tracking",
  },
  {
    quote:
      "Jawad helped us identify and fix key tracking issues in our offline conversion setup, including problems with GCLID storage and lead attribution. His support improved the reliability of our tracking and gave us more confidence in our marketing data. Professional, clear, and easy to work with.",
    name: "George Evans",
    role: "Sr. Digital Marketing Manager",
    project: "Offline Conversion Tracking & Lead Attribution Fix",
  },
];

const setupPlans: PricingPlan[] = [
  {
    tier: "01",
    badge: "Starter",
    title: "Essential Tracking",
    price: "$297",
    sub: "One-time · 2–3 business days",
    ideal: "Small businesses & solo marketers",
    desc: "Core tracking fundamentals set up cleanly and correctly — no bloat, no guesswork.",
    features: [
      "GA4 property setup & event configuration",
      "Google Ads conversion tracking",
      "GTM container setup & tag management",
      "Lead form & thank-you page tracking",
      "Basic Consent Mode v2",
      "DebugView QA & validation",
      "7 days post-launch support",
    ],
    cta: "Get Started",
    featured: false,
    category: "setup",
  },
  {
    tier: "02",
    badge: "Professional",
    title: "Lead Generation Tracking",
    price: "$450",
    sub: "One-time · 4–5 business days",
    ideal: "Service businesses & B2B companies",
    desc: "Track every lead touchpoint — forms, calls, bookings — with attribution clarity across your funnel.",
    features: [
      "Complete lead tracking infrastructure",
      "GA4 & Google Ads integration",
      "Form submission & booking tracking",
      "Phone call tracking setup",
      "Multi-step form conversion tracking",
      "Thank-you page & confirmation tracking",
      "Basic Consent Mode v2",
      "Full QA & validation",
      "10 days post-launch support",
    ],
    addons: [
      "+ $300 Server-side tracking",
      "+ $300 Meta Pixel & CAPI",
      "+ $300 Consent management platform",
    ],
    cta: "Book Free Audit",
    featured: false,
    category: "setup",
  },
  {
    tier: "03",
    badge: "Advanced",
    title: "eCommerce Tracking",
    price: "$750",
    sub: "One-time · 6–8 business days",
    ideal: "Online stores & product-based brands",
    desc: "Full purchase funnel measurement — product views to checkout to revenue — with precise attribution.",
    features: [
      "Complete eCommerce event tracking",
      "GA4 Enhanced Ecommerce setup",
      "Google Ads & Meta Pixel integration",
      "Product view, add-to-cart, checkout tracking",
      "Purchase & revenue attribution",
      "Cart abandonment tracking",
      "Dynamic remarketing setup",
      "Full QA & validation",
      "14 days post-launch support",
    ],
    addons: [
      "+ $400 Server-side tracking",
      "+ $400 Meta CAPI with deduplication",
      "+ $300 Additional ad platform",
    ],
    cta: "Book Free Audit",
    featured: true,
    category: "setup",
  },
  {
    tier: "04",
    badge: "Premium Add-on",
    title: "Offline Conversion Tracking",
    price: "Free*",
    sub: "Included with any setup plan",
    ideal: "Businesses with offline sales cycles",
    desc: "Connect backend conversions — CRM deals, calls answered, in-store sales — back to your ad campaigns.",
    features: [
      "Google Ads offline conversion import",
      "CRM-to-Google Ads pipeline setup",
      "GCLID capture & storage architecture",
      "Conversion value & timing mapping",
      "Automated via Zapier or GTM",
      "No paid CRM required",
      "Call tracking integration (CallRail, etc.)",
      "Complete documentation",
      "Ongoing import validation",
    ],
    cta: "Schedule a Call",
    featured: false,
    category: "setup",
    disclaimer:
      "*Setup included free with Professional or Advanced plans. Standalone setup available at $350.",
  },
];

const managementPlans: PricingPlan[] = [
  {
    tier: "01",
    badge: "Basic",
    title: "Tracking Maintenance",
    price: "$150",
    sub: "Per month, per website",
    ideal: "Brands spending $3k–8k/mo on ads",
    desc: "Reliable monthly monitoring to keep your tracking healthy and your data flowing correctly.",
    features: [
      "Up to 2 tracking fixes per month",
      "Monthly tracking health audit",
      "Always up-to-date with platform changes",
      "24/7 monitoring for data loss prevention",
      "Standard support (48hr response)",
      "Fixes delivered within 48 hours",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: false,
    category: "management",
  },
  {
    tier: "02",
    badge: "Premium",
    title: "Growth Support",
    price: "$300",
    sub: "Per month, per website",
    ideal: "Brands spending $8k–25k/mo on ads",
    desc: "Priority support with faster turnaround for brands scaling their paid acquisition.",
    features: [
      "Up to 5 tracking fixes per month",
      "Bi-weekly tracking health audits",
      "New page & funnel additions",
      "Platform & API update management",
      "Priority support (24hr response)",
      "Fixes delivered within 24–48 hours",
      "Detailed monthly insights report",
      "Quarterly strategy consultation",
    ],
    cta: "Book Free Audit",
    featured: true,
    category: "management",
  },
  {
    tier: "03",
    badge: "Pro",
    title: "Enterprise Support",
    price: "$450",
    sub: "Per month, per website",
    ideal: "Brands spending $25k+/mo on ads",
    desc: "White-glove tracking support for high-spending brands with complex attribution needs.",
    features: [
      "Unlimited tracking requests & fixes",
      "Always updated with platform changes",
      "New funnel & campaign tracking setup",
      "24/7 monitoring & instant alerts",
      "Priority support (within 24 hours)",
      "Dedicated Slack channel access",
      "Weekly performance insights",
      "On-demand strategic consultation",
    ],
    cta: "Schedule a Call",
    featured: false,
    category: "management",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery Audit",
    desc: "I review your GA4, GTM, Meta Pixel, and Google Ads accounts to map every gap — missing events, duplicate fires, misconfigured conversions, consent issues, and offline tracking blind spots.",
  },
  {
    num: "02",
    title: "Tracking Plan",
    desc: "You receive a detailed specification: every event, parameter, platform, and firing condition documented and agreed before a single tag is touched. No surprises.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Full build in GTM / sGTM — server-side containers, API integrations, offline conversion imports, Consent Mode. Clean, annotated, handed over with full documentation.",
  },
  {
    num: "04",
    title: "QA & Handover",
    desc: "Every conversion tested via DebugView, Meta Test Events, and Tag Assistant. Recorded walkthrough. 14 days of included post-launch support.",
  },
];

const faqs = [
  {
    q: "What does server-side tracking actually mean?",
    a: "Standard browser tracking fires from the visitor's device — blocked by ad-blockers, iOS restrictions, and browser privacy settings. Server-side tracking fires from your server instead, so conversion data reaches Meta and Google reliably regardless of what's happening in the visitor's browser.",
  },
  {
    q: "My tracking looks fine. Do I actually need this?",
    a: "Probably yes. Most businesses running paid ads are missing 20–40% of conversions due to iOS 14+ changes, ad-blockers, and misconfigured tags — even when in-platform numbers look plausible. A free audit shows you exactly what's being lost before you commit to anything.",
  },
  {
    q: "What is offline conversion tracking and do I need it?",
    a: "Offline conversion tracking connects what happens after someone fills out your form — calls answered, CRM deals closed, in-person sales — back to the original ad click. If your sales cycle happens offline or in a CRM, this is essential for knowing which campaigns drive actual revenue, not just form fills.",
  },
  {
    q: "Which pricing plan is right for me?",
    a: "Essential Tracking is ideal if you need GA4 and Google Ads set up cleanly. Lead Generation works for service businesses tracking forms and calls. eCommerce is for online stores. Monthly management suits brands that need ongoing support as they scale. Start with a free audit and I'll recommend the best fit.",
  },
  {
    q: "How long does a full setup take?",
    a: "Essential setups complete in 2–3 business days. Lead Generation and eCommerce take 4–8 days. Complex server-side or multi-platform projects may take up to 10 days. You'll receive a clear timeline before work begins.",
  },
  {
    q: "What do you need from me to get started?",
    a: "View-only access to your GTM container, GA4 property, Google Ads account, Meta Business Manager, and your CMS. No changes are made until you've reviewed and approved the full tracking plan.",
  },
  {
    q: "What platforms do you support?",
    a: "Meta Ads, Google Ads, GA4, TikTok Ads, Snapchat, Microsoft Advertising, Shopify, WooCommerce, Google Calendar booking links, Typeform, HubSpot forms, and more. If it has an API or GTM integration, it can be tracked.",
  },
  {
    q: "Is the free audit genuinely free?",
    a: "Yes — no strings, no obligation. I'll review your setup, show you what's broken, and explain what it would take to fix it. If you don't want to proceed after the audit, you keep the findings and we part ways. That's it.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState<"setup" | "management">("setup");

  const currentPlans = pricingTab === "setup" ? setupPlans : managementPlans;

  return (
    <main
      style={{
        fontFamily: "'Cabinet Grotesk', 'DM Sans', sans-serif",
        background: "#0A0A0A",
        color: "#F0EDE8",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --cream: #F0EDE8;
          --cream-dim: #B8B4AE;
          --surface: #111111;
          --surface-2: #161616;
          --surface-3: #1C1C1C;
          --border: rgba(240,237,232,0.08);
          --border-strong: rgba(240,237,232,0.14);
        }

        * { scroll-behavior: smooth; box-sizing: border-box; }

        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
        .font-mono { font-family: 'DM Mono', monospace; }

        body { cursor: default; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 99px; }

        .grain::after {
          content: '';
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9998;
          opacity: 0.6;
          animation: grain 8s steps(10) infinite;
        }
        @keyframes grain {
          0%,100%{transform:translate(0,0)}
          10%{transform:translate(-2%,-3%)}
          20%{transform:translate(3%,2%)}
          30%{transform:translate(-1%,4%)}
          40%{transform:translate(2%,-1%)}
          50%{transform:translate(-3%,3%)}
          60%{transform:translate(1%,-2%)}
          70%{transform:translate(-2%,1%)}
          80%{transform:translate(3%,-3%)}
          90%{transform:translate(-1%,2%)}
        }

        .nav-glass {
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
        }

        .gold-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .stat-big {
          font-family: 'DM Mono', monospace;
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 500;
          color: var(--gold);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .svc-card {
          border: 1px solid var(--border);
          background: var(--surface);
          transition: border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .svc-card:hover {
          border-color: rgba(201,168,76,0.35);
          background: var(--surface-2);
          transform: translateY(-3px);
        }
        .svc-card:hover::before { opacity: 1; }

        .price-card {
          border: 1px solid var(--border);
          background: var(--surface);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .price-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .price-card > * {
          position: relative;
          z-index: 1;
        }
        .price-card:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .price-card:hover::before { opacity: 1; }
        .price-card.featured {
          background: linear-gradient(160deg, #1A1500 0%, #0F0D00 100%);
          border-color: rgba(201,168,76,0.4);
          box-shadow: 0 12px 40px rgba(201,168,76,0.15);
        }

        .tag-pill {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid var(--border-strong);
          color: var(--cream-dim);
          background: transparent;
          display: inline-block;
        }

        .result-tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--gold);
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          padding: 4px 12px;
          border-radius: 99px;
          display: inline-block;
          margin-top: 16px;
        }

        .faq-row {
          border-bottom: 1px solid var(--border);
          transition: background 0.2s;
        }
        .faq-row:last-child { border-bottom: none; }
        .faq-row:hover { background: rgba(255,255,255,0.02); }

        .btn-gold {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: #0A0A0A;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          box-shadow: 0 0 0 0 rgba(201,168,76,0.4);
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.25);
        }

        .btn-outline {
          border: 1px solid var(--border-strong);
          color: var(--cream);
          background: transparent;
          transition: all 0.25s ease;
        }
        .btn-outline:hover {
          border-color: rgba(201,168,76,0.5);
          background: rgba(201,168,76,0.05);
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .num-accent {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--gold);
          letter-spacing: 0.1em;
        }

        .mob-menu {
          background: rgba(10,10,10,0.98);
          backdrop-filter: blur(24px);
          border: 1px solid var(--border);
        }

        .hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(3rem, 7vw, 6.5rem);
          font-weight: 900;
          line-height: 1.03;
          letter-spacing: -0.02em;
          color: var(--cream);
        }

        .hero-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
          top: -100px;
          right: -100px;
          filter: blur(40px);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          gap: 0;
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        .marquee-inner:hover { animation-play-state: paused; }

        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--gold);
          font-size: 10px;
          margin-top: 2px;
        }

        .audit-card {
          background: var(--surface-2);
          border: 1px solid var(--border-strong);
          position: relative;
          overflow: hidden;
        }
        .audit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .contact-section {
          background: linear-gradient(160deg, #0D0B00 0%, #0A0A0A 100%);
          border-top: 1px solid rgba(201,168,76,0.15);
        }

        .wa-float {
          background: var(--surface-2);
          border: 1px solid var(--border-strong);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .wa-float:hover {
          transform: translateY(-3px);
          border-color: rgba(201,168,76,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .logos-strip img { opacity: 0.88; filter: none; transition: opacity 0.3s ease, transform 0.3s ease; }
        .logos-strip img:hover { opacity: 1; filter: none; transform: translateY(-2px); }

        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: var(--cream-dim);
          letter-spacing: 0.02em;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link:hover { color: var(--cream); }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .pricing-tab {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 32px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          border: 1px solid transparent;
          letter-spacing: 0.02em;
        }
        .pricing-tab.active {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          color: #0A0A0A;
          border-color: var(--gold);
        }
        .pricing-tab:not(.active) {
          color: var(--cream-dim);
          background: transparent;
          border-color: var(--border-strong);
        }
        .pricing-tab:not(.active):hover {
          background: rgba(201,168,76,0.06);
          color: var(--cream);
          border-color: rgba(201,168,76,0.25);
        }

        .addon-item {
          font-size: 12px;
          color: var(--cream-dim);
          padding: 6px 12px;
          background: rgba(201,168,76,0.04);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 8px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.01em;
        }

        @keyframes checkmark-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }

        .check-icon-animated {
          animation: checkmark-pop 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        /* Testimonial card styles */
        .testimonial-card {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 1.5rem;
          transition: border-color 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .testimonial-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.45);
        }
        .testimonial-card:hover::before { opacity: 1; }

        .testimonial-project-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--gold);
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.18);
          padding: 4px 10px;
          border-radius: 99px;
          display: inline-block;
        }

        .quote-mark {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4rem;
          line-height: 1;
          color: var(--gold);
          opacity: 0.55;
          margin-bottom: -0.5rem;
          display: block;
          user-select: none;
        }

        @media (max-width: 768px) {
          .hero-h1 { font-size: clamp(2.8rem, 16vw, 4.5rem); }
          .marquee-inner { animation-duration: 30s; }
          .pricing-tab { padding: 10px 20px; font-size: 13px; }
        }
      `}</style>

      <div className="grain" />

      {/* ── Navigation ── */}
      <nav className="nav-glass sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "var(--cream)",
              letterSpacing: "-0.01em",
            }}
          >
            Jawad Ahmed
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["Services", "Testimonials", "Pricing", "Process", "About", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item === "Testimonials" ? "testimonials" : item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden rounded-xl px-5 py-2.5 text-sm md:inline-block"
          >
            Free Audit →
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-6 bg-[var(--cream)] transition-all duration-300"
                style={{
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(3px,3px)"
                      : i === 2
                      ? "rotate(-45deg) translate(3px,-3px)"
                      : "none"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mob-menu mx-4 mb-3 overflow-hidden rounded-2xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-1 p-4">
                {["Services", "Testimonials", "Pricing", "Process", "About", "FAQ"].map((item) => (
                  <a
                    key={item}
                    href={`#${item === "Testimonials" ? "testimonials" : item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-white/5"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold mt-2 rounded-xl px-4 py-3 text-center text-sm"
                >
                  Book Free Audit →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center">
        <div className="hero-orb" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(240,237,232,0.025) 0px, rgba(240,237,232,0.025) 1px, transparent 1px, transparent 120px)",
            backgroundSize: "120px 100%",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="gold-line" />
                <span className="section-label">Technical Marketing Specialist</span>
              </motion.div>

              <motion.h1
                className="hero-h1"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                Your ad data<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>is lying</em>
                <br />
                to you.
              </motion.h1>

              <motion.p
                className="mt-8 max-w-lg text-lg leading-8"
                style={{ color: "var(--cream-dim)" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
                }}
              >
                Server-side tracking, Meta CAPI, offline conversions, GA4, and Google Ads setups
                that give your campaigns the accurate data they need to scale — not the misleading
                numbers they're getting now.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
                }}
              >
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-2xl px-8 py-4 text-base"
                >
                  Book Free Audit
                </a>
                <a href="#services" className="btn-outline rounded-2xl px-8 py-4 text-base">
                  View Services
                </a>
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap items-center gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { duration: 0.6, delay: 0.35 } },
                }}
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <img
                      key={n}
                      src={`/avatar${n}.png`}
                      alt={`Client ${n}`}
                      className="h-10 w-10 rounded-full object-cover"
                      style={{ border: "2px solid #0A0A0A" }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--cream)" }}>
                    100+ tracking setups delivered
                  </div>
                  <div className="mt-0.5 text-xs" style={{ color: "var(--cream-dim)" }}>
                    Trusted by marketers & agencies worldwide
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 360,
                  paddingTop: 24,
                  paddingBottom: 24,
                }}
              >
                <div
                  style={{
                    borderRadius: "2rem",
                    overflow: "hidden",
                    border: "1px solid rgba(240,237,232,0.12)",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: 440,
                    background: "#161616",
                  }}
                >
                  <img
                    src="/jawad-profile.png"
                    alt="Jawad Ahmed"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      transform: "scale(1.12)",
                      transformOrigin: "center top",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "35%",
                      background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.7 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    background: "rgba(14,14,14,0.96)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: "1.1rem",
                    padding: "12px 16px",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Mono',monospace",
                      color: "#B8B4AE",
                      marginBottom: 4,
                    }}
                  >
                    Meta EMQ Score
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "1.7rem",
                      fontWeight: 500,
                      color: "#C9A84C",
                      lineHeight: 1,
                    }}
                  >
                    8.3
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#4ade80",
                      marginTop: 4,
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    ↑ from 5.2 baseline
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.7 }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 10,
                    background: "rgba(14,14,14,0.96)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: "1.1rem",
                    padding: "12px 16px",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Mono',monospace",
                      color: "#B8B4AE",
                      marginBottom: 4,
                    }}
                  >
                    Conversions Recovered
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "1.7rem",
                      fontWeight: 500,
                      color: "#C9A84C",
                      lineHeight: 1,
                    }}
                  >
                    +38%
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#4ade80",
                      marginTop: 4,
                      fontFamily: "'DM Mono',monospace",
                    }}
                  >
                    via server-side setup
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-inner logos-strip">
          {[
            ...[
              "gtm",
              "ga4",
              "meta",
              "google-ads",
              "stape",
              "gdpr",
              "calendly",
              "clarity",
              "cookiebot",
              "wordpress",
              "shopify",
            ],
            ...[
              "gtm",
              "ga4",
              "meta",
              "google-ads",
              "stape",
              "gdpr",
              "calendly",
              "clarity",
              "cookiebot",
              "wordpress",
              "shopify",
            ],
          ].map((logo, i) => (
            <div key={`${logo}-${i}`} className="flex items-center px-10" style={{ gap: 40 }}>
              <img
                src={`/${logo}.png`}
                alt={logo}
                style={{ height: 28, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <motion.section
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div
            className="grid grid-cols-2 gap-px md:grid-cols-4"
            style={{ background: "var(--border)" }}
          >
            {[
              { num: "100+", label: "Tracking setups", sub: "delivered globally" },
              { num: "38%", label: "Avg. conversion lift", sub: "via server-side" },
              { num: "8.3", label: "Avg. Meta EMQ", sub: "post-implementation" },
              { num: "48h", label: "Starter turnaround", sub: "standard projects" },
            ].map((s, i) => (
              <motion.div
                key={i}
                style={{ background: "var(--surface)", padding: "2.5rem 2rem" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="stat-big">{s.num}</div>
                <div className="mt-3 text-sm font-medium" style={{ color: "var(--cream)" }}>
                  {s.label}
                </div>
                <div className="mt-1 text-xs" style={{ color: "var(--cream-dim)" }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Services ── */}
      <motion.section
        id="services"
        className="scroll-mt-24"
        style={{ background: "#0A0A0A" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <motion.div
            className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="section-label">Services</span>
              </div>
              <h2
                className="font-serif text-4xl font-bold leading-tight md:text-5xl"
                style={{ color: "var(--cream)" }}
              >
                Every layer of your<br />
                tracking stack,{" "}
                <em style={{ color: "var(--gold)" }}>built right.</em>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7" style={{ color: "var(--cream-dim)" }}>
              Scoped, documented, and QA'd before delivery. No guesswork, no black boxes.
            </p>
          </motion.div>

          <div
            className="grid gap-px md:grid-cols-2 xl:grid-cols-3"
            style={{ background: "var(--border)" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="svc-card p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="num-accent">{s.num}</span>
                  <span className="tag-pill">{s.tag}</span>
                </div>
                <div className="text-xl mb-2">{s.icon}</div>
                <h3
                  className="font-serif text-lg font-bold mb-3"
                  style={{ color: "var(--cream)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-6" style={{ color: "var(--cream-dim)" }}>
                  {s.desc}
                </p>
                <div className="result-tag">{s.highlight}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Testimonials ── */}
      <motion.section
        id="testimonials"
        className="scroll-mt-24"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          {/* Section heading */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Client Words</span>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "linear-gradient(270deg, var(--gold), transparent)",
                }}
              />
            </div>
            <h2
              className="font-serif text-4xl font-bold leading-tight md:text-5xl mb-5"
              style={{ color: "var(--cream)" }}
            >
              What clients say after their<br />
              <em style={{ color: "var(--gold)" }}>tracking becomes clear.</em>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7" style={{ color: "var(--cream-dim)" }}>
              Short feedback from people I've helped with tracking audits, GTM fixes, GA4 setup,
              Meta Pixel, CAPI, and conversion tracking.
            </p>
          </motion.div>

          {/* Testimonial cards — 2×2 grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                {/* Gold quotation mark */}
                <span className="quote-mark" aria-hidden="true">
                  &ldquo;
                </span>

                {/* Quote */}
                <p
                  className="flex-1 text-sm leading-7 mt-2 mb-8"
                  style={{ color: "var(--cream-dim)" }}
                >
                  {t.quote}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "var(--border)",
                    marginBottom: "1.25rem",
                  }}
                />

                {/* Name + role */}
                <div className="flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <div
                      className="font-serif text-base font-bold"
                      style={{ color: "var(--cream)" }}
                    >
                      {t.name}
                    </div>
                    <div className="mt-0.5 text-xs" style={{ color: "var(--cream-dim)" }}>
                      {t.role}
                    </div>
                  </div>

                  {/* Project tag */}
                  <span className="testimonial-project-tag">
                    Project: {t.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Free Audit ── */}
      <motion.section
        id="audit"
        className="scroll-mt-24"
        style={{
          background: "#0A0A0A",
          borderBottom: "1px solid var(--border)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-line" />
                <span className="section-label">Free Audit</span>
              </div>
              <h2
                className="font-serif text-4xl font-bold leading-tight md:text-5xl mb-6"
                style={{ color: "var(--cream)" }}
              >
                Find out exactly<br />
                <em style={{ color: "var(--gold)" }}>what you're missing.</em>
              </h2>
              <p
                className="text-base leading-8 mb-4"
                style={{ color: "var(--cream-dim)" }}
              >
                Before you invest in any setup, I'll review your current tracking and show you
                precisely what's broken, what's missing, and how much conversion data — including
                offline conversions — you're losing every day.
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--cream-dim)", opacity: 0.6 }}
              >
                No pitch. No commitment. Just data.
              </p>
            </motion.div>

            <motion.div
              className="audit-card rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3
                className="font-serif text-xl font-bold mb-6"
                style={{ color: "var(--cream)" }}
              >
                What's covered in your free audit
              </h3>
              <ul className="space-y-3 mb-7">
                {[
                  "GA4 property & event configuration audit",
                  "GTM container review (client & server-side)",
                  "Meta Pixel & CAPI health check",
                  "Google Ads conversion accuracy review",
                  "Offline conversion tracking gap analysis",
                  "Consent Mode v2 compliance check",
                  "Written priority action plan",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--cream-dim)" }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <div className="check-icon check-icon-animated">✓</div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div
                className="mb-6 rounded-2xl px-4 py-3.5 text-sm"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--gold)",
                }}
              >
                <strong>Limited slots</strong> — maximum 3 new audits accepted per week.
              </div>

              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold block w-full rounded-2xl py-4 text-center text-base"
              >
                Book Free Audit →
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Pricing ── */}
      <motion.section
        id="pricing"
        className="scroll-mt-24"
        style={{ background: "var(--surface)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Pricing</span>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2
                className="font-serif text-4xl font-bold leading-tight md:text-5xl"
                style={{ color: "var(--cream)" }}
              >
                Transparent pricing.<br />
                <em style={{ color: "var(--gold)" }}>No surprises.</em>
              </h2>
              <p
                className="max-w-sm text-base leading-7"
                style={{ color: "var(--cream-dim)" }}
              >
                Fixed prices. You'll know the exact number before work begins — no hourly billing,
                no hidden costs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-12 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              type="button"
              onClick={() => setPricingTab("setup")}
              className={`pricing-tab ${pricingTab === "setup" ? "active" : ""}`}
            >
              Tracking Setup
            </button>
            <button
              type="button"
              onClick={() => setPricingTab("management")}
              className={`pricing-tab ${pricingTab === "management" ? "active" : ""}`}
            >
              Monthly Management
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={pricingTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-5 ${
                pricingTab === "setup"
                  ? "md:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-3"
              }`}
            >
              {currentPlans.map((plan, i) => (
                <motion.div
                  key={`${pricingTab}-${i}`}
                  className={`price-card flex flex-col rounded-3xl p-8 ${
                    plan.featured ? "featured" : ""
                  }`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="num-accent">{plan.tier}</span>
                    {plan.featured && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        style={{
                          background: "rgba(201,168,76,0.15)",
                          color: "var(--gold)",
                          border: "1px solid rgba(201,168,76,0.3)",
                          fontSize: 11,
                          fontFamily: "'DM Mono',monospace",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "3px 10px",
                          borderRadius: 99,
                        }}
                      >
                        Best Value
                      </motion.span>
                    )}
                  </div>

                  <span className="tag-pill mb-4 self-start">{plan.badge}</span>
                  <h3
                    className="font-serif text-2xl font-bold mb-2"
                    style={{
                      color: plan.featured ? "var(--gold-light)" : "var(--cream)",
                    }}
                  >
                    {plan.title}
                  </h3>

                  <div
                    className="font-mono text-4xl font-medium mb-1"
                    style={{ color: plan.featured ? "var(--gold)" : "var(--cream)" }}
                  >
                    {plan.price}
                  </div>
                  <div className="text-xs mb-2 font-mono" style={{ color: "var(--cream-dim)" }}>
                    {plan.sub}
                  </div>

                  <div
                    className="text-xs mb-5 px-3 py-1.5 rounded-lg self-start"
                    style={{
                      background: "rgba(240,237,232,0.05)",
                      color: "var(--cream-dim)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    Ideal for: {plan.ideal}
                  </div>

                  <p
                    className="text-sm leading-6 mb-7"
                    style={{ color: "var(--cream-dim)" }}
                  >
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "var(--cream-dim)" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + j * 0.03, duration: 0.3 }}
                      >
                        <div className="check-icon">✓</div>
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  {plan.addons && (
                    <div className="mb-6 space-y-2">
                      <div
                        className="text-xs font-mono uppercase tracking-wider mb-3"
                        style={{ color: "var(--gold)", opacity: 0.8 }}
                      >
                        Optional Add-ons:
                      </div>
                      {plan.addons.map((addon, k) => (
                        <div key={k} className="addon-item">
                          {addon}
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.disclaimer && (
                    <div
                      className="mb-6 text-xs leading-5 px-3 py-2 rounded-lg"
                      style={{
                        background: "rgba(201,168,76,0.05)",
                        color: "var(--cream-dim)",
                        border: "1px solid rgba(201,168,76,0.15)",
                      }}
                    >
                      {plan.disclaimer}
                    </div>
                  )}

                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-2xl py-4 text-center text-sm font-bold transition ${
                      plan.featured ? "btn-gold" : "btn-outline"
                    }`}
                  >
                    {plan.cta} →
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="mt-8 text-center text-sm"
            style={{ color: "var(--cream-dim)", opacity: 0.6 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Enterprise, multi-domain, or custom eCommerce setups quoted individually.{" "}
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--gold)",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Start with a free audit.
            </a>
          </motion.p>
        </div>
      </motion.section>

      {/* ── Process ── */}
      <motion.section
        id="process"
        className="scroll-mt-24"
        style={{
          background: "#0A0A0A",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Process</span>
            </div>
            <h2
              className="font-serif text-4xl font-bold md:text-5xl"
              style={{ color: "var(--cream)" }}
            >
              From broken tracking<br />
              <em style={{ color: "var(--gold)" }}>to bulletproof data.</em>
            </h2>
          </motion.div>

          <div
            className="grid gap-px md:grid-cols-4"
            style={{ background: "var(--border)" }}
          >
            {process.map((step, i) => (
              <motion.div
                key={i}
                style={{ background: "var(--surface)", padding: "2.5rem 2rem" }}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="num-accent mb-6">{step.num}</div>
                <h3
                  className="font-serif text-xl font-bold mb-4"
                  style={{ color: "var(--cream)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-7" style={{ color: "var(--cream-dim)" }}>
                  {step.desc}
                </p>
                <div
                  className="mt-8 h-px w-12 transition-all duration-500 group-hover:w-24"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── About ── */}
      <motion.section
        id="about"
        className="scroll-mt-24"
        style={{ background: "var(--surface)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div
                  className="overflow-hidden rounded-3xl"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <img
                    src="/jawad-profile.png"
                    alt="Jawad Ahmed"
                    className="h-full w-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl"
                  style={{
                    border: "1px solid rgba(201,168,76,0.25)",
                    background: "transparent",
                    zIndex: -1,
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-line" />
                <span className="section-label">About</span>
              </div>
              <h2
                className="font-serif text-4xl font-bold leading-tight mb-6"
                style={{ color: "var(--cream)" }}
              >
                I speak both<br />
                <em style={{ color: "var(--gold)" }}>marketing and data.</em>
              </h2>
              <p
                className="text-base leading-8 mb-5"
                style={{ color: "var(--cream-dim)" }}
              >
                Most tracking specialists are either technical or marketing-focused. I bridge both.
                I understand what campaign managers need — ROAS clarity, clean attribution, lower
                CPAs — and I know exactly how to configure the infrastructure to make those numbers
                trustworthy.
              </p>
              <p
                className="text-base leading-8 mb-8"
                style={{ color: "var(--cream-dim)" }}
              >
                I've built tracking systems for eCommerce brands, SaaS companies, lead-gen
                agencies, and service businesses. Specialties include server-side tagging, offline
                conversion imports, and closing the gap between ad spend and actual revenue — not
                just form fills.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "GTM",
                  "sGTM",
                  "GA4",
                  "Meta CAPI",
                  "Google Ads",
                  "Offline Conversions",
                  "Consent Mode v2",
                  "Stape.io",
                  "Clarity",
                  "Shopify",
                  "WooCommerce",
                  "Cookiebot",
                ].map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section
        id="faq"
        className="scroll-mt-24"
        style={{
          background: "#0A0A0A",
          borderTop: "1px solid var(--border)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-5xl px-6 py-28">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">FAQ</span>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "linear-gradient(270deg, var(--gold), transparent)",
                }}
              />
            </div>
            <h2
              className="font-serif text-4xl font-bold md:text-5xl"
              style={{ color: "var(--cream)" }}
            >
              Questions worth asking<br />
              <em style={{ color: "var(--gold)" }}>before you start.</em>
            </h2>
          </motion.div>

          <div
            className="rounded-3xl overflow-hidden"
            style={{ border: "1px solid var(--border)", background: "var(--surface-2)" }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="faq-row"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="font-serif pr-8 text-base font-bold"
                    style={{ color: "var(--cream)" }}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    className="flex-shrink-0 font-mono text-2xl font-light"
                    style={{ color: "var(--gold)", display: "inline-block" }}
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div
                        className="px-8 pb-6 text-sm leading-7"
                        style={{ color: "var(--cream-dim)" }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Contact ── */}
      <motion.section
        id="contact"
        className="contact-section scroll-mt-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="gold-line" />
              <span className="section-label">Contact</span>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "linear-gradient(270deg, var(--gold), transparent)",
                }}
              />
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="font-serif mb-6"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontWeight: 900,
                color: "var(--cream)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Let's fix your<br />
              <em style={{ color: "var(--gold)" }}>tracking.</em>
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="mb-10 text-lg leading-8"
              style={{ color: "var(--cream-dim)" }}
            >
              Book a free 30-minute audit call. I'll review your setup live — including offline
              conversion gaps — show you what's broken, and tell you exactly what it would take to
              fix it. Zero sales pressure.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-2xl px-8 py-4 text-base"
              >
                Book Free Audit Call →
              </a>
              <a
                href={EMAIL_LINK}
                className="btn-outline flex items-center gap-3 rounded-2xl px-8 py-4 text-base"
              >
                <img
                  src="/gmail.png"
                  alt="Gmail"
                  className="h-5 w-5 object-contain"
                />
                Email Me
              </a>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-3 rounded-2xl px-8 py-4 text-base"
              >
                <img
                  src="/linkedIn.png"
                  alt="LinkedIn"
                  className="h-5 w-5 object-contain"
                />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8"
            >
              {[
                "Fast Turnaround",
                "End-to-End Setup",
                "14-Day Post-Launch Support",
                "GDPR Compliant",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--cream-dim)" }}
                >
                  <span style={{ color: "var(--gold)" }}>✓</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div
            className="mt-20 flex flex-col items-center justify-between gap-4 md:flex-row"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
          >
            <span
              className="font-mono text-xs"
              style={{ color: "var(--cream-dim)", opacity: 0.5 }}
            >
              © 2026 Jawad Ahmed · Technical Marketing Specialist
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: "var(--cream-dim)", opacity: 0.5 }}
            >
              Server-Side · Meta CAPI · Offline Conversions · GA4 · Google Ads
            </span>
          </div>
        </div>
      </motion.section>

      {/* ── Floating WhatsApp Button (updated — premium dark, no ping, no image) ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl px-5 py-3.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ width: 16, height: 16, color: "var(--gold)", flexShrink: 0 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-sm font-medium" style={{ color: "var(--cream)" }}>
          Urgent tracking issue? →
        </span>
      </a>
    </main>
  );
}
