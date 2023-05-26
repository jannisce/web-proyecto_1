import './Entertaiment.scss'
import GameCard from '../GameCard/GameCard'

function Entertaiment() {
  const height = '250px'
  return (
    <div>
      <div className="entertaiment-container">
        <div className="entertaiment-titulo">
          <h2>Entretenimiento</h2>
        </div>

        <div className="entertaiment-contenido">
          <GameCard
            url="https://arcane.com/es-mx/"
            src="img/arcane-logo-white.png"
            height={height}
            urlImage="https://www.riotgames.com/darkroom/855/8e43c45318fd4d29006d12f8523ea289:48efcf51118eac260aa9ac16c73ae91c/arcane-card.png"
          />

          <GameCard
            url="https://www.youtube.com/c/riotgamesmusic"
            src="img/riotgames-music.png"
            height={height}
            urlImage="https://www.riotgames.com/darkroom/855/c38a2e0e070ba045a40bd4b77bfeeaf1:bba41997f467361e190a4dd616679837/riot-music-card.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Entertaiment
