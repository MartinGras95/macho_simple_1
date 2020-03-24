import React from 'react'

import {useStaticQuery} from 'gatsby'

import footerStyles from "../styles/footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="3x" />
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} size="3x" />


const Footer = () => {

    const data = useStaticQuery(graphql`
    query{
        site {
            siteMetadata {
                email
                phone
                fax
            }
        }
    }
`)

    return (
        <footer id="footer" className={footerStyles.container}>
            <div className={footerStyles.content}>
                <div className={footerStyles.icons}>
                    <p className={footerStyles.icon}>{facebookIcon}</p>
                    <p className={footerStyles.icon}>{twitterIcon}</p>
                    <p className={footerStyles.icon}>{youtubeIcon}</p>
                </div>
                <div>
                    <h3>Get in touch</h3>
                    <p>Phone: {data.site.siteMetadata.phone}</p>
                    <p>Email: {data.site.siteMetadata.email}</p>
                    <p>Fax: {data.site.siteMetadata.fax}</p>
                </div>
                <div className={footerStyles.address}>
                    <h3>Address</h3>
                    <br />
                    <p>123</p>
                    <p>Some example street</p>
                    <p>Example City</p>
                    <p>Post code</p>
                </div>
                <div>

                </div>

            </div>
            Copyright Macho Lemon ©2020
        </footer>
    )
}

export default Footer