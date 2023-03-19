import React, { useState } from "react"
import Modal from "./Modal"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import PhotoGallery from "./PhotoGallery"
import { auto } from "@popperjs/core"

export default function GalleryContainer() {
  const [activeClasses, setActiveClasses] = useState(
    () => "overflow-hidden justify-content-center"
  )

  const [viewAllDisplayStatus, setViewAllDisplayStatus] = useState(() => "")

  const [modalData, setModalData] = useState(() => "")

  const [modalDisplay, setModalDisplay] = useState(() => "d-none")

  const data = useStaticQuery(graphql`
    query getImages {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)/" }
          relativeDirectory: { regex: "/photos/" }
        }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.33, backgroundColor: "grey")
            }
          }
        }
      }
    }
  `)

  const handleClick = () => {
    setActiveClasses(() => "flex-wrap justify-content-center mx-5")
    setViewAllDisplayStatus("d-none")
  }

  const handlePictureClick = imageObj => {
    setModalData(imageObj)
    setModalDisplay("d-block")
  }

  const upliftState = status => {
    setModalDisplay(status)
  }

  return (
    <div className="container-fluid py-5">
      <div className={`d-flex align-items-center justify-content-between`}>
        <span className={`fw-bold bg-black text-white px-4 py-2 rounded`}>
          Photo Gallery
        </span>

        <span className={`text-end py-2 ${viewAllDisplayStatus}`}>
          <button
            type="button"
            className="fw-bold rounded"
            onClick={handleClick}
          >
            View All
          </button>
        </span>
      </div>
      <PhotoGallery />
      <div>
        <Modal
          data={modalData}
          displayClass={modalDisplay}
          upliftState={upliftState}
        />
      </div>
      <div
        className={`d-flex gap-5 ${activeClasses} overflow-auto py-5`}
        style={{ maxHeight: "70vh" }}
      >
        {data.allFile.edges.map(imageFile => {
          return (
            <div
              key={imageFile.node.id}
              style={{ minWidth: "25vw", width: "25vw" }}
              onClick={() =>
                handlePictureClick(
                  imageFile.node.childImageSharp.gatsbyImageData
                )
              }
              className="border border-light rounded border-4"
            >
              <GatsbyImage
                image={imageFile.node.childImageSharp.gatsbyImageData}
                alt="gallery images"
                className="rounded"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
