import React from "react";
import Image from "./Image";

const Gallery = (props) => {
  const { urls } = props;
  if (urls == null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
