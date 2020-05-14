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
          <div className="videoWrapper">
            <iframe
              title={url}
              width="560"
              height="349"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="caption-container">
            <div>{caption || " "}</div>
            <div>{location}</div>
          </div>
        </div>
      </>
    );
  }
}
