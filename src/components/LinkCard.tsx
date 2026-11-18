import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-center text-base font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-500"
    >
      {title}
    </a>
  );
}
