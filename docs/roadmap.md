# 🚀 Your Agency Playbook — From Zero to First 2 Clients in 2 Months

---

## PART 1: YOUR AGENCY SETUP

### Your Offer (Simple & Clear)

**What you sell:** Custom-coded, fast, SEO-optimized landing pages (4–5 pages) for influencers, writers, doctors, schools, and small businesses.

**Tech you deliver on:** Next.js + Vercel hosting.ii Add MongoDB backend if client needs forms, bookings, dashboards, or login (extra cost).

**Pricing:**
- **Starter (Landing page, 4–5 pages, static):** ₹5,000 – ₹10,000
- **With backend (MongoDB + forms/bookings/admin):** ₹15,000 – ₹25,000
- **SEO setup add-on:** ₹3,000 – ₹5,000
- **Monthly maintenance (optional):** ₹1,500 – ₹3,000/month

**Why this pricing works:** You're new, you need testimonials and case studies more than money right now. After 2–3 happy clients, raise prices 50%.

---

## PART 2: YOUR PROCESS SHEET (Show This to Clients)

> Copy this into a Notion page or a PDF. Send to every prospect. It makes you look professional and serious — like a real agency, not a freelancer.

### 🎯 Our 6-Step Process

**Step 1 — Discovery & Competitor Research (Day 1–2)**
We start by understanding your business, goals, and target audience. Then we analyze your top 3 competitors — their design, messaging, structure, and what's working for them. You get a written research report.

**Step 2 — SEO Keyword Strategy (Day 2–3)**
Our team researches the exact keywords your customers search for. We map them to your pages so your site can rank on Google from day one.

**Step 3 — UI/UX Design (Day 3–5)**
Our UI expert designs each page with conversion in mind — clean, modern, mobile-first. You approve the design before any code is written.

**Step 4 — Development (Day 5–9)**
Our software engineer builds the site using Next.js — fast, dynamic, scalable. Every animation, every interaction, optimized for speed.

**Step 5 — Quality Testing (Day 9–11)**
Our QA tester checks the entire site on mobile, tablet, and desktop. Forms, links, speed, SEO — everything is verified before launch.

**Step 6 — Launch & Handover (Day 12)**
We deploy on Vercel, connect your domain, set up Google Analytics, and hand you a simple guide so you can update content yourself.

**Total Timeline:** 10–14 days from start to launch.

> 💡 *Pro tip: You don't actually have a team yet — but Claude Cowork acts as your team. Each role above (researcher, SEO expert, UI designer, developer, tester) = one Claude session with the right prompt. See Part 4.*

---

## PART 3: CLIENT-FACING DECK / PITCH

### When someone asks "Why should I hire you?"

Say this:

> "Most landing pages are slow, template-based, and don't rank on Google. We build custom Next.js sites — they load in under 2 seconds, are SEO-ready from day one, and look premium. You get a professional team handling research, design, development, and testing — all for the price most freelancers charge for a Wix template."

### Cold Outreach Message Template (DM / Email)

**For Influencers:**
> Hey [Name], been following your work — your content on [specific topic] is solid. Quick question: do you have a landing page where people can buy your [course/services/coaching]? I build fast Next.js landing pages that actually convert (not just look pretty). Happy to send a 2-min example. No pressure.

**For Doctors / Clinics:**
> Hi Dr. [Name], I noticed your clinic doesn't have a website / your current one looks outdated. I help doctors get a clean, professional site with online appointment booking — patients can book in 30 seconds. Would you be open to a 10-minute call this week?

**For Writers / Coaches:**
> Hey [Name], loved your recent [post/newsletter/book]. Wanted to ask — where do readers go when they want to hire you or buy your stuff? If you don't have a dedicated landing page, I'd love to help you build one. 5–10K, ships in 2 weeks. Want to see samples?

---

## PART 4: CLAUDE COWORK INSTRUCTIONS (Your AI Team)

> These are the prompts you paste into Claude Cowork to make AI do the work of each team role. Run them in order for every project.

