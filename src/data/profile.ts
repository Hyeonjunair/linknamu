export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 경로 (예: "/profile.jpg"). 없으면 이름 첫 글자로 대체됩니다. */
  avatar?: string;
};

// 보여 주기용 더미 값입니다. 실제 내용은 나중에 교체하세요.
export const profile: Profile = {
  name: "조현준",
  bio: "카피라이터|요즘에는 AI개발에 관심이 많아요",
  avatar: "/조현준 이력서 사진.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🥳 깃허브", url: "https://github.com/Hyeonjunair/linknamu" },
  { id: "blog", title: "💻 블로그", url: "https://blog.naver.com/momihom" },
  { id: "email", title: "✉️ 이메일", url: "mailto:momihom@naver.com" },
];
