import React from "react";
import { urlPath } from "./mockImages";

interface Props {
  caption: String;
  url: String;
}

export default class Image extends React.Component<Props, {}> {
  render() {
    const { caption, url } = this.props;

    return (
      <div>
        <div className="picture-parent">
          <div className="picture">
            <img src={urlPath + url} />
          </div>
        </div>
        <div className="picture-caption">{caption || "Untitled"}</div>
      </div>
    );
  }
}