---

### 🔍 ROLE 1: Competitor Research Analyst

**Paste this prompt:**

```
You are a senior competitor research analyst for a web design agency.

I have a new client. Here are the details:
- Client name: [INSERT]
- Client industry/niche: [INSERT — e.g. fitness influencer, dentist, novelist]
- Client's target audience: [INSERT]
- Client's main goal for the website: [INSERT — e.g. sell course, book appointments, build email list]

Your task:
1. Find 3 top competitors in this niche (search the web).
2. For each competitor, analyze:
   - Their landing page headline & sub-headline
   - Their value proposition
   - The structure of their page (sections in order)
   - Call-to-action style
   - What's working & what's missing
3. Give me a final summary table comparing all 3.
4. End with 5 specific recommendations for what MY client's landing page should do better.

Be specific. No generic advice. Use real examples from the competitor sites.
```

**Inputs you need to give:** Client name, industry, target audience, main goal.

---

### 🔎 ROLE 2: SEO Keyword Strategist

**Paste this prompt:**

```
You are a senior SEO strategist specialized in landing page SEO.

Client info:
- Niche/industry: [INSERT]
- Location (if local business): [INSERT or "Global"]
- Services/products they sell: [INSERT]
- Target customer: [INSERT]

Your task:
1. Give me 15 high-intent keywords this client should target (mix of short-tail and long-tail).
2. For each keyword, mention search intent (informational / commercial / transactional).
3. Suggest which keyword goes on which page (Home, About, Services, Contact, Blog).
4. Give me the EXACT meta title (60 chars max) and meta description (155 chars max) for the homepage.
5. Suggest 3 blog post titles that can drive long-term organic traffic.

Be data-driven. If you can search Google for current keyword trends, do so.
```

**Inputs you need to give:** Niche, location, services, target customer.

---

### 🎨 ROLE 3: UI/UX Designer

**Paste this prompt:**

```
You are a senior UI/UX designer who specializes in high-converting landing pages.

Client details:
- Business: [INSERT]
- Style preference: [INSERT — e.g. minimal, bold, premium, playful]
- Brand colors (if any): [INSERT or "suggest"]
- Pages needed: Home, About, Services, Testimonials, Contact (or specify)
- Special requirements: [INSERT — e.g. booking form, video embed, pricing table]

Your task:
1. For each page, give me the complete section-by-section layout:
   - Section name
   - Headline + sub-headline (write the exact copy)
   - What goes in this section (image, video, form, list, etc.)
   - CTA button text
2. Suggest a color palette (3–4 colors with hex codes).
3. Suggest 2 Google Fonts (one heading, one body).
4. Suggest the overall vibe in 2 sentences (so a developer knows what to build).

Make it modern, mobile-first, and conversion-focused. Don't be generic — design for THIS specific client.
```

**Inputs you need to give:** Business type, style preference, colors, pages needed, special requirements.

---

### 💻 ROLE 4: Senior Next.js Developer

**Paste this prompt:**

```
You are a senior Next.js 14+ developer who writes clean, production-ready code with App Router, TypeScript, and Tailwind CSS.

I need you to build a landing page section based on this spec:

Section name: [INSERT]
Purpose: [INSERT]
Content (from designer):
[PASTE THE UI DESIGNER'S OUTPUT FOR THIS SECTION]

Requirements:
- Use Next.js App Router
- TypeScript strict mode
- Tailwind CSS for styling
- Mobile-first responsive
- Use Framer Motion for smooth animations (subtle, not flashy)
- All images should use next/image
- Make components reusable
- Add proper SEO meta tags if it's a page-level component
- Add appropriate ARIA labels for accessibility
- Code must be production-ready, well-commented, and use modern React patterns

Output:
1. Complete component code
2. Any required dependencies to install
3. Where to place the file in the project structure
4. Brief explanation of any design decisions
```

**Inputs you need to give:** Section name, purpose, UI designer's output (paste it).

---

### 🧪 ROLE 5: QA Tester

