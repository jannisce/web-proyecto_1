import './News.scss'
import React from 'react'

function News() {
  return (
    <div>
      <div className="background-video">
        <video
        //   autoPlay
          muted
          loop
          preload="auto"
          playsInline
          poster="https://www.riotgames.com/darkroom/2000/233518b5812712d4b4e1e53e78cc0098:4faf10efc8d17d31fe93ba4b6e764f23/convergence-ka-riotgames-3840x1600-update.png"
        >
          <source
            src="video/global-esports-msi-hype-masthead.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="msi-container">
        <div className="msi-content">
          <div>
            <img
              src="https://www.riotgames.com/darkroom/500/ca793edf399904c3dc1fe954699d7d02:8d4ba21708fdcbe732355d6585a0400d/convergence-logo-riotgames-600x121.png"
              alt="MSI 2023 Logo"
            />
          </div>
          <h1>Desarrollado por Double Stallion Games</h1>
          <p>Ha llegado la hora del desafío. Preparaos para la gran batalla en Londres.</p>
          <a
            href="https://www.youtube.com/watch?v=UeOFKSq7RJQ&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <div>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
                    fill="#F0F0F0"
                  />
                </svg>
              </div>
              Ya disponible
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default News
