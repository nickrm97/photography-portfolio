import React, { Component } from "react";
import images from "./mockImages";
import Image from "./Image";

interface AppState {
  themes: string[];
}

interface ImageType {
  themes: string[];
  caption: string;
  url: string;
}

class App extends Component<{}, AppState> {
  state = {
    themes: ["iceland", "amsterdam"]
  };

  componentDidMount(): void {}

  renderTitle() {
    const { themes } = this.state;

    if (themes.length === 0) {
      return <h1>Pictures.</h1>;
    }
    return <h1>{themes.toString().replace(",", " x ")}</h1>;
  }

  themeInState = (theme: string) => {
    return this.state.themes.includes(theme);
  };

  renderImages() {
    const filteredImages = images.filter(image =>
      image.themes.every(this.themeInState)
    );

    return filteredImages.map((image: ImageType) => (
      <Image caption={image.caption} url={image.url} />
    ));
  }
  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderImages()}
      </div>
    );
  }
}

export default App;
