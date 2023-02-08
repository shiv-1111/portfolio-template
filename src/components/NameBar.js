import React from "react"
import { v4 as uuid } from "uuid"
import Pagedata from "../../content/namebar.json"

import { StaticImage } from "gatsby-plugin-image"

export default function NameBar() {
  // generate id as functin in order to create unique id's otherwise only one unique id will be created
  const generateID = () => {
    return uuid().slice(0, 8)
  }
  // const smallID = generateID.slice(0,4);
  return (
    <section
      className="container-fluid position-relative bg-light"
      style={{ minHeight: "20vh" }}
    >
      <div className="row position-relative">
        <div className="col-10 text-center m-auto">
          <h1 className="display-6 text-black pt-3 fw-semibold text-uppercase position-sticky top-0 bg-light rounded">
            {Pagedata.name}
          </h1>
          <p className="shadow rounded text-muted mx-auto p-2">
            {Pagedata.designations.map((designation, index, arr) => (
              <small
                className={`text-capitalize fw-semibold ${
                  index !== arr.length - 1
                    ? "border-end border-dark border-2 pe-2 me-2"
                    : ""
                }`}
                key={generateID()}
              >
                {designation}
              </small>
            ))}
          </p>
          <p>
            {Pagedata.workFields.map((fields, index, arr) => (
              <small
                className={`text-uppercase my-text-blue fw-semibold ${
                  index !== arr.length - 1
                    ? "border-end border-dark border-2  pe-2 me-2"
                    : ""
                }`}
                key={generateID()}
              >
                {fields}
              </small>
            ))}
          </p>
        </div>
      </div>
      <div
        className="position-absolute start-0 w-100 top-100"
        style={{ zIndex: 100, height: "2vh" }}
      >
        <div className="h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <StaticImage
            src="../../src/images/client-icons/indiaFlag.svg"
            alt="indian flag"
            className="float-end"
          />
        </div>
      </div>
    </section>
  )
}
