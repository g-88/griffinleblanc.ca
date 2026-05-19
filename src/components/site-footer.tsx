import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© 2026 {profile.name}</p>
      <div className="flex flex-wrap gap-4">
        <a className="transition hover:text-stone-950" href={profile.links.email}>
          Email
        </a>
        <a
          className="transition hover:text-stone-950"
          href={profile.links.linkedin}
        >
          LinkedIn
        </a>
        <a
          className="transition hover:text-stone-950"
          href={profile.links.github}
        >
          GitHub
        </a>
        <a
          className="transition hover:text-stone-950"
          href={profile.links.resume}
        >
          Resume
        </a>
      </div>
    </footer>
  );
}
