import React from 'react'

import { Carousel } from 'react-bootstrap'
import testimonialStyles from '../styles/testimonials.module.scss'

import slide01 from "../images/slide.jpg"
import slide02 from "../images/slide.jpg"
import slide03 from "../images/slide.jpg"

const Testimonials = () => {
    return (
        <div className={ testimonialStyles.container }>
                <Carousel controls={false} indicators={false} interval={5000}>
                    <Carousel.Item>
                        <img 
                        className={`d-block w-100 ${ testimonialStyles.slide }`}
                        src={slide01} alt="first slide" 
                        />
                        <Carousel.Caption style={{color:"#212529"}}>
                            <h3>“Great Advice!”</h3>
                            <p>I was given great tips of marketing and sales!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className={`d-block w-100 ${ testimonialStyles.slide }`}
                        src={slide02} alt="second slide" 
                        />
                        <Carousel.Caption style={{color:"black"}}>
                            <h3>“Recommend 100%”</h3>
                            <p>Matt, one of the advisors was kind and helpful :)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                        className={`d-block w-100 ${ testimonialStyles.slide }`}
                        src={slide03} alt="third slide" 
                        />
                        <Carousel.Caption style={{color:"black"}}>
                            <h3>“Easy process”</h3>
                            <p>It was very easy to find all the information I needed!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Testimonials