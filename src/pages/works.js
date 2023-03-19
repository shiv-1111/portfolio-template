import React from "react"
import Layout from "../components/layout"
import HeroCarousel from "../components/HeroCarousel"
import Awards from "../components/works-page/Awards"
import Work from "../components/index-page/Work"
import FullWidthCard from "../components/FullWidthCard"
import FieldCards from "../components/index-page/FieldCards"
import Footer from "../components/Footer"

export default function works() {
  return (
    <Layout>
      {/* <HeroCarousel /> */}
      <Awards />
      <FieldCards />
      <Work />
      <div className="container py-5">
        <FullWidthCard
          wrapperClasses="fade"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, error esse? Doloribus, facilis saepe molestiae excepturi dignissimos fuga ipsa voluptatibus numquam earum facere cupiditate in ad. Repellendus, cumque earum! Autem?"
          name="Mr. John Doe"
          designation="Vice-Chancellor"
        />
      </div>
      <Footer />
    </Layout>
  )
}
