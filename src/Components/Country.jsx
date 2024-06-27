import { useState } from "react";
import './country.css'

const btnStyle = {
    backgroundColor: '#242424',
    color: 'white',
    padding: '10px',
    border: '5px solid skyblue',
    borderRadius: "10px",
    cursor: 'pointer',
    margin: '5px'
}

const addStyle = {
    width: '400px',
    border: '5px solid skyblue',
    borderRadius: "10px",
    margin: '5px'
}

const countryCSS = {
    width: '400px',
    backgroundColor: 'rgba(0, 255, 255, 0.713)',
    border: '5px solid skyblue',
    borderRadius: "10px",
    margin: '5px'
}

const imgStyle = {
    with: '100px',
    height: '150px',
    marginBottom: '10px'
}

const Country = ({ country, handleVisitedFlags }) => {
    const { name, flags, population } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div style={visited ? addStyle : countryCSS}>
            <h4>Name: <u>{name.common}</u></h4>
            <img style={imgStyle} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <button style={btnStyle} onClick={()=>handleVisitedFlags(country.flags.png)}>Mark as visited</button>
            <button style={btnStyle} onClick={handleVisited}>Visit</button>
            <p>{visited ? 'Already visit this country' : 'I want to visit this country'}</p>
        </div>
    );
};

export default Country;