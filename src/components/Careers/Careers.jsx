import './Careers.scss'

function Careers() {
  return (
    <div>
      <div className="careers-container">
        <div className="careers-content">
          <div>
            <h2>¡Buscamos gente!</h2>
            <p>
              Uníos a Riot para forjar vuestro camino y
              crear inolvidables experiencias para los jugadores.
            </p>

            <div>
              <a
                href="https://www.riotgames.com/es/trabaja-con-nosotros"
                target="_blank"
                className="first-target"
                rel="noreferrer"
              >
                <span>
                  246
                </span>
                Puestos disponibles
              </a>
              <a
                href="https://www.riotgames.com/es/trabaja-con-nosotros"
                target="_blank"
                className="second-target"
                rel="noreferrer"
              >
                <span>
                  24
                </span>
                Oficinas
              </a>
            </div>

            <a
              href="https://www.riotgames.com/es/trabaja-con-nosotros"
              target="_blank"
              className="principal-target"
              rel="noreferrer"
            >
              <span>
                Descubrir oportunidades
              </span>
            </a>
          </div>
        </div>

        <div className="careers-image" />

      </div>
    </div>
  )
}

export default Careers
