import React, {useState} from 'react';
import './App.css';
import PlanetList from "./PlanetList/PlanetList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    const [shouldShowState, shouldShowStateUpdate] = useState(true);
    const planetContent = shouldShowState === true ? (<div><PlanetList/></div>) : null;

    return (
        <BrowserRouter>
            <div className="App">
                <div className='navigationTop'>
                    <div className='navItem'><a href='/planets'>Planets</a></div>
                    <div className='navItem'><a href='/quote'>Quotes</a></div>
                    <div className='navItem'><a href='/spaceship'>Spaceship</a></div>
                </div>
                {planetContent}
            </div>

        </BrowserRouter>
    );
}

export default App;