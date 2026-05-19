import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <a
        className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-950"
        href="#top"
      >
        GL
      </a>
      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-4 text-sm text-stone-600"
      >
        <a className="transition hover:text-stone-950" href="#work">
          Work
        </a>
        <a
          className="transition hover:text-stone-950"
          href={profile.links.resume}
        >
          Resume
        </a>
        <a
          className="transition hover:text-stone-950"
          href={profile.links.email}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
