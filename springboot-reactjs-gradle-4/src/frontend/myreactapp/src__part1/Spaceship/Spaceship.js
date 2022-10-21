import React from 'react'
import './Spaceship.css'

const spaceship = (props) => {
    return (
        <div className='SpaceshipLAF'>
            {props.name} - {props.crew} - {props.children}
        </div>
    )
}
export default spaceship;