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
            {id: -1, name: 'Dummy Planet'}
        ]});

    const axios = require('axios').default;
    const getmydataaxios = () => {
        axios.get('/api/planet')
            .then((response) => response.json())
            .then((bodydata) => {
                mymodelUpdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    /* Function Component */
    const getmydata = () => {
        fetch('/api/planet', {
            method: 'GET',
            header: {
                'Accepts': 'application/json'
            }
//        ,body: ''
        }).then((response) => response.json())
            .then((bodydata) => {
                mymodelUpdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    /* Function Component */
    const updatemyplanets = (newplanets) => {
        console.log("planets: " + JSON.stringify(newplanets));
        fetch('/api/planet', {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newplanets)
        }).then((response) => response.json())
            .then((bodydata) => {
                mymodelUpdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    const [headerStateModel, headerStateModelUpdate] = useState('Planets to go to');

    /* Function Component */
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
            const myplanets = [...mymodel.planets];
            const planetindex = myplanets.findIndex(varPlanet => varPlanet.id === id);
            myplanets.splice(planetindex, 1);
            updatemyplanets(myplanets);
    }

    const myplanets = mymodel.planets.map(planet => (<div key={planet.id}
                  onClick={clickHandlerPlanet.bind(this, planet.id)}>{planet.name}</div>));

    return (
      <div>
          <div>
              <button name="Get My Data" onClick={getmydataaxios} id="button1">Get My Data</button>
          </div>
          <div>
              <input type={"text"} onChange={textFieldChanged} id="headerInputField1" />
          </div>
          { headerStateModel }
          { myplanets }
      </div>
    );
})

export default planetList;





















