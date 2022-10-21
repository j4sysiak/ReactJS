import React from 'react'
import './Spaceship.css'
const spaceship = (props) => {
    return (
        <div className='SpaceshipLAF'>
            {props.name} - {props.crew}
        </div>
    )
}
export default spaceship;