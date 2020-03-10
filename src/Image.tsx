import React from "react";

interface Props {
  caption: string;
  location: string;
  url: string;
}

export default class Image extends React.Component<Props, {}> {
  render() {
    const { caption, location, url } = this.props;

    return (
      <>
        <div className="photo-container">
          <img className="image" src={url} alt={caption} />
          {caption} {caption && location ? "-" : null} {location}
        </div>
      </>
    );
  }
}
