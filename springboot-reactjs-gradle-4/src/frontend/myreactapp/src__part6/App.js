import React, {useState} from 'react';
import './App.css';
import PlanetList from "./PlanetList/PlanetList";
// import Radium, {StyleRoot} from 'radium'; /* './../../../../node_modules/radium/dist/radium' */
// import Radium from  '/C/Users/Jacek/Documents/JAVA/SpringBoot/ReactJS/springboot-reactjs-gradle-4/node_modules/radium/';

function App() {

    const [shouldShowState, shouldShowStateUpdate] = useState(true);
    const planetContent = shouldShowState === true ? (<div><PlanetList></PlanetList></div>) : null;

    const showPlanetsClickHandler = (nyevent) => {
        shouldShowStateUpdate(prevstate => !prevstate)
    }

  return (
      // <StyleRoot>
          <div className="App">
              text-text-text-text-text-text-text-text-text-tex-text-text
              <div onClick={showPlanetsClickHandler}>Show Planets Button!!! {shouldShowState}</div>
              { planetContent }
          </div>
      /*</StyleRoot>*/
 );
}

export default App; //Radium(App);


























