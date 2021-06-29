import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "./Home.css";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo, onClick }) => (
      <div className="photo-container">
        <img
          className="photo"
          {...photo}
          onClick={event => {
            onClick(event, { photo, index });
          }}
          alt="alt"
        />
        <div className="photo-description">{photo.description}</div>
      </div>
    ),
    []
  );

  return (
    <div className="home-container">
      <Gallery
        direction={"column"}
        columns={1}
        photos={photos}
        onClick={openLightbox}
        renderImage={imageRenderer}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Home;
