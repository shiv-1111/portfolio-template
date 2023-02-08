import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BigCard({
  classes,
  img,
  title,
  text,
  btnClasses,
  btnText,
}) {
  return (
    <div className={`${classes || "col-md-3 col-5 bg-light"}`}>
      <div>
        <div style={{ minHeight: "10vh" }}>
          <GatsbyImage image={img} alt="" />
        </div>
        <p className="fs-5 fw-semibold">{title}</p>
        <p>{text}</p>
      </div>
      <div className="">
        <button type="button" className={`${btnClasses}`}>
          {btnText}
        </button>
      </div>
    </div>
  )
}
