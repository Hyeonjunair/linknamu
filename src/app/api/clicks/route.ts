import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

// 모든 링크의 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 돌려줍니다.
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find({}).toArray();

    const counts: Record<string, number> = Object.fromEntries(
      links.map((link) => [link.id, 0]),
    );
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }

    return NextResponse.json(counts, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
