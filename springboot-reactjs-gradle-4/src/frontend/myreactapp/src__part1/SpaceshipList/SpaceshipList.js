import React, {Component} from 'react'
import Spaceship from "../Spaceship/Spaceship";

class SpaceshipList extends Component {
   state = {
      anotherheader: 'anotherheader: Some value'
   }
   render() {
        return (
            <div>
                  <h1>{this.props.myheader}</h1>
                  <h2>{this.state.anotherheader}</h2>
                  <Spaceship name='Hawk' crew='22'>aaaaaa</Spaceship>
                  <Spaceship name='Falcon' crew='11'>bbbbbb</Spaceship>
                  <Spaceship name='Blackbird' crew='33'>ccccccccccc</Spaceship>
            </div>
        )
   }
}
export default SpaceshipList;