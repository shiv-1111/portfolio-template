import React from "react"
import PageData from "../../../content/work.json"
import { useStaticQuery, graphql } from "gatsby"
import BigCard from "../BigCard"
import { v4 as uuidv4 } from "uuid"

export default function Work() {
  const queryData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/work-section/" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData
              id
            }
          }
        }
      }
    }
  `)

  const getImageByName = fileName => {
    const file = queryData.allFile.edges.filter(
      edge => edge.node.base === fileName
    )
    return file[0] !== undefined
      ? file[0].node.childImageSharp.gatsbyImageData
      : queryData.allFile.edges[0].node.childImageSharp.gatsbyImageData
  }

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="bg-black text-white">
          <h2 className="ps-md-4 m-auto py-4 fw-bold fs-5 text-uppercase my-text-blue">
            My Works
          </h2>
        </div>
      </div>
      <div className="row overflow-hidden justify-content-center">
        <div className="d-flex gap-5 overflow-auto py-4 ps-md-4 customScroll">
          {PageData.map(data => {
            return (
              <BigCard
                key={uuidv4()}
                classes="col-2 bg-light rounded shadow-sm py-3 text-center border p-2 d-flex flex-column justify-content-between"
                text={data.text}
                title={data.title}
                img={getImageByName(data.img)}
                btnClasses="btn border-dark px-3 rounded-pill"
                btnText={data.btnTxt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
