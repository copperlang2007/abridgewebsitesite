import './BrandIdentity.css';

function SpanMotion({ full = false }: { full?: boolean }) {
  return (
    <div className={'ab-motion-signature ' + (full ? 'is-full' : 'is-mark-only')}>
      <svg viewBox='0 0 120 120' aria-label={full ? 'artificialBRIDGE animated motion signature' : 'artificialBRIDGE animated Span mark'}>
        <path className='ab-motion-arc ab-motion-left' pathLength='100' d='M22 95 C 22 55 41 39 57 38' />
        <path className='ab-motion-arc ab-motion-right' pathLength='100' d='M98 95 C 98 55 79 39 63 38' />
        <circle className='ab-motion-spark-pulse' cx='60' cy='36' r='8.5' />
        <circle className='ab-motion-spark' cx='60' cy='36' r='8.5' />
      </svg>
      {full && (
        <>
          <div className='ab-motion-wordmark'><span>artificial</span><b>BRIDGE</b></div>
          <div className='ab-motion-tagline'>end to end</div>
        </>
      )}
    </div>
  );
}

export default function BrandMotion() {
  return (
    <section className='section brand-motion-section' id='brand-motion'>
      <div className='section-heading brand-motion-heading'>
        <div className='mono-label'>CURRENT BRAND / MOTION SYSTEM</div>
        <h2>The bridge, in motion.</h2>
        <p>
          The current artificialBRIDGE identity is deliberately simple: the Span, the Connector,
          Manrope, and the locked “end to end” claim. Motion shows the two ends rising toward the
          crown, connecting, then resolving into the name.
        </p>
      </div>

      <div className='brand-motion-grid'>
        <article className='brand-motion-card brand-motion-dark'>
          <div className='brand-motion-meta'><span>01</span><b>FULL MOTION SIGNATURE</b></div>
          <div className='brand-motion-stage'><SpanMotion full /></div>
          <p>Official entrance mnemonic for demo intros, transitions, and branded moments.</p>
        </article>

        <article className='brand-motion-card brand-motion-light'>
          <div className='brand-motion-meta'><span>02</span><b>SPAN / LOADER EXECUTION</b></div>
          <div className='brand-motion-stage'><SpanMotion /></div>
          <p>The same canonical arc draw used when the mark needs to stand alone.</p>
        </article>

        <article className='brand-motion-card brand-connector-card'>
          <div className='brand-motion-meta'><span>03</span><b>CONNECTOR / APP ICON</b></div>
          <div className='brand-motion-stage'>
            <img
              src='https://www.theartificialbridge.com/brandAssets/svg/app-icon.svg'
              alt='artificialBRIDGE Connector app icon'
              className='connector-reference'
            />
          </div>
          <p>Static system mark for app tiles, favicons, avatars, and compact identity surfaces.</p>
        </article>
      </div>

      <div className='brand-motion-source'>
        <span>BRAND SOURCE</span>
        <a href='https://www.theartificialbridge.com/brand' target='_blank' rel='noreferrer'>
          recognizability playbook ↗
        </a>
        <a href='https://www.theartificialbridge.com/motion-signature' target='_blank' rel='noreferrer'>
          motion signature ↗
        </a>
      </div>
    </section>
  );
}