import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SocialMediaList from "./SocialMediaList"

import "./styles.scss"

const Footer = ({ siteTitle }) => {
  const { allStrapiSocialMedia: { edges } } = useStaticQuery(
    graphql`
      query FooterQuery {
        allStrapiSocialMedia {
          edges {
            node {
              url
              slug
            }
          }
        }
      }
    `
  );

  const socialMediaList = edges.map(({ node }) => ({ ...node }));

  return (
    <footer>
      <div className="footer__top">
        <div className="footer__top-container">
          <p className="footer__top-title">{siteTitle}</p>
          <SocialMediaList list={socialMediaList} />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__bottom-text">
            {`© ${new Date().getFullYear()} - ${siteTitle}`}
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer;
