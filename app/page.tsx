import PolyArt from "@/components/PolyArt";
import Visual from "@/components/Visual";
import { hero, OCEANAMI_URL, sections, type Item } from "@/lib/content";

function Card({ item, wide = false }: { item: Item; wide?: boolean }) {
  return (
    <article className={`card${wide ? " card--wide" : ""}`} id={item.id}>
      <Visual media={item.media} seed={item.seed} palette={item.palette} />
      <div className="card__body">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <ul className="tags" aria-label="Built with">
          {item.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {item.link && (
          <a className="card__link" href={item.link.href}>
            {item.link.label} ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  // Host and path, with a line-break opportunity before the path on narrow screens.
  const { host, pathname } = new URL(OCEANAMI_URL);
  const oceanamiLabel = (
    <>
      {host}
      <wbr />
      {pathname}
    </>
  );

  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="/">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="12,2 22,20 2,20" />
          </svg>
          vutecksolution
        </a>
        <nav aria-label="Sections">
          <a href="#software">Software</a>
          <a href="#hardware">Hardware</a>
          <a className="nav__ext" href={OCEANAMI_URL}>
            Oceanami ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <PolyArt className="hero__art" seed={hero.seed} palette={hero.palette} cols={14} rows={8} />
          <div className="hero__inner">
            <p className="kicker">What we have been building</p>
            <h1>
              <span>Software</span> and hardware.
            </h1>
            <p className="lede">
              Digital transformation for small firms, plus smart home automation, robotics and detailed 3D equipment
              models.
            </p>
            <div className="hero__links">
              <a className="btn" href="#software">
                See the work
              </a>
              <a className="btn btn--ghost" href={OCEANAMI_URL}>
                {oceanamiLabel} ↗
              </a>
            </div>
          </div>
        </section>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-title`}>
            <div className="section__head">
              <span className="eyebrow">{s.eyebrow}</span>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <p>{s.intro}</p>
            </div>
            {s.groups.map((g, i) => (
              <div key={i} className="group">
                {g.wide ? (
                  g.items.map((item) => <Card key={item.id} item={item} wide />)
                ) : (
                  <div className={`grid grid--${g.items.length}`}>
                    {g.items.map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                  </div>
                )}
                {g.points && (
                  <div className="also">
                    <h3>{g.points.title}</h3>
                    <ul>
                      {g.points.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}

        <section className="callout" aria-labelledby="oceanami-title">
          <PolyArt className="callout__art" seed={89} palette={["#0c4a6e", "#0891b2", "#67e8f9"]} cols={12} rows={4} />
          <div className="callout__inner">
            <h2 id="oceanami-title">Oceanami</h2>
            <p>The homestay's web setup, live at {oceanamiLabel}</p>
            <a className="btn" href={OCEANAMI_URL}>
              Visit Oceanami ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>vutecksolution.com</span>
        <a href={OCEANAMI_URL}>{oceanamiLabel}</a>
      </footer>
    </>
  );
}
