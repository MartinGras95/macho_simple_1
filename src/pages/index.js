import React from "react"

import Layout from "../components/layout"
import Jumbo from "../components/jumbotron"
import About from "../components/about"
import Footer from "../components/footer"

import "../styles/global.css"


const IndexPage = () => {
    return (
        <Layout>
            <Jumbo />
            <About />
            <Footer />
        </Layout>
    )
}

export default IndexPage
