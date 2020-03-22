import React from 'react'

import { Jumbotron } from 'react-bootstrap'
import jumboStyles from "./jumbo.module.scss"

const Jumbo = () => {
    return (
        <Jumbotron className={jumboStyles.container}>
            <h1>Get Baking!</h1>
            <p>
                Get the message across to your customers as soon as they enter your website!
            </p>
        </Jumbotron>
    )
}

export default Jumbo