import React, { useState, useEffect } from 'react'
import axios from 'axios';

/* Function Component */
const planetList = React.memo(  (props) => {
    // const axios = require('axios').default;
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

    const [mymodel, mymodelupdate] = useState({planets: [
            {id: -1, name: 'Dummy  planet'}
        ]})

    const getmydataaxios = () => {
        axios.get('/api/planet')
            .then((bodydata) => {
                console.log("Axios data: " + JSON.stringify(bodydata))
                mymodelupdate((prevstate) => {
                    return {planets: [...bodydata.data]}
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
        }).then((response) => response.json())
            .then((bodydata) => {
                mymodelupdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    /* Function Component */
    const updatemyplanets= (newplanets) => {
        console.log("planets: " + JSON.stringify(newplanets))
        fetch('/api/planet', {
            method: 'POST',
            headers: {
                'Accepts': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newplanets)
        }).then((response) => response.json())
            .then((bodydata) => {
                mymodelupdate((prevstate) => {
                    return {planets: [...bodydata]}
                });
            })
    }

    const [headerState, updateHeaderstate] = useState('Planets to go to')
    const textfieldchanged = (myevent) => {
        const inputvalue = myevent.target.value
        console.log("textfield changed: " + inputvalue)
        updateHeaderstate((prevheaderstate) =>{
            return inputvalue;
        })
    }

    const clickhandlerPlanet = (id) => {
        const myplanets = [...mymodel.planets]
        const planetindex = myplanets.findIndex(planet => planet.id === id)
        myplanets.splice(planetindex, 1)
        updatemyplanets(myplanets)
    }

    const myplanets = mymodel.planets.map(planet => (<div key={planet.id}
                                                          onClick={clickhandlerPlanet.bind(this, planet.id)}>{planet.name}</div>))

    return (
        <div>
            <div>
                <button onClick={getmydataaxios} id="button1">
                    Get My data
                </button>
            </div>
            <div>
                <input type="text" onChange={textfieldchanged} id="headerinputfield1"/>
            </div>
            {headerState}
            { myplanets }
        </div>
    )
})
export default planetList;





















