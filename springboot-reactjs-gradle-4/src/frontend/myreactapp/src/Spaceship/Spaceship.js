import React from 'react'
import './Spaceship.css'

/* function */
const spaceship = (props) => {
    return (
        <div className='SpaceshipLAF' onClick={props.myclickhandler}>
            {props.id} - {props.name} - {props.crew} - {props.children}
        </div>
    )
}


export default spaceship;