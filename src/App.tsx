import React, { Component } from "react";
import images from "./mockImages";
import Image from "./Image";
import Welcome from "./Welcome";

interface AppState {
  showWelcome: boolean;
}

interface ImageType {
  location: string;
  caption: string;
  url: string;
}

class App extends Component<{}, AppState> {
  state = {
    showWelcome: false
  };

  render() {
    if (this.state.showWelcome) {
      return <Welcome />;
    }

    return (
      <>
        <div className="container">
          {images.map(image => (
            <Image
              location={image.location}
              caption={image.caption}
              url={image.url}
              key={image.url}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
