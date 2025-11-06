export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  { slug: "github-api-tests", title: "GitHub API Automation (C# + RestSharp)", summary: "CRUD върху issues/коментари, labels, auth. NUnit + RestSharp.", stack: ["C#", "NUnit", "RestSharp", "GitHub API"], repo: "https://github.com/BBCooL40/CI-CD-exercise" },
  { slug: "foody-api-tests", title: "Foody API Testing (Postman + Newman)", summary: "Auth, CRUD, променливи, pre-request, tests, htmlextra репорт (CLI).", stack: ["Postman", "Newman", "htmlextra", "CI"], repo: "https://github.com/BBCooL40/Foody" },
  { slug: "story-spoiler-api", title: "Story Spoiler API (Bearer Auth)", summary: "Регистрация/логин, Bearer токен, CRUD върху stories, negative cases, репортинг.", stack: ["Postman", "JWT", "API Testing"], repo: "https://github.com/BBCooL40/story-spoil-tests" }
];
