import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DisplayPlanet = ({ id }) => {
    const [planet, setPlanet] = useState({
        "name": "",
        "climate": "",
        "terrain": "",
        "surface_water": "",
        "population": ""
    });
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanet(response.data))
            .catch(err => console.log(err));
    }, [id])
    let water = "true";
    if (planet.surface_water === 0) { water = "false" }
    return (
        <div>
            <h1>{planet.name}</h1>
            <h4>Climate: {planet.climate}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Surface Water: {water}</h4>
            <h4>Population: {planet.population}</h4>
        </div>
    )
}
export default DisplayPlanet;