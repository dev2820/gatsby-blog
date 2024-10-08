import fs from "fs";
import path from "path";

const fetchAuthor = async (githubID) => {
  const res = await fetch(`https://api.github.com/users/${githubID}`);
  const rawAuthor = await res.json();

  return toAuthor(rawAuthor);
};

const toAuthor = (rawAuthor) => {
  return {
    name: rawAuthor.login,
    nickname: rawAuthor.name,
    avatarURL: rawAuthor.avatar_url,
    githubURL: rawAuthor.html_url,
    company: rawAuthor.company ?? "",
    location: rawAuthor.location ?? "",
    bio: rawAuthor.bio ?? "",
  };
};

async function updateAuthor() {
  const pathToData = path.join(
    process.env.PWD,
    "./src/assets/data/github-profile.json"
  );

  const author = await fetchAuthor("dev2820");

  // 폴더 경로를 추출
  const dir = path.dirname(pathToData);

  // 폴더가 존재하지 않으면 생성
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(pathToData, JSON.stringify(author), {
    encoding: "utf-8",
    flag: "w+",
  });
}

updateAuthor();
