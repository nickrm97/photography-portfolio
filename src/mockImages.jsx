const urlPath =
  "https://s3-ap-southeast-2.amazonaws.com/nicholasmills.me/photos/";

export const getURL = url => {
  return urlPath + url;
};

const images = [
  {
    location: "Vesturbyggð, Iceland",
    caption: "",
    url: getURL("iceland/barn.JPG")
  },
  {
    location: "Vesturbyggð, Iceland",
    caption: "",
    url: getURL("iceland/house.JPG")
  },
  {
    location: "Vesturbyggð, Iceland",
    caption: "",
    url: getURL("iceland/mountain.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/north1.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/north2.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/north3.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/north4.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/lake.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/gradient.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/lake2.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/lake3.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/winding.JPG")
  },
  {
    location: "Westfjords, Iceland",
    caption: "",
    url: getURL("iceland/window.JPG")
  }
];

export default images;
