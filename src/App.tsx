import React, { Component } from "react";
import images from "./mockImages";
import Image from "./Image";
import Welcome from "./Welcome";

interface AppState {
  currentImageIndex: number;
}

interface ImageType {
  location: string;
  caption: string;
  url: string;
}

class App extends Component<{}, AppState> {
  state = {
    currentImageIndex: 0
  };

  fetchNextImage = () => {
    const { currentImageIndex } = this.state;
    console.log(currentImageIndex);

    // Grab next element, or first element if we're at the end
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

    this.setState({ currentImageIndex: nextIndex });
  };

  render() {
    const { currentImageIndex } = this.state;
    if (currentImageIndex === -1) {
      return <Welcome />;
    }

    const currentImage = images[this.state.currentImageIndex];
    return (
      <>
        <button onClick={this.fetchNextImage}>Next image</button>
        <Image
          location={currentImage.location}
          caption={currentImage.caption}
          url={currentImage.url}
          key={currentImage.url}
        />
      </>
    );
  }
}

export default App;
