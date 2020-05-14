import React, { Component } from "react";
import { themes } from "./themes";
import Theme from "./Theme";
interface ImageType {
  location: string;
  caption: string;
  url: string;
}

interface ThemeType {
  id: string;
  title: string;
  description: string;
  colours: string[];
  images: ImageType[];
  videos: ImageType[];
}

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          {themes.map((theme: ThemeType) => (
            <Theme
              id={theme.id}
              key={theme.id}
              title={theme.title}
              description={theme.description}
              colours={theme.colours}
              images={theme.images}
              videos={theme.videos}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
