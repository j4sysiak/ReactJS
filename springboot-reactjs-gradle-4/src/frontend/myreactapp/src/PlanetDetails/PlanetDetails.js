import React from "react";
import { useParams } from 'react-router-dom';

function PlanetDetails() {
    const { id } = useParams();
    console.log("id: " + id);
    return (
        <div>
            <h1>Planet details!!!</h1>
            <div>
                  This is the Details for planet with id: { id }
            </div>
        </div>
    )

}
export default PlanetDetails;





















