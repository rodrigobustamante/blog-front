import PropTypes from "prop-types"
import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "./styles.scss"

const SocialMediaItem = ({ link, icon }) => {
  library.add(fab)

  return (
    <li className="footer__social-media-list-item-container">
      <a className="footer__social-media-list-item" href={link}>
        <FontAwesomeIcon icon={["fab", icon]} />
      </a>
    </li>
  )
}

SocialMediaItem.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
}

SocialMediaItem.defaultProps = {
  link: ``,
  icon: ``,
}

export default SocialMediaItem
