import React, {Component} from 'react'
import Spaceship from "../Spaceship/Spaceship";

class SpaceshipList extends Component {

    /* stan */
    state = {
        anotherheader: 'anotherheader: Some value from state',
        spaceship: [
            {id: 1, name: 'Spaceship1', crew: 10},
            {id: 2, name: 'Spaceship2', crew: 20},
            {id: 3, name: 'Spaceship3', crew: 30}
        ]
    };

    /* function */
    deleteAShip = (id) => {
        const copyOfShips = [...this.state.spaceship];
        console.log("Before deletion: " + JSON.stringify(copyOfShips));
        const indexOfShip = copyOfShips.findIndex(ship => ship.id === id);
        copyOfShips.splice(indexOfShip, 1);
        console.log("After deletion: " + JSON.stringify(copyOfShips));
        this.setState({anotherheader: 'State has been set!!!',
        spaceship: [...copyOfShips]});
    }

    render() {
        const ships = this.state.spaceship.map(spaceship => (
            <Spaceship name={spaceship.name}
                       myclickhandler={this.deleteAShip.bind(this, spaceship.id)}
                       crew={spaceship.crew} key={spaceship.id} id={spaceship.id}/>
                )
            );

        return (
            <div>
                <h1>{this.props.myheader}</h1>
                <h2>{this.state.anotherheader}</h2>
                {ships}
            </div>
        )
    }
}

export default SpaceshipList;




























