import { profile } from "@/data/profile";

export function ProofStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-5 sm:px-8">
        {profile.proofPoints.map((point) => (
          <span
            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-sm text-stone-700"
            key={point}
          >
            {point}
          </span>
        ))}
      </div>
    </section>
  );
}
