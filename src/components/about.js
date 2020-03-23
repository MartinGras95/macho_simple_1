import React from 'react'

import aboutStyles from "../styles/about.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

import { Carousel } from 'react-bootstrap'

import slide01 from "../images/slide.jpg"
import slide02 from "../images/slide.jpg"
import slide03 from "../images/slide.jpg"

const questionIcon = <FontAwesomeIcon icon={faQuestion} size="4x" />
const headsetIcon = <FontAwesomeIcon icon={faHeadset} size="4x" />
const actionIcon = <FontAwesomeIcon icon={faExclamation} size="4x" />



const About = () => {
    return (
        <div id="aboutsection" className={ aboutStyles.container }>
            <h2>What we do?</h2>
            <div className={ aboutStyles.content }>
                <p>Long boat chase Nelsons folly red ensign marooned gangplank barque parley hornswaggle fathom. Scuppers lookout black jack measured fer yer chains ahoy lugsail crow's nest heave down Jolly Roger hail-shot. Cackle fruit line chandler Shiver me timbers carouser jack topmast Buccaneer lee lookout. </p>
            </div>
            <div className={ aboutStyles.icons }>
                <div className= { aboutStyles.icon }>
                    {questionIcon}
                    Question?
                </div>
                <div className= { aboutStyles.icon }>
                    {headsetIcon}
                    Get in touch.
                </div>
                <div className= { aboutStyles.icon }>
                    {actionIcon}
                    Take Action!
                </div>
            </div>

            <Carousel controls={false} indicators={false} interval={5000}>
                    <Carousel.Item>
                        <img 
                        className={`d-block w-100 ${ aboutStyles.slide }`}
                        src={slide01} alt="first slide" 
                        />
                        <Carousel.Caption style={{color:"#212529"}}>
                            <h3>“Great Advice!”</h3>
                            <p>I was given great tips of marketing and sales!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className={`d-block w-100 ${ aboutStyles.slide }`}
                        src={slide02} alt="second slide" 
                        />
                        <Carousel.Caption style={{color:"black"}}>
                            <h3>“Recommend 100%”</h3>
                            <p>Matt, one of the advisors was kind and helpful :)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                        className={`d-block w-100 ${ aboutStyles.slide }`}
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

export default About