import React from 'react';
import Slider from "react-slick";
import './App.css';
import './Generator.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Resources() {


  const carouselSettings = {
    dots: true,              // Show dots below the carousel
    infinite: false,         // Stops the carousel after swiping through all cards
    speed: 500,              // Transition speed
    slidesToShow: 1,         // Number of cards to show at once
    slidesToScroll: 1,       // Number of cards to scroll per swipe
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="page-wrapper">
      {/* Header Section */}
      <section className="header-section text-center">
        <div className="container">
          <h1 className="main-title">Resources</h1>
          <p className="subtitle">Connecting People, Ideas, and Resources for Financial Growth</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container content-section">
        {/* Carousel Section */}
        <Slider {...carouselSettings}>
          <div className="card carousel-card">
            <div className="card-body">
              <h2 className="card-title">Financial Mentorship Program</h2>
              <p className="textSection">
                Learn the basics of financial literacy, budgeting, and saving for long-term goals.
              </p>
            </div>
          </div>

          <div className="card carousel-card">
            <div className="card-body">
              <h2 className="card-title">Card 2: Community Support</h2>
              <p className="textSection">
                Get connected to community programs and resources that foster financial independence.
              </p>
            </div>
          </div>

          <div className="card carousel-card">
            <div className="card-body">
              <h2 className="card-title">Card 3: Career Growth</h2>
              <p className="textSection">
                Explore career opportunities and mentorship programs to advance your professional journey.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

// Custom arrow components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "20px",
        height: "20px",
        borderTop: "2px solid #000", // Top part of the arrow
        borderRight: "2px solid #000", // Right part of the arrow
        transform: "rotate(45deg)", // Rotate to form an arrow
        cursor: "pointer",
        marginRight: "10px", // Add some spacing
      }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow (single line)
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        
        width: "20px",
        height: "20px",
        borderTop: "2px solid #000", // Top part of the arrow
        borderLeft: "2px solid #000", // Left part of the arrow
        transform: "rotate(-45deg)", // Rotate to form an arrow
        cursor: "pointer",
        marginLeft: "10px", // Add some spacing
      }}
      onClick={onClick}
    />
  );
}

export default Resources;
