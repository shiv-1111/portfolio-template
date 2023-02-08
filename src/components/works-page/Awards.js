import React from "react"
import data from "../../../content/awards.json"

export default function Awards() {
  return (
    <section className="container pt-3">
      <div className="row">
        <div className="py-2 px-md-4 px-2 d-flex justify-content-between">
          <h2 className="my-auto  fw-bold fs-5 text-uppercase">
            Awards and Recognition
          </h2>
          <button className="btn  border-dark py-0">View All</button>
        </div>
      </div>
      <div className="row pt-5">
        {data.map((item, index) => {
          return (
            <div
              className="mb-5 w-75 m-auto d-flex gap-4 borderBlack ps-5"
              key={index + 1}
            >
              <div className="bg-black ms-5">
                <span className="fw-bold fs-3 text-light ps-5 pe-2 py-3 shadow">
                  {index + 1}
                </span>
              </div>
              <div className="">
                <h3 className="fs-6 fw-bold my-text-blue">{item.name}</h3>
                <p className="m-auto opacity">{item.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
