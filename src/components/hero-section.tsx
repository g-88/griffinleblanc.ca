import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:pb-24 lg:pt-16"
      id="top"
    >
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-emerald-700">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">
          {profile.tagline}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
          {profile.summary}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-white transition hover:bg-stone-800"
            href={profile.links.email}
          >
            Start a conversation
          </a>
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-medium text-stone-900 transition hover:border-stone-950"
            href={profile.links.resume}
          >
            View resume
          </a>
        </div>
      </div>
      <aside className="border-l border-stone-200 pl-6 text-sm leading-7 text-stone-600 lg:self-end">
        <p className="font-medium text-stone-950">Recent focus</p>
        <p className="mt-3">
          Regulated fintech workflows, product delivery, QA automation, rollout
          readiness, and full-stack systems that survive contact with
          production.
        </p>
      </aside>
    </section>
  );
}
