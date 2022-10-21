import React, {Component} from 'react'
import Spaceship from "../Spaceship/Spaceship";

class SpaceshipList extends Component {
   render() {
        return (
            <div>
                  <h1>{this.props.myheader}</h1>
                  <Spaceship name='Hawk' crew='22' />
                  <Spaceship name='Falcon' crew='11' />
                  <Spaceship name='Blackbird' crew='33' />
            </div>
        )
   }
}
export default SpaceshipList;