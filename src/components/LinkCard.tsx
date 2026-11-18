import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/70 bg-white/40 px-6 py-4 text-center text-base font-medium text-stone-800 shadow-[0_8px_30px_-12px_rgba(176,98,52,0.25),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_34px_-12px_rgba(176,98,52,0.32),inset_0_1px_0_rgba(255,255,255,0.8)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
