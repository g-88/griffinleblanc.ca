import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <h1>{profile.name}</h1>
      <p>{profile.tagline}</p>
      <ul>
        {profile.featuredWork.map((work) => (
          <li key={work.name}>{work.name}</li>
        ))}
      </ul>
    </main>
  );
}
