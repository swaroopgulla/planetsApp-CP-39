// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <div className="planet-container">
      <img src={imageUrl} width="200" alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
