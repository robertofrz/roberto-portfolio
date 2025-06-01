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
    screenshot: "/screenshots/solo-dev-screenshot.png",
    description: "project1.description",
    demo: "https://youtu.be/Thc-Ek7RRWc",
    deployed: "https://solodev-project.vercel.app",
    repository: "https://github.com/robertofrz/solo-dev",
  },
  {
    title: "project2.title",
    screenshot: "/screenshots/code-hire-screenshot.png",
    description: "project2.description",
    demo: "https://youtu.be/A43_cVhBIsc",
    deployed: "https://code-hire-cvbuilder.vercel.app/",
    repository: "https://github.com/robertofrz/code-hire",
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
