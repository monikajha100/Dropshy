import React, { useEffect, useState } from "react";

/* ---------- Content: edit text here ---------- */
const SITE_NAME = "[Your Website Name]";
const CITY = "[Your City]";
const EMAIL = "support@yourwebsite.com";
const LAST_UPDATED = "30 September 2026";

const SECTIONS = [
  { id: "acceptance", title: "Acceptance of terms",
    body: ["By accessing or using this website, you agree to these Terms and Conditions. If you do not agree, please stop using the website."] },
  { id: "eligibility", title: "Eligibility",
    body: ["You must be at least 18 years old, or have permission from a parent or legal guardian, to use this website."] },
  { id: "accounts", title: "User accounts",
    list: [
      "You must provide accurate and complete information when you register.",
      "You are responsible for keeping your password confidential and for all activity under your account.",
      "Tell us immediately if you suspect unauthorised access.",
    ] },
  { id: "use", title: "Acceptable use",
    body: ["You agree not to:"],
    list: [
      "break any applicable law or regulation;",
      "upload viruses, malware or harmful code;",
      "scrape, copy or resell our content without written permission;",
      "harass, impersonate or harm other users;",
      "try to gain unauthorised access to our systems.",
    ] },
  { id: "ip", title: "Intellectual property",
    body: ["All text, images, logos, designs and software on this website belong to us or our licensors and are protected by copyright and trademark law. You may not reproduce or distribute them without our prior written consent."] },
  { id: "content", title: "Content you submit",
    body: ["You keep ownership of anything you post, such as comments or reviews. By posting, you give us a non-exclusive, worldwide licence to display and use it to operate the website. We may remove content that breaks these terms."] },
  { id: "payments", title: "Orders, payments and refunds",
    body: ["Prices are shown in the currency displayed at checkout and may change without notice. Payment is processed by trusted third-party providers. Cancellations and refunds follow our Refund Policy, available on this website."] },
  { id: "links", title: "Third-party links",
    body: ["Our website may link to other websites. We do not control them and are not responsible for their content or policies."] },
  { id: "disclaimer", title: "Disclaimer",
    body: ['The website is provided "as is" and "as available". We do not guarantee that it will always be uninterrupted, secure or free of errors.'] },
  { id: "liability", title: "Limitation of liability",
    body: ["To the fullest extent permitted by law, we are not liable for any indirect, incidental or consequential loss arising from your use of the website."] },
  { id: "termination", title: "Termination",
    body: ["We may suspend or close your access at any time if you break these terms. You may stop using the website or delete your account whenever you wish."] },
  { id: "privacy", title: "Privacy",
    body: [<>How we collect and use your personal data is explained in our <a href="/privacy-policy">Privacy Policy</a>.</>] },
  { id: "changes", title: "Changes to these terms",
    body: ["We may update these terms from time to time. The date at the top shows the latest version. Continued use of the website means you accept the updated terms."] },
  { id: "law", title: "Governing law",
    body: [`These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts at ${CITY}, India.`] },
  { id: "contact", title: "Contact us",
    body: [<>Questions about these terms? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>] },
];

