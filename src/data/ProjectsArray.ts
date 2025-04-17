type projectItem = {
  title: string;
  screenshot: string;
  description: string;
  demo: string;
  deployed: string;
  repository: string;
};

type projectsType = projectItem[];

const projects: projectsType = [
  {
    title: "project1.title",
    screenshot: "/screenshots/code-hire-screenshot.png",
    description: "project1.description",
    demo: "https://youtu.be/A43_cVhBIsc",
    deployed: "https://code-hire-wine.vercel.app/",
    repository: "https://github.com/robertofrz/code-hire",
  },
  {
    title: "project2.title",
    screenshot: "/screenshots/auth-project-screenshot.png",
    description: "project2.description",
    demo: "https://youtu.be/Z50OAzcOU-8",
    deployed: "https://auth-project-flame-eight.vercel.app/",
    repository: "https://github.com/robertofrz/auth-project",
  },
  {
    title: "project3.title",
    screenshot: "/screenshots/sky-watch-screenshot.png",
    description: "project3.description",
    demo: "https://youtu.be/N6qJPXD1wNo",
    deployed: "https://robertofrz.github.io/sky-watch/",
    repository: "https://github.com/robertofrz/sky-watch",
  },
];

export default projects;
