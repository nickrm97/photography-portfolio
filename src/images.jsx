const urlPath =
  "https://s3-ap-southeast-2.amazonaws.com/nicholasmills.me/photos/";

export const getURL = url => {
  return urlPath + url;
};

export const icelandImages = [
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

export const usaImages = [
  { location: "East Bridgewater, MA", caption: "", url: getURL("usa/moo.JPG") },
  {
    location: "East Bridgewater, MA",
    caption: "",
    url: getURL("usa/meow.JPG")
  },
  { location: "Boston, MA", caption: "", url: getURL("usa/queens.JPG") },
  { location: "Brooklyn, NY", caption: "", url: getURL("usa/brooklyn.JPG") },
  { location: "Havana, Cuba", caption: "", url: getURL("usa/chair.JPG") },
  { location: "Havana, Cuba", caption: "", url: getURL("usa/cuba.JPG") },
  { location: "San Francisco, CA", caption: "", url: getURL("usa/bridge.JPG") },
  { location: "San Francisco, CA", caption: "", url: getURL("usa/forest.JPG") },
  { location: "Los Angeles, CA", caption: "", url: getURL("usa/la.JPG") },

  { location: "Los Angeles, CA", caption: "", url: getURL("usa/outside.JPG") },
  { location: "Los Angeles, CA", caption: "", url: getURL("usa/window.JPG") }
];

export const japanImages = [
  {
    location: "Shinjuku",
    caption: "",
    url: getURL("japan/lights.JPG")
  },
  {
    location: "Hanshin",
    caption: "",
    url: getURL("japan/baseball.JPG")
  },
  {
    location: "Travelling through Tokyo",
    caption: "",
    url: getURL("japan/train2.JPG")
  },
  {
    location: "Shibuya",
    caption: "",
    url: getURL("japan/sushi.JPG")
  },
  {
    location: "Shinjuku",
    caption: "",
    url: getURL("japan/police.JPG")
  },
  {
    location: "Travelling through Tokyo",
    caption: "",
    url: getURL("japan/insidetrain.JPG")
  },
  {
    location: "Shinjuku",
    caption: "",
    url: getURL("japan/yodo.JPG")
  },
  {
    location: "Tokyo Station",
    caption: "",
    url: getURL("japan/train.JPG")
  }
];
