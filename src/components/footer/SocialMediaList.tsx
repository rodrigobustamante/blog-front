import PropTypes from "prop-types"
import React from "react"
import SocialMediaItem from './SocialMediaItem'

import "./styles.scss"

const SocialMediaList = ({ list }, index) => (
  <ul className="footer__social-media-list">
    {list.map(({ link, slug }) => (
      <SocialMediaItem key={slug} icon={slug} link={link} />
    ))}
  </ul>
)

SocialMediaList.propTypes = {
  list: PropTypes.array,
}

SocialMediaList.defaultProps = {
  list: [],
}

export default SocialMediaList
