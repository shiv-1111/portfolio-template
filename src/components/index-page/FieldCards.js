import React from "react"
import PageData from "../../../content/fieldCards.json"
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from "uuid"
import { GatsbyImage } from "gatsby-plugin-image"

export default function FieldCards() {
  const queryData = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { regex: "/field-cards-images/" } }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(height: 100)
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
    <div className="container-xxl mt-1 pb-5">
      <div className="row pb-5">
        <div className="text-center my-5">
          <h2 className="d-inline py-2 px-4 text-white fw-bold bg-black fs-4 text-uppercase rounded">
            - Fields of Work -
          </h2>
        </div>
      </div>
      <div className="row container-md m-auto justify-content-center">
        {PageData.map(data => {
          return (
            <div
              className="col-2 bg-light rounded-4 text-center py-3 mb-5 mx-5 border-blue-dashed"
              key={uuidv4()}
            >
              <div className="mb-2">
                <GatsbyImage image={getImageByName(data.img)} alt="" />
              </div>
              <div>
                <p className="fw-bold">{data.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
