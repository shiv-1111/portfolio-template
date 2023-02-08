import React from "react"
import Layout from "../components/layout"
import PhotoGallery from "../components/PhotoGallery"
import GalleryContainer from "../components/GalleryContainer"
import Footer from "../components/Footer"

export default function gallery() {
  return (
    <Layout>
      <PhotoGallery
        display="d-none"
        wrapperClasses="justify-content-start"
        textClasses="fw-4"
      />
      <GalleryContainer />
      <Footer />
    </Layout>
  )
}
