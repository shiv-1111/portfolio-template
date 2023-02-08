import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function HeroCarousel() {
  return (
    <div
      id="demo"
      className="container-fluid carousel slide px-0 position-relative overflow-hidden"
      data-bs-ride="false"
      style={{ maxHeight: "80vh" }}
    >
      {/* Indicators/dots  */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* The slideshow/carousel  */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <StaticImage
            src="../images/carousel-image/carousel-1.jpg"
            alt="Los Angeles"
            className="w-100"
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <StaticImage
            src="../images/carousel-image/carousel-2.jpg"
            alt="Chicago"
            className="w-100"
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <StaticImage
            src="../images/carousel-image/carousel-3.jpg"
            alt="New York"
            className="w-100"
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>

      {/* Left and right controls/icons  */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button> */}
    </div>
  )
}
