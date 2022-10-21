import React, { useState } from 'react'

/* Function Component */
const planetList = React.memo(  (props) => {

    let mymodel;
    let mymodelupdate;
    [mymodel, mymodelupdate] = useState({planets: [
            {id: 1, name: 'Jupiter'},
            {id: 2, name: 'Mars'},
            {id: 3, name: 'Saturn'},
            {id: 4, name: 'Earth'}
        ]});

    /* Function */
    const clickhandlerPlanet = (id) => {
        const myplanets = [...mymodel.planets]
        const planetindex = myplanets.findIndex(planet => planet.id === id)
        myplanets.splice(planetindex, 1)
        mymodelupdate({planets: myplanets})

    }

    const  myplanets = mymodel.planets.map(planet => (<div key={planet.id}
                                           onClick={clickhandlerPlanet.bind(this, planet.id)}>{planet.name}</div>))

    return (
        <div>
            Here comes our list of planets!
            { myplanets }
        </div>
    )
})

export default planetList;





















