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
  bio: "광고쟁이",
  avatar: "/profile-dummy.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
