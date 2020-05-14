import React, { Component } from "react";
import Image from "./Image";
import Video from "./Video";

export default class Theme extends Component {
  render() {
    const { id, title, description, colours, images, videos } = this.props;
    return (
      <>
        <div id={id} className="theme-container">
          <div className="theme-text">
            <div className="theme-title">{title}</div>
            <div className="colours">
              {colours.map((colour) => (
                <div className="colour" style={{ background: colour }}>
                  {" "}
                </div>
              ))}
            </div>
            <div className="theme-description">{description}</div>
          </div>
        </div>
        {videos
          ? videos.map((video) => (
              <Video
                location={video.location}
                caption={video.caption}
                url={video.url}
                key={video.url}
              />
            ))
          : null}
        {images.map((image) => (
          <Image
            location={image.location}
            caption={image.caption}
            url={image.url}
            key={image.url}
          />
        ))}
      </>
    );
  }
}
