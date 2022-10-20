import React from 'react'
import './Spaceship.css'
const spaceship = (props) => {
    return (
        <div className='SpaceshipLAF' onClick={props.myclickhandler}>
            {props.name} - {props.crew} - {props.children}
        </div>
    )
}

export default spaceship;