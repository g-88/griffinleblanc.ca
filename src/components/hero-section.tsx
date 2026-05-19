import Image from "next/image";
import { ContactAction } from "@/components/contact-action";
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
          <ContactAction
            className="inline-flex min-h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-white transition hover:bg-stone-800"
            email={profile.email}
          >
            Start a conversation
          </ContactAction>
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-stone-300 px-5 text-sm font-medium text-stone-900 transition hover:border-stone-950"
            href={profile.links.resume}
          >
            View resume
          </a>
        </div>
      </div>
      <aside className="border-l border-stone-200 pl-6 text-sm leading-7 text-stone-600 lg:-mt-8 lg:self-center">
        <div className="group relative mb-7 max-w-60 xl:max-w-64">
          <div className="absolute -inset-2.5 translate-x-2.5 translate-y-2.5 rounded-[1.8rem] border border-emerald-700/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem_1.8rem_0.35rem_1.8rem] bg-stone-200 shadow-[0_22px_52px_rgb(28_25_23_/_0.12)]">
            <Image
              alt="Portrait of Griffin LeBlanc"
              className="object-cover saturate-[0.88] transition duration-500 group-hover:scale-[1.025]"
              fill
              priority
              sizes="(min-width: 1280px) 256px, (min-width: 1024px) 240px, 72vw"
              src="/images/griffin-leblanc.jpeg"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgb(28_25_23_/_0.18))]" />
          </div>
          <p className="mt-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
            <span className="h-px w-8 bg-emerald-700/45" />
            Ottawa, Canada
          </p>
        </div>
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
