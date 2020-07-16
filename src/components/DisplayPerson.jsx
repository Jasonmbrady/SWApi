import React, { useState, useEffect } from 'react';
import axios from "axios";


const DisplayPerson = ({ id }) => {
    const [person, setPerson] = useState({
        "name": "",
        "height": "",
        "mass": "",
        "skin_color": "",
        "hair_color": ""
    });
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPerson(response.data))
            .catch(err => console.log(err));
    }, [id])
    return (
        <div>
            <h1>{person.name}</h1>
            <h4>Height: {person.height}</h4>
            <h4>Mass: {person.mass}</h4>
            <h4>Skin Color: {person.skin_color}</h4>
            <h4>Hair Color: {person.hair_color}</h4>
        </div>
    )
}
export default DisplayPerson;