**Paste this prompt:**

```
You are a senior QA tester for web projects.

I'm about to launch a Next.js landing page for: [CLIENT NAME / TYPE]
The site URL (staging): [PASTE URL]

Pages to test:
[LIST ALL PAGES]

Special features built into the site:
[LIST — e.g. contact form, booking integration, MongoDB backend, animations]

Your task — give me a complete testing checklist covering:

1. **Cross-browser**: Chrome, Safari, Firefox, Edge
2. **Responsive**: Mobile (375px), Tablet (768px), Desktop (1440px)
3. **Performance**: PageSpeed Insights checks, image optimization, lazy loading
4. **SEO**: Meta tags, OG tags, sitemap, robots.txt, alt tags, heading hierarchy
5. **Functionality**: Forms, CTAs, links (no broken links), animations
6. **Accessibility**: Keyboard navigation, ARIA labels, color contrast
7. **Security**: HTTPS, form input validation
8. **Backend (if applicable)**: API endpoints, database connections, error handling

For each item, give me the specific check + how to test it + what "pass" looks like. Make it a checklist I can tick off.
```

**Inputs you need to give:** Client info, staging URL, list of pages, features built.

---

## PART 5: YOUR 2-MONTH ROADMAP (Week by Week)

### 🗓️ WEEK 1 — Setup & Foundation

**Goals:** Look professional, be ready to pitch.

