type AboutMeItem = {
  style: string;
  translation: string;
};

type AboutMeArray = AboutMeItem[][];

const aboutMeArray: AboutMeArray = [
  [
    {
      style: "text-2xl sm:text-5xl font-bold",
      translation: "critical",
    },
    {
      style: "text-lg sm:text-5xl",
      translation: "empathy",
    },
    {
      style: "text-xl sm:text-3xl self-end",
      translation: "languages",
    },
    {
      style: "text-2xl sm:text-5xl font-bold",
      translation: "problem solving",
    },

    {
      style: "text-2xl sm:text-5xl self-start font-bold",
      translation: "adaptability",
    },

    {
      style: "text-xl sm:text-4xl self-end",
      translation: "meditation",
    },
    {
      style: "text-xl sm:text-3xl",
      translation: "inclusivity",
    },
  ],

  [
    {
      style: "text-xl sm:text-4xl",
      translation: "coffee",
    },
    {
      style: "text-2xl sm:text-5xl  font-bold",
      translation: "positive mindset",
    },
  ],

  [
    {
      style: "text-2xl sm:text-5xl font-bold",
      translation: "communication",
    },
    {
      style: "text-xl sm:text-4xl self-start",
      translation: "world travelling",
    },
  ],

  [
    {
      style: "text-xl sm:text-5xl self-start font-bold",
      translation: "fast learner",
    },
    {
      style: "text-xl sm:text-5xl self-end",
      translation: "creativity",
    },
    {
      style: "text-xl sm:text-4xl",
      translation: "curiosity",
    },
    {
      style: "text-2xl sm:text-5xl font-bold",
      translation: "team player",
    },
    {
      style: "text-xl sm:text-4xl self-start",
      translation: "self growth",
    },
    {
      style: "text-xl sm:text-4xl self-end",
      translation: "organized",
    },
    {
      style: "text-xl sm:text-5xl self-end  font-bold",
      translation: "share knowlodge",
    },
  ],
];

export default aboutMeArray;
