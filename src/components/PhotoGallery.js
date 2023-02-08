import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/photoGallery.module.scss"

const wrapper = {
  width: "100vw",
}

export default function PhotoGallery({ wrapperClasses, textClasses, display }) {
  return (
    <div className="container-fluid pt-5">
      <div className={`${wrapperClasses} row d-flex align-items-center`}>
        <span
          className={`${textClasses} ${styles.halfPill} col-auto fw-bold  px-5 py-2`}
        >
          Photo Gallery
        </span>
        <span
          className={`${display} col-auto fw-bold btn btn-dark shadow rounded-pill me-5`}
        >
          View All
        </span>
      </div>
      <div className="row justify-content-around pt-5">
        <div className="col-4 p-0 d-flex justify-content-center align-items-center ">
          <div className="bg-white rounded m-2">
            <StaticImage
              src="../images/gallery/photos/DSC08083.JPG"
              alt="gallery pic"
              className="rounded m-2"
            />
          </div>
        </div>
        <div className="col-4 bg-light p-2 rounded d-flex justify-content-center align-items-center">
          <StaticImage
            src="../images/gallery/photos/DSC08190.JPG"
            alt="gallery pic"
            className="rounded shadow"
          />
        </div>
        <div className="col-4 p-0 rounded d-flex justify-content-center align-items-center">
          <div className="bg-white rounded m-2">
            <StaticImage
              src="../images/gallery/photos/DSC08221.JPG"
              alt="gallery pic"
              className="rounded m-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
