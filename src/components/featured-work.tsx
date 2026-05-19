import { profile } from "@/data/profile";

export function FeaturedWork() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24"
      id="work"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-700">
          Featured work
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-950 sm:text-4xl">
          A few places where product work met real-world constraints.
        </h2>
      </div>
      <div className="mt-12 divide-y divide-stone-200 border-y border-stone-200">
        {profile.featuredWork.map((work) => (
          <article
            className="grid gap-6 py-9 lg:grid-cols-[0.45fr_1fr]"
            key={work.name}
          >
            <div>
              <h3 className="text-2xl font-semibold text-stone-950">
                {work.name}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                {work.label}
              </p>
              {"siteUrl" in work ? (
                <a
                  className="mt-5 inline-flex items-center text-sm font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-4 transition hover:text-stone-950 hover:decoration-stone-950"
                  href={work.siteUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit site
                </a>
              ) : null}
            </div>
            <div>
              <p className="text-lg leading-8 text-stone-700">
                {work.summary}
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-stone-600 sm:grid-cols-2">
                {work.details.map((detail) => (
                  <li
                    className="border-l border-emerald-700/35 pl-3"
                    key={detail}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {work.stack.map((item) => (
                  <span
                    className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
