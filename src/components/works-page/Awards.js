import React from "react"
import data from "../../../content/awards.json"

export default function Awards() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="py-2 px-md-4 px-2 ">
            <h2 className="fw-bold fs-5 text-uppercase text-center">
              - Awards and Recognition -
            </h2>
            {/* <button className="btn  border-dark py-0">View All</button> */}
          </div>
        </div>
        <div className="row pt-5">
          {data.map((item, index) => {
            return (
              <div className="mb-5 mx-auto d-flex gap-5 col-5" key={index + 1}>
                <div className="rounded d-flex align-items-center my-bg-blue h-75">
                  <span className="fw-bold fs-1 text-white ps-5 pe-2 m-auto">
                    {index + 1}
                  </span>
                </div>
                <div className="d-flex flex-column justify-content-center border border-success rounded px-3 shadow-sm w-100">
                  <h3 className="fs-6 fw-bold my-text-blue my-auto border-bottom py-2">
                    {item.name}
                  </h3>
                  <p className="my-auto opacity py-2">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
