import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Podcasts para aprender inglês" },
      { name: "description", content: "Episódios curtos sobre in, on e at e dicas para aprender inglês." },
      { property: "og:title", content: "Podcasts para aprender inglês" },
      { property: "og:description", content: "Episódios curtos sobre in, on e at e dicas para aprender inglês." },
    ],
  }),
  component: Index,
});

const episodes = [
  { id: "1-c1ywjWM_0MAvMoEbuo8TXuF9u1Kx0Fh", title: "In, on e at com tempo", desc: "Quando usar cada preposição com horas, dias, meses e anos." },
  { id: "1ibokHDAcv2kRMmACsfFApgOk3DZR3sDz", title: "In, on e at com lugares", desc: "Como falar de cidades, ruas, endereços e locais." },
  { id: "1mllmlAasqZ40UCS9FdTwerIVoKqJwDJC", title: "Aprendendo inglês", desc: "Dicas e motivação para seguir estudando todos os dias." },
];

function Flag() {
  const slices = 24;
  const w = 100 / slices;
  return (
    <div className="mx-auto flex h-40 w-64 drop-shadow-xl sm:h-48 sm:w-80" aria-label="Bandeira dos Estados Unidos" role="img">
      {Array.from({ length: slices }).map((_, i) => (
        <div
          key={i}
          className="flag-slice relative h-full overflow-hidden"
          style={{ width: `${w}%`, animationDelay: `${-i * 0.12}s` }}
        >
          <div className="absolute top-0 h-full" style={{ width: `${slices * 100}%`, left: `${-i * 100}%` }}>
            {Array.from({ length: 13 }).map((_, s) => (
              <div key={s} className={s % 2 === 0 ? "bg-flag-red" : "bg-flag-white"} style={{ height: `${100 / 13}%` }} />
            ))}
            <div className="absolute left-0 top-0 grid grid-cols-6 place-items-center bg-flag-blue p-1 text-[8px] leading-none text-flag-white sm:text-[10px]" style={{ width: "40%", height: `${700 / 13}%` }}>
              {Array.from({ length: 30 }).map((_, k) => <span key={k}>★</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen px-4 py-12 font-sans">
      <header className="text-center">
        <Flag />
        <h1 className="mt-10 font-display text-4xl font-extrabold text-foreground sm:text-6xl">
          Podcasts para <span className="text-primary">aprender inglês</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Episódios curtos para ouvir onde quiser e praticar no seu ritmo.
        </p>
      </header>
      <section className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {episodes.map((e, i) => (
          <article key={e.id} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
            <span className="font-display text-sm font-semibold text-primary">Episódio {i + 1}</span>
            <h2 className="mt-1 font-display text-2xl font-semibold">{e.title}</h2>
            <p className="mt-2 flex-1 text-muted-foreground">{e.desc}</p>
            <iframe
              src={`https://drive.google.com/file/d/${e.id}/preview`}
              className="mt-4 h-20 w-full rounded-lg border-0"
              allow="autoplay"
              title={e.title}
            />
            <a
              href={`https://drive.google.com/file/d/${e.id}/view`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex justify-center rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Ouvir no Google Drive
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
