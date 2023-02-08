import React from "react"
import info from "../../../content/namebar.json"
import pageData from "../../../content/intro.json"
import img from "../../images/testimonials/estimonials1.png"
import instaImg from "../../images/social-icons/instagram.png"
import facebookImg from "../../images/social-icons/facebook.png"
import youtubeImg from "../../images/social-icons/youtube.png"

export default function Introduction() {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6 d-flex flex-column gap-3 justify-content-center">
            <div className="">
              <img src={img} alt="" width="100px" height="100px" />
            </div>
            <div className="d-flex flex-column justify-content-center gap-2">
              <h1 className="fs-5 fw-bold my-text-blue">{info.name}</h1>
              <p className="m-0">
                {info.designations.map((item, i) => {
                  return (
                    <span
                      className={`fw-bold ${
                        i !== info.designations.length - 1
                          ? "border-end border-dark pe-2 me-2"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                  )
                })}
              </p>
              <p>
                {info.workFields.map((item, i) => {
                  return (
                    <span
                      className={`fw-bold ${
                        i !== info.workFields.length - 1
                          ? "border-end border-dark pe-2 me-2"
                          : ""
                      }`}
                    >
                      {item}
                    </span>
                  )
                })}
              </p>
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center gap-3">
            <div>
              <h2 className="fw-bold my-text-blue">About</h2>
              {pageData.map((item, id) => {
                return (
                  <ul className="p-0" key={id}>
                    <p className="fw-bold">{item.heading}</p>
                    {item.list.map((item, i, arr) => (
                      <li
                        key={i}
                        className={`${i !== arr.length - 1 ? "pb-2" : ""}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>
            {/* social media links */}
            <div className="d-flex justify-content-start">
              <div className="d-flex w-50 gap-4 justify-content-start">
                <div>
                  <img
                    src={facebookImg}
                    alt=""
                    className="img-fluid"
                    width={36}
                  />
                </div>
                <div>
                  <img src={instaImg} alt="" className="img-fluid" width={36} />
                </div>
                <div>
                  <img
                    src={youtubeImg}
                    alt=""
                    className="img-fluid"
                    width={36}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
