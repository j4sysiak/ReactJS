import React, {useState} from 'react';
import './App.css';
import PlanetList from "./PlanetList/PlanetList";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    NavLink
} from "react-router-dom";

function App() {

    const [shouldShowState, shouldShowStateUpdate] = useState(true);
    // const planetContent = shouldShowState === true ? (<div><PlanetList/></div>) : null;

    return (
        <BrowserRouter>
            <div className="App">
                <div className='navigationTop'>
                    <div className='navItem'>
                        <NavLink to='/planets'>Planets</NavLink>
                    </div>
                    <div className='navItem'>
                        <NavLink to='/quotes'>Quotes</NavLink>
                    </div>
                    <div className='navItem'>
                        <NavLink to='/asteroids'>Asteroids</NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/planets" element={ <PlanetList /> }/>
                    <Route path='/quotes' element = {<h1>Quotes</h1>}/>
                    <Route path='/asteroids' element = {<h1>Asteroids!!!</h1>}/>
                    <Route path='/' element = {<h1>(default error when path is empty: ) Unknown path!!!!!!</h1>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;























