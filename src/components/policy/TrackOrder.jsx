import React, { useEffect, useState } from "react";

/* ---------- Edit these ---------- */
const SITE_NAME = "[Your Website Name]";
const EMAIL = "support@yourwebsite.com";
const LAST_UPDATED = "30 September 2026";
const TITLE = "Track Your Order";
const SUMMARY = "enter your tracking number above to see where your parcel is. You will get the number by email or SMS once your order ships.";
const HAS_TRACKER = true;
// Tracking number is appended to this link (change to your courier's tracking URL)
const TRACK_URL = "https://t.17track.net/en#nums=";

/* ---------- Content ---------- */
const SECTIONS = [
  {
    "id": "how",
    "title": "How to track your order",
    "body": [
      "When your order is dispatched, we send you a tracking number by email or SMS. Enter it in the box at the top of this page to see the latest status on the courier's tracking service."
    ]
  },
  {
    "id": "timing",
    "title": "When will tracking start?",
    "body": [
      "Tracking numbers are shared after your order is processed, usually within 1 to 3 business days. The first update can take up to 48 hours to appear after dispatch, as the courier needs to scan the parcel first."
    ]
  },
  {
    "id": "status",
    "title": "What the statuses mean",
    "list": [
      "Order confirmed: we have received your order and payment.",
      "Processing: we are packing your order.",
      "Shipped: the parcel has been handed to the courier.",
      "In transit: the parcel is moving between courier hubs.",
      "Out for delivery: the parcel will reach you today.",
      "Delivered: the parcel has reached the delivery address.",
      "Delivery attempt failed: the courier could not deliver. They will try again."
    ]
  },
  {
    "id": "stuck",
    "title": "Tracking not updating?",
    "body": [
      "Couriers sometimes take a day or two to scan parcels between hubs. If your status has not changed for 5 days, write to us with your order number and tracking number."
    ]
  },
  {
    "id": "missed",
    "title": "Missed the delivery?",
    "body": [
      "Keep your phone reachable, as the courier may call before delivery. If you miss it, the courier will usually try again the next business day."
    ]
  }
];
const ALL = [...SECTIONS, { id: "contact", title: "Contact us", contact: true }];

