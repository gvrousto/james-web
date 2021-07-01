import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import { useLocation } from "react-router-dom";
import { photos } from "./photos";
import "./Home.css";

// X home page photos narrower
// X email click opens email blue w underline
// X vertically center about and contact on desktop
// X bring contact slightly down on mobile

function Home() {
  const [filter, setFilter] = useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState(photos);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/objects") {
      setFilter(1);
    } else if (location.pathname === "/fashion") {
      setFilter(2);
    } else if (location.pathname === "/points-of-sail") {
      setFilter(3);
    } else {
      setFilter(0);
    }
  }, [location]);

  useEffect(() => {
    if (filter === 0) {
      setSelectedPhotos(photos);
    } else {
      setSelectedPhotos(
        photos.filter(photo => {
          return photo.filter === filter;
        })
      );
    }
  }, [filter, setSelectedPhotos]);

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
    <div className="home-container">
      <Gallery
        direction={"column"}
        columns={1}
        photos={selectedPhotos}
        renderImage={imageRenderer}
      />
    </div>
  );
}

export default Home;
