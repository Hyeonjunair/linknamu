import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-white/70 bg-white/40 px-16 py-4 text-center text-base font-medium text-stone-800 shadow-[0_8px_30px_-12px_rgba(176,98,52,0.25),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_34px_-12px_rgba(176,98,52,0.32),inset_0_1px_0_rgba(255,255,255,0.8)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-stone-400">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
