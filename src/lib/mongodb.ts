import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(".env.local에 MONGODB_URI 환경 변수를 설정해 주세요.");
}

// 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 한 번만 보관합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

const client = (globalForMongo._mongoClient ??= new MongoClient(uri));

export type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  // DB 이름은 연결 문자열(/linknamu)에서 가져옵니다.
  return client.db().collection<ClickDoc>("clicks");
}
