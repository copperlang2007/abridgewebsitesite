import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import Logo from './components/Logo';
import BrandMotion from './components/BrandMotion';

type Showcase = 'authority' | 'conversion' | 'product';

const showcaseData: Record<
  Showcase,
  { eyebrow: string; title: string; body: string; tags: string[] }
> = {
  authority: {
    eyebrow: 'AUTHORITY SYSTEM',
    title: 'Look established before the first conversation.',
    body: 'Editorial hierarchy, brand confidence, trust architecture, and deliberate interaction design.',
    tags: ['Brand system', 'Responsive', 'Trust UX'],
  },
  conversion: {
    eyebrow: 'CONVERSION SYSTEM',
    title: 'Turn attention into a clear next action.',
    body: 'Offers, pathways, forms, proof, and friction removal designed around how a real buyer decides.',
    tags: ['Lead flow', 'CTA architecture', 'Proof'],
  },
  product: {
    eyebrow: 'PRODUCT EXPERIENCE',
    title: 'Make the website useful, not just attractive.',
    body: 'Interactive tools, dashboards, intake flows, and AI-native experiences that move the business forward.',
    tags: ['Interactive', 'App-ready', 'AI-native'],
  },
};

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showcase, setShowcase] = useState<Showcase>('authority');
  const [brief, setBrief] = useState({
    business: '',
    email: '',
    currentSite: '',
    goal: 'Sell more',
    buildType: 'New website',
    deadline: 'Flexible',
    notes: '',
  });
  const [briefResult, setBriefResult] = useState('');
  const [briefError, setBriefError] = useState('');
  const active = showcaseData[showcase];

  const emailHref = useMemo(() => {
    if (!briefResult) return '#';
    return (
      'mailto:lang@theartificialbridge.com?subject=' +
      encodeURIComponent('siteBRIDGE build brief — ' + brief.business) +
      '&body=' +
      encodeURIComponent(briefResult)
    );
  }, [briefResult, brief.business]);

  const generateBrief = (event: FormEvent) => {
    event.preventDefault();
    if (!brief.business.trim() || !brief.email.trim()) {
      setBriefError(
        'Add your business name and email so the brief has an owner.'
      );
      setBriefResult('');
      return;
    }
    setBriefError('');
    setBriefResult(
      [
        'siteBRIDGE BUILD BRIEF',
        'Business: ' + brief.business.trim(),
        'Email: ' + brief.email.trim(),
        'Current site: ' + (brief.currentSite.trim() || 'None provided'),
        'Primary goal: ' + brief.goal,
        'Build type: ' + brief.buildType,
        'Timeline: ' + brief.deadline,
        'Notes: ' + (brief.notes.trim() || 'None provided'),
      ].join('\n')
    );
  };

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="grid-fade" />
      </div>

      <header className="nav-wrap">
        <nav className="nav glass-panel" aria-label="Primary">
          <button
            className="brand-button"
            onClick={() => go('top')}
            aria-label="artificialBRIDGE home"
          >
            <Logo size="sm" />
          </button>
          <div className="nav-links">
            <button onClick={() => go('work')}>Work</button>
            <button onClick={() => go('method')}>Method</button>
            <button onClick={() => go('standards')}>Standards</button>
            <button onClick={() => go('brief')}>Start a build</button>
          </div>
          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-menu glass-panel">
            <button onClick={() => go('work')}>Work</button>
            <button onClick={() => go('method')}>Method</button>
            <button onClick={() => go('standards')}>Standards</button>
            <button onClick={() => go('brief')}>Start a build</button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="mono-label">
              <span className="status-dot" /> siteBRIDGE / WEB SYSTEMS
            </div>
            <h1>
              Websites that
              <br />
              <span>earn the click.</span>
            </h1>
            <p className="hero-lede">
              artificialBRIDGE designs and builds premium websites that look
              expensive, explain the business fast, and give every visitor a
              reason to act.
            </p>
            <div className="hero-actions">
              <button className="btn btn-gold" onClick={() => go('brief')}>
                Start a build brief <span>↗</span>
              </button>
              <button className="btn btn-ghost" onClick={() => go('work')}>
                See the work
              </button>
            </div>
            <div className="hero-proof">
              <div>
                <strong>01</strong>
                <span>Brand-first</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Conversion-aware</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Production-ready</span>
              </div>
            </div>
          </div>

          <div className="hero-demo">
            <div className="demo-frame glass-panel">
              <div className="window-bar">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="window-url">sitebridge://live-build</span>
                <span className="window-live">
                  <i /> LIVE
                </span>
              </div>
              <div className="demo-stage">
                <div className="demo-tabs">
                  {(Object.keys(showcaseData) as Showcase[]).map(key => (
                    <button
                      key={key}
                      className={showcase === key ? 'active' : ''}
                      onClick={() => setShowcase(key)}
                    >
                      {key}
                    </button>
                  ))}
                </div>
                <div className="demo-canvas">
                  <div className="demo-site">
                    <span className="demo-kicker">{active.eyebrow}</span>
                    <h2>{active.title}</h2>
                    <p>{active.body}</p>
                    <div className="demo-tags">
                      {active.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div className="demo-cta">
                      PRIMARY ACTION <span>→</span>
                    </div>
                  </div>
                  <div className="build-rail">
                    <div>
                      <span>01</span>
                      <b>POSITION</b>
                      <i className="done">✓</i>
                    </div>
                    <div>
                      <span>02</span>
                      <b>ARCHITECT</b>
                      <i className="done">✓</i>
                    </div>
                    <div>
                      <span>03</span>
                      <b>DESIGN</b>
                      <i className="live">●</i>
                    </div>
                    <div>
                      <span>04</span>
                      <b>PROVE</b>
                      <i>○</i>
                    </div>
                    <div>
                      <span>05</span>
                      <b>DEPLOY</b>
                      <i>○</i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="demo-footer mono-label">
                QUALITY GATE / RESPONSIVE / ACCESSIBLE / VERIFIED
              </div>
            </div>
            <div className="signal-card glass-panel">
              <span>BUILD SIGNAL</span>
              <strong>Design is not the deliverable.</strong>
              <p>
                The deliverable is a site that can be trusted, used, measured,
                and improved.
              </p>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Capabilities">
          <div>
            <span>STRATEGY</span>
            <i>◆</i>
            <span>BRAND</span>
            <i>◆</i>
            <span>UX</span>
            <i>◆</i>
            <span>DEVELOPMENT</span>
            <i>◆</i>
            <span>MOTION</span>
            <i>◆</i>
            <span>QA</span>
            <i>◆</i>
            <span>DEPLOYMENT</span>
            <i>◆</i>
            <span>CONTINUITY</span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div className="mono-label">SELECTED CLIENT WORK</div>
            <h2>Proof, not moodboards.</h2>
            <p>
              Live work where brand, product thinking, and conversion
              architecture meet.
            </p>
          </div>
          <div className="work-grid">
            <a
              className="work-card glass-panel insure"
              href="https://insureitall-llc.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-top">
                <span>LIVE CLIENT</span>
                <span>01</span>
              </div>
              <div className="work-visual">
                <div className="mini-nav">
                  <b>INSUREitALL</b>
                  <span>Medicare · Human clarity</span>
                </div>
                <div className="mini-hero">
                  <small>WE DO THE HARD PART</small>
                  <strong>Clarity before commitment.</strong>
                  <i />
                </div>
                <div className="mini-panels">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="work-meta">
                <div>
                  <strong>INSUREitALL</strong>
                  <span>Brand system · conversion UX · productized tools</span>
                </div>
                <b>OPEN LIVE ↗</b>
              </div>
            </a>
            <a
              className="work-card glass-panel marrero"
              href="https://marrero-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-top">
                <span>ACTIVE BUILD</span>
                <span>02</span>
              </div>
              <div className="work-visual">
                <div className="mini-nav">
                  <b>MG</b>
                  <span>People · Protection · Possibilities</span>
                </div>
                <div className="mini-hero luxury">
                  <small>PROTECTION SHOULD FEEL PERSONAL.</small>
                  <strong>Building relationships.</strong>
                  <i />
                </div>
                <div className="mini-panels">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="work-meta">
                <div>
                  <strong>Marrero Group</strong>
                  <span>
                    Luxury rebrand · information architecture · responsive
                    system
                  </span>
                </div>
                <b>OPEN LIVE ↗</b>
              </div>
            </a>
          </div>
        </section>

        <BrandMotion />

        <section className="section method-section" id="method">
          <div className="section-heading split-heading">
            <div>
              <div className="mono-label">THE METHOD</div>
              <h2>
                Build the reason
                <br />
                to believe.
              </h2>
            </div>
            <p>
              A website is a sequence of decisions. We make them in the right
              order so visual polish is backed by a clear offer, useful
              pathways, and technical proof.
            </p>
          </div>
          <div className="method-grid">
            {[
              [
                '01',
                'POSITION',
                'What are we selling, to whom, and why should they care now?',
              ],
              [
                '02',
                'ARCHITECT',
                'Map the pages, journeys, proof, offers, and conversion moments.',
              ],
              [
                '03',
                'DESIGN',
                'Create a visual system with authorship—not a template wearing your colors.',
              ],
              [
                '04',
                'BUILD',
                'Responsive production code, interaction, forms, and integrations.',
              ],
              [
                '05',
                'PROVE',
                'Mobile, desktop, links, flows, accessibility, and deployment are verified.',
              ],
              [
                '06',
                'HAND OFF',
                'Source, documentation, deployment, and a clean path for the next change.',
              ],
            ].map(([n, title, body]) => (
              <article className="method-card" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section modes-section">
          <div className="section-heading">
            <div className="mono-label">BUILD MODES</div>
            <h2>Start where the business is.</h2>
          </div>
          <div className="mode-grid">
            <article className="mode-card glass-panel">
              <span>01 / LAUNCH</span>
              <h3>New website</h3>
              <p>
                For a business that needs the full system: positioning, brand
                expression, architecture, build, QA, and deployment.
              </p>
              <ul>
                <li>Brand-aligned art direction</li>
                <li>Responsive page system</li>
                <li>Conversion pathways</li>
                <li>Production deployment</li>
              </ul>
            </article>
            <article className="mode-card featured glass-panel">
              <span>02 / REBUILD</span>
              <h3>Make the current site worthy of the business.</h3>
              <p>
                For a site that technically exists but undersells the company,
                feels generic, or breaks down on mobile.
              </p>
              <ul>
                <li>UX and visual red-team</li>
                <li>Information architecture</li>
                <li>Premium interaction system</li>
                <li>Migration without dead ends</li>
              </ul>
            </article>
            <article className="mode-card glass-panel">
              <span>03 / PRODUCT</span>
              <h3>Website + useful software</h3>
              <p>
                For a business that needs more than pages—intake, calculators,
                guided decisions, client tools, or AI-native workflows.
              </p>
              <ul>
                <li>Interactive product UX</li>
                <li>Custom workflows</li>
                <li>API / data integrations</li>
                <li>Operational handoff</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section standards-section" id="standards">
          <div className="standards-grid">
            <div className="standards-copy">
              <div className="mono-label">artificialBRIDGE STANDARD</div>
              <h2>Premium means the whole stack.</h2>
              <p>
                A beautiful first viewport cannot compensate for a broken mobile
                layout, a dead form, a fake testimonial, or a deployment nobody
                verified.
              </p>
              <button className="btn btn-ghost" onClick={() => go('brief')}>
                Build to this standard <span>→</span>
              </button>
            </div>
            <div className="standards-list glass-panel">
              {[
                [
                  '01',
                  'Brand authorship',
                  'Recognizable, coherent, specific to the business.',
                ],
                [
                  '02',
                  'Responsive composition',
                  'Designed for mobile, not merely shrunk.',
                ],
                [
                  '03',
                  'Conversion integrity',
                  'Every CTA has a real next step.',
                ],
                [
                  '04',
                  'Technical proof',
                  'Build, interaction, links, and deploy are checked.',
                ],
                [
                  '05',
                  'Continuity',
                  'Source and standards survive the first launch.',
                ],
              ].map(([n, title, body]) => (
                <div className="standard-row" key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                  <i>◆</i>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section brief-section" id="brief">
          <div className="brief-wrap glass-panel">
            <div className="brief-intro">
              <div className="mono-label">START A BUILD</div>
              <h2>
                Give us the problem.
                <br />
                <span>We’ll architect the site.</span>
              </h2>
              <p>
                No 40-question agency form. Give artificialBRIDGE enough signal
                to understand the business, the gap, and the destination.
              </p>
              <div className="brief-note">
                <span>→</span>
                <p>
                  This creates a portable brief you can review before sending
                  anything.
                </p>
              </div>
            </div>
            <form className="brief-form" onSubmit={generateBrief} noValidate>
              <label>
                Business name
                <input
                  value={brief.business}
                  onChange={e =>
                    setBrief({ ...brief, business: e.target.value })
                  }
                  placeholder="Acme Co."
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={brief.email}
                  onChange={e => setBrief({ ...brief, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </label>
              <label className="full">
                Current site
                <input
                  value={brief.currentSite}
                  onChange={e =>
                    setBrief({ ...brief, currentSite: e.target.value })
                  }
                  placeholder="https://... or none yet"
                />
              </label>
              <label>
                Primary goal
                <select
                  value={brief.goal}
                  onChange={e => setBrief({ ...brief, goal: e.target.value })}
                >
                  <option>Sell more</option>
                  <option>Look more established</option>
                  <option>Generate qualified leads</option>
                  <option>Launch something new</option>
                  <option>Replace a weak current site</option>
                  <option>Add useful product functionality</option>
                </select>
              </label>
              <label>
                Build type
                <select
                  value={brief.buildType}
                  onChange={e =>
                    setBrief({ ...brief, buildType: e.target.value })
                  }
                >
                  <option>New website</option>
                  <option>Full redesign</option>
                  <option>Landing / launch experience</option>
                  <option>Website + custom product</option>
                </select>
              </label>
              <label className="full">
                Timeline
                <select
                  value={brief.deadline}
                  onChange={e =>
                    setBrief({ ...brief, deadline: e.target.value })
                  }
                >
                  <option>Flexible</option>
                  <option>ASAP</option>
                  <option>Within 2 weeks</option>
                  <option>Within 30 days</option>
                  <option>Specific launch date</option>
                </select>
              </label>
              <label className="full">
                What is not working today?
                <textarea
                  value={brief.notes}
                  onChange={e => setBrief({ ...brief, notes: e.target.value })}
                  placeholder="The site looks generic, mobile is weak, nobody understands the offer..."
                />
              </label>
              {briefError && (
                <div className="form-error" role="alert">
                  {briefError}
                </div>
              )}
              <button className="btn btn-gold full" type="submit">
                Generate build brief <span>↗</span>
              </button>
            </form>
            {briefResult && (
              <div className="brief-result full-span">
                <div className="result-head">
                  <span>BUILD BRIEF READY</span>
                  <i>VERIFIED INPUT</i>
                </div>
                <pre>{briefResult}</pre>
                <div className="result-actions">
                  <button
                    className="btn btn-ghost"
                    onClick={() => navigator.clipboard?.writeText(briefResult)}
                  >
                    Copy brief
                  </button>
                  <a className="btn btn-gold" href={emailHref}>
                    Email artificialBRIDGE <span>↗</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <Logo size="md" />
          <span className="mono-label">siteBRIDGE / WEB SYSTEMS</span>
        </div>
        <div className="footer-copy">
          <p>Premium websites, product experiences, and conversion systems.</p>
          <a href="mailto:lang@theartificialbridge.com">
            lang@theartificialbridge.com
          </a>
        </div>
        <div className="footer-meta">
          <span>artificialBRIDGE © 2026</span>
          <span>END TO END</span>
        </div>
      </footer>
    </div>
  );
}
