import { useState } from "react";


const addStyle = {
    width: '400px',
    border: '5px solid skyblue',
    borderRadius: "10px",
    margin: '5px'
}

const imgStyle = {
    with: '100px',
    marginBottom: '10px'
}

const Country = ({ country }) => {
    const { name, flags, population } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!true);
    }

    return (
        <div style={addStyle}>
            <h4>Name: <u>{name.common}</u></h4>
            <img style={imgStyle} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <button onClick={handleVisited}>Visit</button>
            <p>{visited ? 'Already visit this country' : 'I want to visit this country'}</p>
        </div>
    );
};

export default Country;