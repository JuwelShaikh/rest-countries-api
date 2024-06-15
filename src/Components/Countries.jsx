import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import '../Components/Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length} country only.</h3>
            <div className="box">
                {
                    countries.map(country => <Country country={country} key={country.cca2} />)
                }
            </div>
        </div>
    );
};

export default Countries;