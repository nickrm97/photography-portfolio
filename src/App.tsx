import React, { Component } from "react";
import images from "./mockImages";
import Image from "./Image";

interface ImageType {
  location: string;
  caption: string;
  url: string;
}

class App extends Component {
  renderImages() {
    return images.map((image: ImageType) => (
      <Image
        location={image.location}
        caption={image.caption}
        url={image.url}
        key={image.url}
      />
    ));
  }
  render() {
    return <div className="a">{this.renderImages()}</div>;
  }
}

export default App;
