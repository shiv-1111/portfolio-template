import React from "react"
import { Link } from "gatsby"

import { GrDirections } from "@react-icons/all-files/gr/GrDirections"
import * as Styles from "../styles/navigator.module.scss"

export default function Navigator() {
  return (
    <div className={`${Styles.wrapper} position-fixed`}>
      <div className={`${Styles.myContainer} rounded-circle`}>
        <div className="h-100 rounded-circle d-flex align-items-center justify-content-center my-bg-blue fs-1 position-relative">
          <GrDirections />
          <div className="position-absolute end-0 bottom-0 w-100 h-100">
            <div
              className={`position-relative h-100 w-100 ${Styles.navLinksWRapper}`}
            >
              <div className="position-absolute end-100 top-50 px-5">
                <Link className={`btn me-5 fw-bold ${Styles.bgWhite}`} to="/">
                  Home
                </Link>
              </div>
              <div className="position-absolute end-100 bottom-50 px-3 py-2">
                <Link
                  className={`btn mx-5 fw-bold ${Styles.bgWhite}`}
                  to="/works"
                >
                  Works
                </Link>
              </div>
              <div className="position-absolute end-100 bottom-100">
                <Link
                  className={`btn my-5 mx-3 fw-bold ${Styles.bgWhite}`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </div>
              <div className="position-absolute end-0 bottom-100 py-5">
                <Link
                  className={`btn my-5 fw-bold ${Styles.bgWhite}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
