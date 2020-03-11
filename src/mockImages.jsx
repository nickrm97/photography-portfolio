const urlPath =
  "https://s3-ap-southeast-2.amazonaws.com/nicholasmills.me/photos/";

export const getURL = url => {
  return urlPath + url;
};

const images = [
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/mountain.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("barn.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("house.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("north1.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("north2.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("north3.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("north4.JPG")
  }
];

export default images;
