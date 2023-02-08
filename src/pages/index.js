import * as React from "react"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HeroCarousel from "../components/HeroCarousel"
import Introduction from "../components/index-page/Introduction"
import Awards from "../components/works-page/Awards"
import Journey from "../components/index-page/Journey"
import FieldCards from "../components/index-page/FieldCards"
import SmallWorksSection from "../components/index-page/SmallWorksSection"
import Testimonials from "../components/index-page/Testimonials"
import Contact from "../components/index-page/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <HeroCarousel />
    <Introduction />
    <Journey />
    <Awards />
    <FieldCards />
    {/* <Work /> */}
    <SmallWorksSection />
    <Testimonials />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
