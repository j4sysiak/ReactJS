import React, {useState} from 'react';
import './App.css';
import SpaceshipList from './SpaceshipList/SpaceshipList';
import PlanetList from "./PlanetList/PlanetList";

function App() {

    const [shouldShowState, shouldShowStateUpdate] = useState(true);
    const planetContent = shouldShowState === true ? (<div><PlanetList></PlanetList></div>) : null;

    const showPlanetsClickHandler = (nyevent) => {
        shouldShowStateUpdate(prevstate => !prevstate)
    }

  return (
   <div className="App">
      text-text-text-text-text-text-text-text-text-tex-text-text
      <div onClick={showPlanetsClickHandler}>Show Planets Button!!! {shouldShowState}</div>
       { planetContent }
   </div>
 );
}

export default App;
