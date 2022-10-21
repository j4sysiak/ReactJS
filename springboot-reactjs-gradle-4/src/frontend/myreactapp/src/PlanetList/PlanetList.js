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

    const  myplanets = mymodel.planets.map(planet => (<div key={planet.id}>{planet.name}</div>))

    return (
        <div>
            Here comes our list of planets!
            { myplanets }
        </div>
    )
})

export default planetList;





















