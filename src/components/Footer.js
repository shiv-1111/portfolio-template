import React from "react"
import * as styles from "../styles/footer.module.scss"
import { Link } from "gatsby"
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <footer className={` container-fluid bg-black`}>
      <div className="container-xxl">
        <div className="row justify-content-md-between justify-content-center align-items-center">
          {/* <div className="col-md-4 col-10 p-2 p-md-5 text-start">
            <div className="text-center">
              <StaticImage
                src="../images/profile-pic.jpeg"
                alt="logo"
                className="bg-light rounded-circle"
                height={100}
                width={100}
              />
            </div>
            <p className="text-light text-center pt-2 opacity-75">
              <small>
                Casting Design and Simulation, Smart Manufacturing,
                Remanufacturing, Process Optimization, Data Analytics and
                Machine Learning, Product design & development, Mold and Core
                making.
              </small>
            </p>
          </div> */}
          <div className="col-md-4 col-10 p-2 p-md-5 d-flex justify-content-around align-items-center text-justify">
            <div className="d-flex justify-content-around gap-3 align-items-start flex-md-column">
              <div>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/gallery" className="text-white text-decoration-none">
                  Gallery
                </Link>
              </div>
              <div>
                <Link to="/works" className="text-white text-decoration-none">
                  My Works
                </Link>
              </div>
              <div>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 p-2 p-md-5 text-center d-flex align-items-center flex-md-column justify-content-center">
            <div className="d-flex align-items-start flex-md-column justify-content-around gap-4">
              <div>
                <Link to="/contact" className="btn border-white text-white">
                  Connect With Me
                </Link>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <AiOutlineMail className="text-white" />
                </div>
                <p className="text-white">khandelwal.iit@gmail.com</p>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <IoMdCall className="text-white" />
                </div>
                <div>
                  <p className="text-white">09167481947 (M), 09214463565</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
