import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { links } from "@/data/profile";

// 해당 링크의 클릭 수를 1 늘립니다.
export async function POST(
  _request: Request,
  ctx: RouteContext<"/api/clicks/[id]">,
) {
  const { id } = await ctx.params;

  // 등록된 링크만 집계합니다 (임의의 id로 문서가 쌓이는 것을 막기 위해).
  if (!links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  try {
    const collection = await getClicksCollection();
    const result = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

    return NextResponse.json(
      { id, count: result?.count ?? 1 },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 기록하지 못했습니다." },
      { status: 500 },
    );
  }
}
