import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/photoGallery.module.scss"

const wrapper = {
  width: "100vw",
}

export default function PhotoGallery({ wrapperClasses, textClasses, display }) {
  return (
    <div className="container-fluid pb-5">
      <div className="row justify-content-around pt-5">
        <div className="col-4 p-0 d-flex justify-content-center align-items-center ">
          <div className="bg-white rounded m-2">
            <StaticImage
              src="../images/gallery/photos/carousel-1.jpg"
              alt="gallery pic"
              className="rounded m-2"
            />
          </div>
        </div>
        <div className="col-4 bg-light p-2 rounded d-flex justify-content-center align-items-center">
          <StaticImage
            src="../images/gallery/photos/carousel-2.jpg"
            alt="gallery pic"
            className="rounded shadow"
          />
        </div>
        <div className="col-4 p-0 rounded d-flex justify-content-center align-items-center">
          <div className="bg-white rounded m-2">
            <StaticImage
              src="../images/gallery/photos/carousel-3.jpg"
              alt="gallery pic"
              className="rounded m-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
