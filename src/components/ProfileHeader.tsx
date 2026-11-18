import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, avatar }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatar ? (
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          priority
          className="h-40 w-40 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-40 w-40 items-center justify-center rounded-full bg-emerald-600 text-5xl font-semibold text-white"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
