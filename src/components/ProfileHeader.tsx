import Image from "next/image";
import type { Profile } from "@/data/profile";

const avatarClass =
  "h-28 w-28 rounded-full ring-4 ring-white/80 shadow-[0_14px_32px_-10px_rgba(176,98,52,0.45),0_2px_6px_rgba(176,98,52,0.12)] sm:h-32 sm:w-32";

export default function ProfileHeader({ name, bio, avatar }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {avatar ? (
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={256}
          height={256}
          sizes="128px"
          priority
          className={`${avatarClass} object-cover`}
        />
      ) : (
        <div
          aria-hidden="true"
          className={`${avatarClass} flex items-center justify-center bg-orange-300 text-4xl font-semibold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-[1.65rem] font-bold tracking-tight text-stone-800">
        {name}
      </h1>
      <p className="mt-2 max-w-[22rem] text-balance text-[0.95rem] leading-relaxed text-stone-500">
        {bio}
      </p>
    </header>
  );
}
