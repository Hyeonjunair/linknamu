import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-4 py-12 sm:py-16">
      <ProfileHeader {...profile} />
      <ul className="mt-10 flex w-full flex-col gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
      <footer className="mt-auto pt-12 text-xs text-zinc-500">링크나무</footer>
    </main>
  );
}
