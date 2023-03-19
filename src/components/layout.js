import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Navbar from "./navbar"
import NameBar from "./NameBar"
import Navigator from "./Navigator"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0 styled-scrollbars bg-white">
      <Navigator />
      {/* <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <NameBar />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
