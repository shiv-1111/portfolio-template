import React from "react"
import PageData from "../../../content/journey.json"
import animationData1 from "../../../animations/school.json"
import animationData2 from "../../../animations/college.json"
import animationData3 from "../../../animations/office.json"
import Lottie from "react-lottie"

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: animationData3,
  renderer: "svg",
}
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  renderer: "svg",
}
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animationData1,
  renderer: "svg",
}
export default function Journey() {
  return (
    <section className="container-xxl mb-5">
      <div className="row pt-5 pb-2">
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div>
              <Lottie options={defaultOptions1} width={200} />
            </div>
            <ul className="text-dark p-0">
              <li className="fs-6">
                {PageData.bornText ? PageData.bornText : "Born in Bokaro"}
              </li>
              <li className="fs-6">
                Year : {PageData.born ? PageData.born : "lorem ipsum"}
              </li>
              <li className="fs-6">
                {PageData.bornText2 ? PageData.bornText2 : "lorem ipsum"}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 ">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div>
              <Lottie options={defaultOptions2} width={200} />
            </div>
            <ul className="text-dark p-0">
              <li className="fs-6">
                {PageData.degreeText ? PageData.degreeText : "Studied at XYZ"}
              </li>
              <li className="fs-6">
                Year : {PageData.degree ? PageData.degree : "2002"}
              </li>
              <li className="fs-6">
                {PageData.degreeText2
                  ? PageData.degreeText2
                  : "Percentage: 99%"}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3">
            <div>
              {/* {office} */}
              <Lottie options={defaultOptions3} width={200} />
            </div>
            <ul className="text-dark p-0">
              <li className="fs-6">
                {PageData.jobText ? PageData.jobText : "Works At Company"}
              </li>
              <li className="fs-6">
                Year : {PageData.job ? PageData.job : "Year: 2008"}
              </li>
              <li className="fs-6">
                {PageData.jobMarks ? PageData.jobMarks : "Percentage: 100%"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row bg-black shadow-sm text-center my-text-blue py-3 fw-bold">
        <div className="col-4">
          <span>{PageData.born ? PageData.born : "1994"}</span>
        </div>
        <div className="col-4">
          <span>{PageData.degree ? PageData.degree : "2013"}</span>
        </div>
        <div className="col-4">
          <span>{PageData.job ? PageData.job : "2021"}</span>
        </div>
      </div>
    </section>
  )
}
