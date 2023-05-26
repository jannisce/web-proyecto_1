import './MiniTarget.scss'
import React from 'react'
import PropTypes from 'prop-types'

function MiniTarget({
  urlImage, titulo, descripcion, url,
}) {
  const backUrl = `url(${urlImage})`

  const style = {
    position: 'absolute',
    height: '120px',
    width: '15%',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginLeft: '17.9%',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    backgroundImage: backUrl,
  }

  const styleRef = {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <div className="minitarget-container">
        <div className="minitarget-content">
          <div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <a
            style={styleRef}
            href={url}
          >
            &nbsp;
          </a>
        </div>

        <div
          className="minitarget-image"
          style={style}
        >
          <a
            style={styleRef}
            href={url}
          >
            &nbsp;
          </a>
        </div>

      </div>
    </div>
  )
}

MiniTarget.propTypes = {
  urlImage: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default MiniTarget
