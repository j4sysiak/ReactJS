import './App.css';
import React from 'react';
import Spaceship from './Spaceship/Spaceship';

function App() {
  // return React.createElement('div', null, 'TEST123')
  return (
   <div className="App">
       <Spaceship name='Hawk' crew='22' />
       <Spaceship name='Falcon' crew='11' />
       <Spaceship name='Blackbird' crew='33' />
   </div>
 );
}

export default App;
