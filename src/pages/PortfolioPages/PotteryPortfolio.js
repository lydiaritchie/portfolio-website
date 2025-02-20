import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import potteryData from "../../utils/data/PotteryData";



function PotteryPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages = Object.entries(potteryData).flatMap(([category, items]) =>
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
    return category === "additionalWorks"
      ? category.charAt(0).toUpperCase() +
          category.slice(1, 10) +
          " " +
          category.slice(10)
      : category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div>
       <div className="text-center small design-nav">
        <a
          className="design-nav-item"
          href="#vases"
        >
          Vases
        </a>
         /
        <a className="design-nav-item" href="#mugs" >
          Mugs
        </a>
        /
        <a className="design-nav-item" href="#bowls">
          Bowls
        </a>
        /
        <a className="design-nav-item" href="#additionalWorks">
          Additional Works
        </a>
      </div>
      {Object.entries(potteryData).map(([category, items]) => (
        <div key={category} className="category-section">
          <div id={category}></div>
          <h4 className="heading-italic mt-4" >
            {capitalizeCategory(category)}
          </h4>
          <div className="pot-container">
            {items.map((item, index) => {
              const flatIndex = allImages.findIndex(
                (img) => img.category === category && img.index === index
              );
              return (
                <div key={item.id} className="pot-item">
                  <div class="loader"></div>
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
                    className="pot-image img-fluid"
                    loading="lazy"
                    onLoad={(e) => {
                      // Hide loader when image is loaded
                      e.target.parentElement.querySelector(".loader").style.display = "none";
                    }}
                    onClick={() => handleImageClick(flatIndex)}
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
        
        <Modal.Body className="p-0">
           {/* Close Button */}
           <button
            variant="link"
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              zIndex: 10,
              color: "#fff",
              fontSize: "1.5rem",
              background: "none",
              border: "none",
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            interval={null}
            indicators={false}
            controls={true}
            wrap={true}
            touch={true}
            slide
          >
            {allImages.map((item, idx) => (
              <Carousel.Item key={idx}>
                <div
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    className="d-block"
                    src={item.image}
                    alt={item.description}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "auto",
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PotteryPortfolio;
