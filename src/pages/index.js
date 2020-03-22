import React from "react"

import Layout from "../components/layout"
import Jumbo from "../components/jumbotron"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Footer from "../components/footer"

import "../styles/global.css"


const IndexPage = () => {
    return (
        <Layout>
            
            <Jumbo />
            <About />
            <Testimonials />
            <Footer />
        </Layout>
    )
}

export default IndexPage
