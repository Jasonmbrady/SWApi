import React, { useState } from 'react';
import { Router, navigate } from "@reach/router";
import DisplayPerson from './DisplayPerson';
import DisplayPlanet from './DisplayPlanet';


const Header = () => {
    const [searchFor, setSearchFor] = useState("people");
    const [id, setId] = useState("");

    const searchForHandler = (e) => {
        setSearchFor(e.target.value);
    }
    const idHandler = (e) => {
        setId(e.target.value);
    }
    const formHandler = (e) => {
        e.preventDefault();
        navigate(`/${searchFor}/${id}`);
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <label>Search For:</label>
                <select value={searchFor} onChange={searchForHandler} >
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                </select>
                <label>ID:</label>
                <input type="text" value={id} onChange={idHandler} />
                <button>Search</button>
            </form>
            <Router>
                <DisplayPerson path="/people/:id" />
                <DisplayPlanet path="/planets/:id" />
            </Router>
        </div>
    )
}
export default Header;