/* ---------- Styles (sky blue + yellow theme) ---------- */
const CSS = `
.pg{--sky:#4DB8F5;--sky-deep:#0B6DB0;--yellow:#FFC933;--yellow-soft:#FFF3C7;--bg:#EEF7FD;--surface:#fff;--ink:#0E2A3F;--muted:#4B6478;--rule:#CFE5F4;--head-ink:#0E2A3F;--head-meta:#123A57;
background:var(--bg);color:var(--ink);font:18px/1.7 Newsreader,Georgia,serif;min-height:100vh}
@media (prefers-color-scheme:dark){.pg{--sky:#1B5F8C;--sky-deep:#7CCBFF;--yellow:#FFD24D;--yellow-soft:#2B2A14;--bg:#0B1B27;--surface:#12283A;--ink:#E8F3FB;--muted:#9BB3C6;--rule:#24425A;--head-ink:#F2F9FE;--head-meta:#F2F9FE}}
.pg *{box-sizing:border-box}
.pg h1,.pg h2,.pg nav a,.pg .meta,.pg button,.pg label,.pg input{font-family:"Public Sans",system-ui,sans-serif}
.pg header{background:var(--sky);border-bottom:6px solid var(--yellow);padding:56px max(24px,calc((100% - 1080px)/2 + 24px)) 36px;margin-bottom:32px}
.pg h1{font-size:clamp(2rem,5vw,3.2rem);line-height:1.1;margin:0 0 12px;letter-spacing:-.02em;color:var(--head-ink)}
.pg .meta{color:var(--head-meta);font-size:.9rem;margin:0}
.pg .wrap{max-width:1080px;margin:0 auto;padding:0 24px 80px;display:grid;grid-template-columns:240px minmax(0,1fr);gap:48px}
.pg nav{position:sticky;top:24px;align-self:start;max-height:calc(100vh - 48px);overflow-y:auto}
.pg nav ol{list-style:none;margin:0;padding:0;border-left:2px solid var(--rule)}
.pg nav a{display:block;padding:6px 14px;margin-left:-2px;border-left:3px solid transparent;color:var(--muted);font-size:.88rem;text-decoration:none}
.pg nav a:hover{color:var(--ink)}
.pg nav a.on{color:var(--sky-deep);border-left-color:var(--yellow);font-weight:700}
.pg main{background:var(--surface);border:1px solid var(--rule);border-radius:10px;padding:40px clamp(20px,5vw,56px)}
.pg .summary{background:var(--yellow-soft);border-left:5px solid var(--yellow);padding:16px 20px;margin:0 0 40px;border-radius:0 6px 6px 0;font-size:1rem}
.pg section{padding:8px 0 24px;scroll-margin-top:24px}
.pg h2{font-size:1.2rem;margin:24px 0 8px;display:flex;gap:12px;align-items:baseline}
.pg h2 span{color:var(--sky-deep);min-width:2ch}
.pg p,.pg li{max-width:68ch}
.pg p{margin:0 0 12px}
.pg ul{margin:0 0 12px;padding-left:22px}
.pg li::marker{color:var(--yellow)}
.pg a{color:var(--sky-deep)}
.pg a:focus-visible,.pg button:focus-visible,.pg input:focus-visible{outline:3px solid var(--sky-deep);outline-offset:2px}
.pg .track{border:1px solid var(--rule);border-top:5px solid var(--yellow);border-radius:8px;padding:20px;margin:0 0 32px;display:flex;flex-wrap:wrap;gap:12px;align-items:flex-end}
.pg .track div{flex:1 1 240px;display:flex;flex-direction:column;gap:6px}
.pg label{font-weight:700;font-size:.9rem}
.pg input{font-size:1rem;padding:12px 14px;border:1px solid var(--rule);border-radius:6px;background:var(--bg);color:var(--ink)}
.pg button{font-weight:700;font-size:1rem;background:var(--yellow);color:#0E2A3F;border:0;border-radius:6px;padding:12px 22px;cursor:pointer}
.pg button:hover{filter:brightness(.95)}
@media (max-width:820px){.pg .wrap{grid-template-columns:1fr;gap:24px}.pg nav{display:none}.pg header{padding-top:32px}}
`;

/* ---------- Component ---------- */
export default function TrackOrder() {
  const [active, setActive] = useState(ALL[0].id);
  const [num, setNum] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Public+Sans:wght@500;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let cur = ALL[0].id;
      ALL.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 140) cur = s.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const track = (e) => {
    e.preventDefault();
    if (num.trim()) window.open(TRACK_URL + encodeURIComponent(num.trim()), "_blank", "noopener");
  };

  return (
    <div className="pg">
      <style>{CSS}</style>

      <header>
        <h1>{TITLE}</h1>
        <p className="meta">Last updated: {LAST_UPDATED} &nbsp;|&nbsp; Applies to {SITE_NAME}</p>
      </header>

      <div className="wrap">
        <nav aria-label="Sections">
          <ol>
            {ALL.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "on" : ""}>{i + 1}. {s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <main>
          <div className="summary"><strong>In short:</strong> {SUMMARY}</div>

          {HAS_TRACKER && (
            <form className="track" onSubmit={track}>
              <div>
                <label htmlFor="tn">Tracking number</label>
                <input id="tn" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter the number from your shipping email" />
              </div>
              <button type="submit">Track order</button>
            </form>
          )}

          {ALL.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2><span>{i + 1}.</span>{s.title}</h2>
              {s.contact ? (
                <p>Questions? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and include your order number if you have one.</p>
              ) : (
                <>
                  {s.body && s.body.map((b, k) => <p key={k}>{b}</p>)}
                  {s.list && <ul>{s.list.map((l, k) => <li key={k}>{l}</li>)}</ul>}
                </>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}