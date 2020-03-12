import React, { Component } from "react";
import Image from "./Image";

export default class Theme extends Component {
  render() {
    const { id, title, description, colours, images } = this.props;
    return (
      <>
        <div id={id} className="theme-container">
          <div className="theme-text">
            <div className="theme-title">{title}</div>
            <div className="colours">
              {colours.map(colour => (
                <div className="colour" style={{ background: colour }}>
                  {" "}
                </div>
              ))}
            </div>
            <div className="theme-description">{description}</div>
          </div>
        </div>
        {images.map(image => (
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
