// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {planetsList} = this.props

    return (
      <div data-testid="planets" className="container">
        <h1 className="text">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <div>
              <PlanetItem key={each.id} details={each} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
