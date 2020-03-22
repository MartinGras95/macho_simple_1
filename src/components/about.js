import React from 'react'

import aboutStyles from "../styles/about.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

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
        </div>
    )
}

export default About