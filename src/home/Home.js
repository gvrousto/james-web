import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { useLocation } from "react-router-dom";
import { photos } from "./photos";
import "./Home.css";

// X home page photos narrower
// X email click opens email blue w underline
// X vertically center about and contact on desktop
// X bring contact slightly down on mobile
// scroll to top on change of filter

function Home() {
  const [filter, setFilter] = useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState(photos);

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <div className="photo-container">
        <a
          className="photo-link"
          href={photo.galleryLink}
          target={"_blank"}
          rel="noreferrer"
        >
          <img className="photo" {...photo} alt="alt" />
        </a>
        <div className="description-container">
          <div className="photo-piece-name">{photo.pieceName}</div>
          <div className="photo-description">{photo.description}</div>
          <div className="photo-dimensions">{photo.dimensions}</div>
        </div>
      </div>
    ),
    []
  );
  return (
    <Gallery
      direction={"column"}
      columns={1}
      photos={selectedPhotos}
      renderImage={imageRenderer}
    />
  );
}

export default Home;
