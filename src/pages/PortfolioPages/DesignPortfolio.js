import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { designData } from "../../utils/data/DesignData";
import { videoData } from "../../utils/data/DesignData";

function DesignPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages = Object.entries(designData).flatMap(([category, items]) =>
    items.map((item, index) => ({
      ...item,
      category,
      index,
    }))
  );

  const allVideos = Object.entries(videoData).flatMap(([category, items]) =>
    items.map((item, index) => ({
      ...item,
      category,
      index,
    }))
  );

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div>
      <div className="text-center design-nav">
        <a
          className="design-nav-item"
          href="#illustrations"
        >
          Illustrations
        </a>
        /
        <a className="design-nav-item" href="#graphics" >
          Graphics
        </a>
        /
        <a className="design-nav-item" href="#videos">
          Videos
        </a>
      </div>
      <div>
        {Object.entries(designData).map(([category, items]) => (
          <div key={category} className="category-section">
            <h4 className="heading-italic fw-bold mt-4 mb-3 text-center" id={category}>
              {capitalizeCategory(category)}
            </h4>
            <div className="design-container">
              {items.map((item, index) => {
                const flatIndex = allImages.findIndex(
                  (img) => img.category === category && img.index === index
                );
                return (
                  <div
                    key={item.id}
                    className="design-item"
                    style={{
                      padding: 0, // Remove any padding from the container
                      overflow: "hidden", // Prevents the scaled image from overflowing outside its container
                    }}
                  >
                    <span class="loader"></span>
                    <img
                      src={item.image}
                      srcSet={`
    ${item.image} 800w,
    ${item.image.replace(/\.([^.]+)$/, "-medium.$1")} 480w,
    ${item.image.replace(/\.([^.]+)$/, "-small.$1")} 320w
  `}
                      sizes="(max-width: 600px) 320px,
         (max-width: 1200px) 480px,
         800px"
                      alt={item.description}
                      className="design-img"
                      
                      onClick={() => handleImageClick(flatIndex)}
                      style={{
                        transform: `scale(${item.scale})`,
                        width: "100%",
                        display: "block",
                      }}
                      onLoad={(e) => {
                        // Hide loader when image is loaded
                        e.target.parentElement.querySelector(".loader").style.display = "none";
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          centered
          dialogClassName="modal-90w"
          className="90w"
        >
          <Modal.Body
            className="p-0"
            style={{ maxHeight: "90vh", overflow: "hidden" }}
          >
            <Carousel
              activeIndex={activeIndex}
              onSelect={handleCarouselSelect}
              interval={null}
              indicators={false}
              controls={true}
              slide
            >
              {allImages.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                    }}
                  >
                    <img
                      className="d-block"
                      src={item.image}
                      alt={item.description}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "90vh",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>

      <div className="mt-4">
        <h4 className="heading-italic" id="videos">
          Video Production
        </h4>
        <div className="mb-3 caption">
          Serving as the complete media production team, I developed, filmed,
          and edited these projects. Select archival B-roll complemented my
          original content.{" "}
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {allVideos.map((item, index) => (
            <div className="col">
              <div className="video-container">
                <div key={index} className="ratio ratio-16x9">
                  <iframe
                    className="rounded-1"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesignPortfolio;
