import './GameCard.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GameCard({
  urlImage, src, url, height, margin,
}) {
  const backUrl = `url(${urlImage})`
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const style = {
    position: 'relative',
    width: '100%',
    marginRight: '2%',
    height,
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    backgroundImage: backUrl,
    marginLeft: margin,
    border: '2.5px solid #1f1f1f',
    transition: 'border-color 0.3s ease',
    borderColor: isHovered ? '#9E9C99' : '#1f1f1f',
  }

  const styleA = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
  }

  const styleImg = {
    position: 'absolute',
    width: '23%',
    height: 'auto',
    top: 0,
    left: 0,
    marginTop: '15%',
    marginLeft: '7%',
  }

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} style={styleImg} alt="" />
      <a
        style={styleA}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        &nbsp;
      </a>
    </div>
  )
}

GameCard.propTypes = {
  urlImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
}

export default GameCard
