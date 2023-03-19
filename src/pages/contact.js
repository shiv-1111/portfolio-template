import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
// import HeroCarousel from "../components/HeroCarousel"
import Contact from "../components/index-page/Contact"
import Footer from "../components/Footer"
export default function contact() {
  return (
    <Layout>
      {/* <HeroCarousel /> */}
      <Contact />
      <Footer />
    </Layout>
  )
}
