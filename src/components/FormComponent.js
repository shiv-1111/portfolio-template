import React, { useState } from "react"
import PageData from "../../content/formContent.json"

export default function FormComponent({ classes }) {
  const [nameVal, setNameVal] = useState(() => "")
  const [companyVal, setCompanyVal] = useState(() => "")
  const [emailVal, setEmailVal] = useState(() => "")
  const [phoneVal, setPhoneVal] = useState(() => "")
  const [messageVal, setMessageVal] = useState(() => "")
  return (
    // classes are passed down as props to wrapper element
    <div className={classes}>
      <div>
        <h2 className="text-uppercase fw-bold fs-4 text-white">
          {PageData.title}
        </h2>
        {PageData.text ? (
          <p className="text-white opacity-50 fs-6 py-4">{PageData.text}</p>
        ) : null}
      </div>
      <div>
        <form action="#" className="row d-flex flex-column gap-md-4 gap-2">
          <div className="d-flex flex-md-row flex-column gap-md-4 gap-2">
            <input
              type="text"
              name="name"
              value={nameVal}
              placeholder="Full Name*"
              className="form-control border-dark shadow-sm p-3"
              onChange={event => setNameVal(event.target.value)}
            />
            <input
              type="text"
              name="company"
              value={companyVal}
              placeholder="Company name*"
              className="form-control border-dark shadow-sm p-3"
              onChange={event => setCompanyVal(event.target.value)}
            />
          </div>
          <div className="d-flex flex-md-row flex-column gap-md-4 gap-2">
            <input
              type="text"
              name="email"
              value={emailVal}
              placeholder="Email address*"
              className="form-control border-dark shadow-sm p-3"
              onChange={event => setEmailVal(event.target.value)}
            />
            <input
              type="text"
              name="phone"
              value={phoneVal}
              placeholder="Phone number*"
              className="form-control border-dark shadow-sm p-3"
              onChange={event => setPhoneVal(event.target.value)}
            />
          </div>
          <div>
            <textarea
              name="message"
              className="w-100 form-control border-dark shadow-sm"
              placeholder="Message*"
              rows="5"
              value={messageVal}
              onChange={e => setMessageVal(e.target.value)}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn rounded border-dark my-text-blue w-100 fs-6 fw-semibold shadow">
              {PageData.btnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
