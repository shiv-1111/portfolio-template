import React from "react"
import PageData from "../../../content/work.json"
import { useStaticQuery, graphql } from "gatsby"
import BigCard from "../BigCard"
import { v4 as uuidv4 } from "uuid"

export default function SmallWorksSection() {
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
    <section className="container-xxl borderBlack">
      <div className="row">
        <div className="py-4 px-md-4 px-2 d-flex justify-content-between bg-black shadow-sm">
          <h2 className="my-auto my-text-blue fw-bold fs-5 text-uppercase ps-2">
            My works
          </h2>
          <button className="btn text-white border-light py-0">View All</button>
        </div>
      </div>
      <div className="row my-3 overflow-hidden mx-2 rounded">
        <div className="d-flex justify-content-center gap-5 py-3">
          {PageData.filter((item, index) => index < 3).map(data => {
            return (
              <BigCard
                key={uuidv4()}
                classes="col-3 border-dashed rounded-4 shadow py-3 mx-5 text-center p-2 d-flex flex-column justify-content-between"
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
    </section>
  )
}
