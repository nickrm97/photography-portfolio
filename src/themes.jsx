import { icelandImages, usaImages, japanImages } from "./images";

export const themes = [
  {
    id: "iceland",
    title: "Westfjords, Iceland",
    description:
      "Bright green skies, abandoned houses and mirror-like lakes. A collection of photos taken out the car window, lying in the snow and in remote villages. Memories from an impromptu roadtrip to the Westfjords, a region in the east of Iceland.",
    colours: ["#eeeef0", "#cfdfe9", "#c59748", "#1eb186", "#1b1b1b"],
    images: icelandImages
  },
  {
    id: "usa",
    title: "United States and Cuba",
    description:
      "Six weeks through the United States; a country full of fast food, independence and diverse subcultures. A brief escape from New York's unforgiving winter through a Havana sidetrip was relished. One Portra 400 35mm roll of cityscapes, mates and golden days.",
    colours: ["#e8e3e4", "#7d8e49", "#e7ae59", "#972928", "#45858e"],
    images: usaImages
  },
  {
    id: "japan",
    title: "Lost in Translation",
    description:
      "From baseball in Ōsaka-Kōbe to hiding tatoos in Shibuya, I became obsessed with the streets of Japan. This was my first holiday shooting film, using my Olympus Trip35 with a mix of Portra and Ultramax 35mm.",
    colours: ["#edee55", "#0a84c8", "#cf5138", "#59984d", "#110605"],
    images: japanImages
  }
];
