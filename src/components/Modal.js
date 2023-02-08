import React from "react"
import * as styles from "../styles/modal.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle"

const modalStyle = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: 1,
}

const modalDiv = {
  //   maxWidth: "80%",
  aspectRatio: 4 / 3,
  maxHeight: "90%",
  backgroundColor: "rgb(256, 256, 256)",
}

const modalCloseBtn = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 999,
}

export default function Modal({ data, displayClass, upliftState }) {
  return (
    <div
      style={modalStyle}
      className={`d-flex justify-content-center align-items-center ${displayClass}`}
    >
      <div
        style={modalDiv}
        className="position-relative rounded shadow overflow-hidden"
      >
        <div
          style={modalCloseBtn}
          className={`text-light rounded-circle fs-2 d-flex position-absolute top-0 end-0 m-1 shadow-lg p-1 ${styles.closeBtn}`}
          onClick={() => upliftState("d-none")}
        >
          <AiOutlineCloseCircle />
        </div>
        {data !== "" && <GatsbyImage image={data} alt="modal image" />}
      </div>
    </div>
  )
}
