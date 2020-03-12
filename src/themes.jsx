import { icelandImages, usaImages } from "./images";

export const themes = [
  {
    id: "iceland",
    title: "Eastern Iceland, Northern Lights",
    description:
      "Bright green skies, abandoned houses and mirror-like lakes. A collection of photos taken out the car window, lying in the snow and in remote villages. All photos taken during an impromptu roadtrip to the Westfjords, a region in the east of Iceland.",
    colours: ["#eeeef0", "#cfdfe9", "#c59748", "#1eb186", "#1b1b1b"],
    images: icelandImages
  },
  {
    id: "usa",
    title: "United States and Cuba",
    description:
      "Six weeks in the United States; a country full of unfounded confidence, fast food and materialism. A warm and joyous intermission in Havana was relished. Images of cityscapes, friends and the friendly streets.",
    colours: ["#e8e3e4", "#7d8e49", "#e7ae59", "#972928", "#45858e"],
    images: usaImages
  }
];
