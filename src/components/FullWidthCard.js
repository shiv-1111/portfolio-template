import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

export default function FullWidthCard({
  wrapperClasses,
  name,
  designation,
  text,
  img,
}) {
  return (
    <div className={`row ${wrapperClasses} py-5`}>
      <div className="col-md-6 p-3">
        <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
          <div className="border border-2 border-dark rounded-circle">
            {img ? (
              <GatsbyImage image={img} alt="" className="rounded-circle m-2" />
            ) : (
              <StaticImage
                src="../images/testimonials/estimonials1.png"
                alt=""
                height={100}
                className="rounded-circle m-2"
              />
            )}
          </div>
          <div className="fw-bold text-center">
            <p className="fs-5 m-auto pb-2">{name}</p>
            <p className="fs-6 m-auto">{designation}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 bg-black rounded shadow border p-5 d-flex justify-content-center align-items-center">
        <p className="fw-bold m-auto text-light">{`"${text}"`}</p>
      </div>
    </div>
  )
}
