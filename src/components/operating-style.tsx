import { profile } from "@/data/profile";

export function OperatingStyle() {
  return (
    <section className="bg-stone-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">
            Operating style
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            I’m useful when a feature has to survive the real world.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {profile.operatingStyle.map((item) => (
            <article className="border-t border-white/20 pt-5" key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
