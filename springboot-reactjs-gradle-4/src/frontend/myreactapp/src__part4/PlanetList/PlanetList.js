import React, { useState, useEffect } from 'react'

/* Function Component */
const planetList = React.memo(  (props) => {

    useEffect(() => {
       console.log('Component was mounted!!!')
    }, []);

    useEffect(() => {
        console.log('Component was mounted or updated!!!')
    });

    useEffect(() => {
        return () => {
            console.log('Component was unmounted!!!')
        }
    }, []);

    const [mymodel, mymodelUpdate] = useState({planets: [
            {id: 1, name: 'Jupiter'},
            {id: 2, name: 'Mars'},
            {id: 3, name: 'Saturn'},
            {id: 4, name: 'Earth'}
        ]});

    const [headerStateModel, headerStateModelUpdate] = useState('Planets to go to');
    const textFieldChanged = (myevent) => {
        const inputValue = myevent.target.value;
        console.log("textFieldChanged: " + JSON.stringify(inputValue));
        headerStateModelUpdate((prevStateOfHeaderStateModel) => {
              return inputValue;
            }
        );
    }

    /* Function Component */
    const clickHandlerPlanet = (id) => {
        mymodelUpdate((prevStateOfModelPlanets) => {
            const myplanets = [...prevStateOfModelPlanets.planets];
            console.log("Before deletion: " + JSON.stringify(myplanets));
            const planetindex = myplanets.findIndex(varPlanet => varPlanet.id === id);
            console.log("planetindex: " + JSON.stringify(planetindex));
            myplanets.splice(planetindex, 1);
            console.log("After deletion: " + JSON.stringify(myplanets));
            return {planets: myplanets}
        });
    }

    const  myplanets = mymodel.planets.map(planet => (<div key={planet.id}
                  onClick={clickHandlerPlanet.bind(this, planet.id)}>{planet.name}</div>))

    return (
        <div>
            <input type={"text"} onChange={textFieldChanged} id="headerInputField1" />
            { headerStateModel }
            { myplanets }
        </div>
    )
})

export default planetList;





















