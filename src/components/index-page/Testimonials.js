import React, { useState } from "react"
import PageData from "../../../content/testimonials.json"
import { useStaticQuery, graphql } from "gatsby"
import FullWidthCard from "../FullWidthCard"
import { GatsbyImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"

export default function Testimonials() {
  const [active, setActive] = useState(() => 0)
  const queryData = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/testimonials/" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                height: 100
                placeholder: DOMINANT_COLOR
                layout: CONSTRAINED
              )
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
    console.log(file)
    return file[0] !== undefined
      ? file[0].node.childImageSharp.gatsbyImageData
      : queryData.allFile.edges[0].node.childImageSharp.gatsbyImageData
  }

  return (
    <div className="container smooth-transition py-5">
      <FullWidthCard
        wrapperClasses="fade"
        img={getImageByName(PageData[active].img)}
        text={PageData[active].text}
        name={PageData[active].name}
        designation={PageData[active].designation}
      />
      <div className="row pt-5">
        <div className="d-flex justify-content-center gap-3 bg-black py-3 rounded-4">
          {PageData.map((data, index) => {
            return (
              <div
                key={uuidv4()}
                className={`rounded-circle ${
                  active === index
                    ? "bg-dark border border-light fade"
                    : "bg-light"
                }`}
                style={{ height: "1rem", width: "1rem" }}
                onClick={() => setActive(() => index)}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
