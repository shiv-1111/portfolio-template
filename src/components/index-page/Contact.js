import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import FormComponent from "../FormComponent"

export default function Contact() {
  return (
    <section className="container">
      <div className="row">
        {/* form component  */}
        <div className="col-md-6 col-10 m-auto p-2 p-md-4 d-flex align-items-center">
          <FormComponent />
        </div>
        {/* map */}
        <div className="col-md-6 col-10 m-auto p-md-4">
          <div>
            <StaticImage
              src="../../images/carousel-image/carousel-2.jpg"
              alt=""
              className="rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