/* ---------- Styles (sky blue + yellow theme) ---------- */
const CSS = `
.tc{--sky:#4DB8F5;--sky-deep:#0B6DB0;--yellow:#FFC933;--yellow-soft:#FFF3C7;--bg:#EEF7FD;--surface:#fff;--ink:#0E2A3F;--muted:#4B6478;--rule:#CFE5F4;--head-ink:#0E2A3F;--head-meta:#123A57;
background:var(--bg);color:var(--ink);font:18px/1.7 Newsreader,Georgia,serif;min-height:100vh}
@media (prefers-color-scheme:dark){.tc{--sky:#1B5F8C;--sky-deep:#7CCBFF;--yellow:#FFD24D;--yellow-soft:#2B2A14;--bg:#0B1B27;--surface:#12283A;--ink:#E8F3FB;--muted:#9BB3C6;--rule:#24425A;--head-ink:#F2F9FE;--head-meta:#F2F9FE}}
.tc *{box-sizing:border-box}
.tc h1,.tc h2,.tc nav a,.tc .meta,.tc button,.tc .ok{font-family:"Public Sans",system-ui,sans-serif}
.tc header{background:var(--sky);border-bottom:6px solid var(--yellow);padding:56px max(24px,calc((100% - 1080px)/2 + 24px)) 36px;margin-bottom:32px}
.tc h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.1;margin:0 0 12px;letter-spacing:-.02em;color:var(--head-ink)}
.tc .meta{color:var(--head-meta);font-size:.9rem;margin:0}
.tc .wrap{max-width:1080px;margin:0 auto;padding:0 24px 80px;display:grid;grid-template-columns:240px minmax(0,1fr);gap:48px}
.tc nav{position:sticky;top:24px;align-self:start;max-height:calc(100vh - 48px);overflow-y:auto}
.tc nav ol{list-style:none;margin:0;padding:0;border-left:2px solid var(--rule)}
.tc nav a{display:block;padding:6px 14px;margin-left:-2px;border-left:3px solid transparent;color:var(--muted);font-size:.88rem;text-decoration:none}
.tc nav a:hover{color:var(--ink)}
.tc nav a.on{color:var(--sky-deep);border-left-color:var(--yellow);font-weight:700}
.tc main{background:var(--surface);border:1px solid var(--rule);border-radius:10px;padding:40px clamp(20px,5vw,56px)}
.tc .summary{background:var(--yellow-soft);border-left:5px solid var(--yellow);padding:16px 20px;margin:0 0 40px;border-radius:0 6px 6px 0;font-size:1rem}
.tc section{padding:8px 0 24px;scroll-margin-top:24px}
.tc h2{font-size:1.2rem;margin:24px 0 8px;display:flex;gap:12px;align-items:baseline}
.tc h2 span{color:var(--sky-deep);min-width:2ch}
.tc p,.tc li{max-width:68ch}
.tc p{margin:0 0 12px}
.tc ul{margin:0 0 12px;padding-left:22px}
.tc li::marker{color:var(--yellow)}
.tc a{color:var(--sky-deep)}
.tc a:focus-visible,.tc button:focus-visible{outline:3px solid var(--sky-deep);outline-offset:2px}
.tc .accept{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-top:32px;padding-top:24px;border-top:1px solid var(--rule)}
.tc button{font-weight:700;font-size:1rem;background:var(--yellow);color:#0E2A3F;border:0;border-radius:6px;padding:12px 22px;cursor:pointer}
.tc button:hover{filter:brightness(.95)}
.tc .ok{color:var(--sky-deep);font-weight:700}
@media (max-width:820px){.tc .wrap{grid-template-columns:1fr;gap:24px}.tc nav{display:none}.tc header{padding-top:32px}}
`;

/* ---------- Component ---------- */
export default function TermsAndConditions() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [accepted, setAccepted] = useState(false);

  // Load fonts once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Public+Sans:wght@500;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Highlight current section in the side index
  useEffect(() => {
    const onScroll = () => {
      let cur = SECTIONS[0].id;
      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 140) cur = s.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Remember acceptance
  useEffect(() => {
    try { if (localStorage.getItem("tc-accepted")) setAccepted(true); } catch (e) {}
  }, []);
  const accept = () => {
    setAccepted(true);
    try { localStorage.setItem("tc-accepted", "1"); } catch (e) {}
  };

  return (
    <div className="tc">
      <style>{CSS}</style>

      <header>
        <h1>Terms and Conditions</h1>
        <p className="meta">Last updated: {LAST_UPDATED} &nbsp;|&nbsp; Applies to {SITE_NAME} ("we", "us", "our")</p>
      </header>

      <div className="wrap">
        <nav aria-label="Sections">
          <ol>
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "on" : ""}>
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main>
          <div className="summary">
            <strong>In short:</strong> use our website lawfully, keep your account safe, respect our content, and know that these terms can change. The full terms are below.
          </div>

          {SECTIONS.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2><span>{i + 1}.</span>{s.title}</h2>
              {s.body && s.body.map((b, k) => <p key={k}>{b}</p>)}
              {s.list && <ul>{s.list.map((l, k) => <li key={k}>{l}</li>)}</ul>}
            </section>
          ))}

          <div className="accept">
            <button type="button" onClick={accept}>I agree to the terms</button>
            <span className="ok" role="status" aria-live="polite">{accepted ? "Accepted" : ""}</span>
          </div>
        </main>
      </div>
    </div>
  );
}