- [ ] Buy a domain (yourname.com or youragencyname.com) — ~₹800/year
- [ ] Build your own agency landing page using your own process (this becomes your portfolio piece #1)
- [ ] Create a simple logo (use Looka, Canva, or Figma — don't overthink)
- [ ] Set up business email (yourname@yourdomain.com via Zoho Mail — free)
- [ ] Create LinkedIn profile, optimize it: "Founder @ [Agency] | Building fast landing pages for creators & businesses"
- [ ] Create a Notion page with your process sheet (Part 2 of this doc)
- [ ] Save 2–3 design references on Dribbble / Awwwards to show clients
- [ ] **Output by end of week:** Your own website live + LinkedIn + process sheet ready

---

### 🗓️ WEEK 2 — Build Sample / Portfolio

**Goals:** Have proof of work so prospects believe you.

- [ ] Build 2 demo landing pages (one for an influencer, one for a doctor — fake but beautiful)
- [ ] Use Claude Cowork prompts above to design + build them fast
- [ ] Deploy on Vercel (use subdomains: influencer-demo.yourdomain.com, doctor-demo.yourdomain.com)
- [ ] Take clean screenshots + record a 30-second screen recording of each
- [ ] Add these to your portfolio section on your main site
- [ ] **Output by end of week:** 2 demo sites + a portfolio page

---

### 🗓️ WEEK 3 — Outreach Begins

**Goals:** Start conversations, not chase money yet.

- [ ] Make a target list of 100 people:
  - 30 influencers (Instagram, YouTube — under 100k followers, more replyable)
  - 30 local doctors/dentists (Google Maps in your city)
  - 20 writers/coaches (LinkedIn, Twitter)
  - 20 small school/coaching institute owners
- [ ] Send 10 personalized DMs/emails per day using templates in Part 3
- [ ] **DON'T copy-paste blindly.** Mention something specific about them.
- [ ] Track everything in a Google Sheet: Name, Channel, Date sent, Reply, Status
- [ ] **Output by end of week:** 50+ outreaches sent, hopefully 3–5 conversations started

---

### 🗓️ WEEK 4 — First Calls & Closing

**Goals:** Convert 1 conversation into 1 paying client.

- [ ] For every reply, jump on a 15-min call within 24 hours
- [ ] On the call: ask about their business, listen more than you talk, show them the demo, walk them through your process sheet
- [ ] Send a simple proposal within 2 hours of the call (1-page PDF: scope, timeline, price, payment terms)
- [ ] **Payment terms: 50% upfront, 50% on delivery.** Never start without 50%.
- [ ] Send invoice via Razorpay/Stripe links (looks pro)
- [ ] Continue daily outreach (10/day)
- [ ] **Output by end of week:** 1 paying client onboarded ✨

---

### 🗓️ WEEK 5 — Deliver Like a Pro

**Goals:** Build the first client's site so well they refer you.

- [ ] Use your full Claude Cowork process (all 5 roles)
- [ ] Send daily updates to client (even a 2-line WhatsApp helps — they feel cared for)
- [ ] Ship in 10–14 days, not 30. Speed = referrals.
- [ ] Continue daily outreach (10/day)
- [ ] **Output by end of week:** First site launched, client thrilled

---

### 🗓️ WEEK 6 — Testimonial + SaaS Prep

**Goals:** Get social proof + start SaaS launch prep.

- [ ] Ask the happy client for:
  - A written testimonial
  - Permission to use their site in your portfolio
  - 2 referrals to people like them
- [ ] Post a case study on LinkedIn ("How I built [client]'s site in 12 days")
- [ ] Pull out your SaaS — finalize the landing page for it
- [ ] List the 3 things blocking SaaS launch and tackle them this week
- [ ] **Output by end of week:** Testimonial collected, case study posted, SaaS launch checklist made

---

### 🗓️ WEEK 7 — Close Client #2 + SaaS Soft Launch

**Goals:** Use momentum to close second client + soft-launch SaaS.

- [ ] Reach out to your engaged conversations again — share the new case study
- [ ] Close client #2 (now you have proof, it's easier)
- [ ] Soft launch SaaS to a small audience (Twitter / Reddit / Product Hunt Ship)
- [ ] Get 5–10 beta users for the SaaS
- [ ] **Output by end of week:** Client #2 paying, SaaS has first 5–10 users

---

### 🗓️ WEEK 8 — Decision Time

**Goals:** Look at the data and decide your path.

By end of week 8, you should have:
- 1–2 paying agency clients ✓
- 5–10 SaaS beta users ✓
- A real portfolio ✓
- Real testimonials ✓

**Now decide:**
- If agency is generating ₹15K+ a month already → **keep going, scale to 3–5 clients/month**
- If SaaS is getting traction (paid users) → **lean more into SaaS**
- If neither is working → **start IBPS SO prep seriously** (you still have time, exam is end of August)

**Also this week:** Fill the IBPS SO form anyway (notification opens June–July). Filling the form costs ₹850. Take the exam as backup. No regrets.

---

## PART 6: CRITICAL RULES (DON'T SKIP)

1. **Don't quit your current job until you have 2 months of expenses saved + 1 paying client.** Risk smart, not reckless.

2. **Document EVERYTHING.** Every client conversation, every project, every learning. This becomes your case studies.

3. **Speed > Perfection.** Ship in 10 days, not 30. Iterate based on feedback.

4. **Always get 50% upfront.** No exceptions. Even from friends.

5. **Send a contract.** Even a simple 1-page Google Doc covering scope, timeline, price, revisions. Protects you.

6. **Reply within 1 hour during working hours.** This alone will make you stand out from 90% of freelancers.

7. **Under-promise, over-deliver.** Say 14 days, deliver in 10. Say 5 pages, give 6.

8. **Keep learning.** Spend 30 min/day on either improving your skills OR studying for IBPS. Don't drop both.

---

## PART 7: WHAT TO TELL YOUR CURRENT BOSS

Don't quit. Don't fight. Don't announce anything.

Just keep doing your job + build this in parallel. After 2 months when you have real income coming in, then you have leverage. Then you can negotiate from a position of strength — or leave on your own terms.

Right now, your current job is funding your transition. Treat it that way.

---

## 🎯 ONE THING TO DO TODAY

Don't read this whole doc and feel overwhelmed. Just do **ONE** thing today:

**Buy your domain. That's it. Just that one step starts everything.**

Tomorrow, do the next thing. Then the next.

In 8 weeks, you'll look back and not recognize yourself.

You've got this. 🔥