import PolyArt from "@/components/PolyArt";
import Visual from "@/components/Visual";
import { alsoCovered, equipment, hero, OCEANAMI_URL, sections, type Item } from "@/lib/content";

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
      </div>
    </article>
  );
}

export default function Home() {
  const oceanamiHost = new URL(OCEANAMI_URL).host;

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
          <a href="#homestay">Homestay</a>
          <a href="#robotics">Robotics</a>
          <a href="#3d-models">3D models</a>
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
              Homestay automation, <span>robotics</span> and 3D equipment models.
            </h1>
            <p className="lede">
              ESP32 sensors and Home Assistant for a homestay, a robot arm whose moves a cloud LLM plans, a DIY robot vacuum,
              and highly detailed models of industrial machinery.
            </p>
            <div className="hero__links">
              <a className="btn" href="#homestay">
                See the work
              </a>
              <a className="btn btn--ghost" href={OCEANAMI_URL}>
                {oceanamiHost} ↗
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
            <div className={`grid grid--${s.items.length}`}>
              {s.items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            {s.id === "robotics" && (
              <div className="also">
                <h3>{alsoCovered.title}</h3>
                <ul>
                  {alsoCovered.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        <section className="section" aria-labelledby="models-title">
          <div className="section__head">
            <span className="eyebrow">03</span>
            <h2 id="models-title">3D equipment models</h2>
            <p>Equipment modules for industrial machinery.</p>
          </div>
          <Card item={equipment} wide />
        </section>

        <section className="callout" aria-labelledby="oceanami-title">
          <PolyArt className="callout__art" seed={89} palette={["#0c4a6e", "#0891b2", "#67e8f9"]} cols={12} rows={4} />
          <div className="callout__inner">
            <h2 id="oceanami-title">Oceanami</h2>
            <p>Also on this domain.</p>
            <a className="btn" href={OCEANAMI_URL}>
              Visit {oceanamiHost} ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>vutecksolution.com</span>
        <a href={OCEANAMI_URL}>{oceanamiHost}</a>
      </footer>
    </>
  );
}
