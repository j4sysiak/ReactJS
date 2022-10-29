import React, { useState, useEffect } from 'react'
import axios from 'axios';  //---> to  działa na wersji: "axios": "^1.1.3"
import './PlanetList.css'
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    NavLink,
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

const planetList = React.memo(( props) => {

    // console.log("props: " + props);  // nie działa w wersji React 6

    // const axios = require('axios').default;  ---> to nie działa na wersji: "axios": "^1.1.3", działa na wesjach < 1.0  np. "axios": "^0.21.1"

    // useEffect(() => {
    //    console.log('Component was mounted!!!')
    // }, []);
    //
    // useEffect(() => {
    //     console.log('Component was mounted or updated!!!')
    // });
    //
    // useEffect(() => {
    //     return () => {
    //         console.log('Component was unmounted!!!')
    //     }
    // }, []);

    const [mymodel, mymodelupdate] = useState({planets: [
            { id: -1, name: 'Dummy  planet', localSolarSystem: true, habitable: true }
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

    // const getmydata = () => {
    //     fetch('/api/planet', {
    //         method: 'GET',
    //         header: {
    //             'Accepts': 'application/json'
    //         }
    //     }).then((response) => response.json())
    //         .then((bodydata) => {
    //             mymodelupdate((prevstate) => {
    //                 return {planets: [...bodydata]}
    //             });
    //         })
    // }

    const updatemyplanetsAxios= (newplanets) => {
        console.log("planets: " + JSON.stringify(newplanets))
        axios.post('/api/planet',
            newplanets
        ).then((bodydata) => {
            mymodelupdate((prevstate) => {
                return {planets: [...bodydata.data]}
            });
        })
    }

    // const updatemyplanets= (newplanets) => {
    //     console.log("planets: " + JSON.stringify(newplanets))
    //     fetch('/api/planet', {
    //         method: 'POST',
    //         headers: {
    //             'Accepts': 'application/json',
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newplanets)
    //     }).then((response) => response.json())
    //         .then((bodydata) => {
    //             mymodelupdate((prevstate) => {
    //                 return {planets: [...bodydata]}
    //             });
    //         })
    // }

    // const [headerState, updateHeaderstate] = useState('Planets to go to')
    // const textfieldchanged = (myevent) => {
    //     const inputvalue = myevent.target.value
    //     console.log("textfield changed: " + inputvalue)
    //     updateHeaderstate((prevheaderstate) =>{
    //         return inputvalue;
    //     })
    // }

    const clickhandlerDeletePlanet = (id) => {

        /* komentuje to, ponieważ na razie nie chcę usuwać planet z listy */
        // const myplanets = [...mymodel.planets]
        // const planetindex = myplanets.findIndex(planet => planet.id === id)
        // myplanets.splice(planetindex, 1)
        // updatemyplanetsAxios(myplanets)
    }

    // const mystyle = {
        // ':hover': {
        //     background: 'yellow',
        //     color: 'orange'
        // }
    // }

    /* onClick() - creating planets from backend (Spring Boot)*/
    const myplanets = mymodel.planets.map(planet => {
        let myclasses = 'planet';
        if (planet.localSolarSystem) {
          myclasses = myclasses + ' planetlocal';
        }
        if (planet.habitable) {
            myclasses = myclasses + ' planethabitable';
        }
        return (
            <div className={myclasses} key={planet.id} /*style={mystyle}*/
                 onClick={clickhandlerDeletePlanet.bind(this, planet.id)}>
                <NavLink to={'/planet-details/' + planet.id}>
                   {planet.name}
                </NavLink>
            </div>
        )
    });


    return (
        <div>
            <div>
                <button onClick={getmydataaxios} id="button1">
                    Get My data
                </button>
            </div>
            <div className='planets'>
                { myplanets }
            </div>
        </div>
    )
})

export default withRouter(planetList);





















