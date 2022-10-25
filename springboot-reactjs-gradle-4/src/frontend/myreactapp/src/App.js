import React, {useState} from 'react';
import './App.css';
import PlanetList from "./PlanetList/PlanetList";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    NavLink
} from "react-router-dom";
import PlanetDetails from "./PlanetDetails/PlanetDetails";
import planetDetails from "./PlanetDetails/PlanetDetails";

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
                        <NavLink
                            to="/quotes"
                            style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}
                        >
                            Quotes
                        </NavLink>
                    </div>
                    <div className='navItem'>
                        <NavLink to='/asteroids'>Asteroids</NavLink>
                    </div>
                    <div className='navItem'>
                        <NavLink to='/planet-details'>PlanetDetails</NavLink>
                    </div>
                </div>
                <div className='content'>
                    <Routes>
                        <Route path="/planets" element={ <PlanetList /> }/>
                        <Route path="/planet-details/:id" element={ <PlanetDetails /> }/>
                        <Route path='/quotes' element = {<h1>Quotes</h1>}/>
                        <Route path='/asteroids' element = {<h1>Asteroids!!!</h1>}/>
                        <Route path='/' element = {<h1>(default error when path is empty: ) Unknown path!!!!!!</h1>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;























