const urlPath = "./pics/";

export const getURL = url => {
  return urlPath + url;
};

const images = [
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("lights.jpg")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("blacksand.jpg")
  },
  {
    location: "Canal",
    caption: "",
    url: getURL("lights.jpg")
  }
];

export default images;
