import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import '../Components/Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedFlags = country => {
        const newFlagsAdd = [...visitedFlags, country];
        setVisitedFlags(newFlagsAdd);
    }

    return (
        <div>
            <h3>Countries: {countries.length} country only.</h3>
            <div>
                <h3>Countries I have visited</h3>
                <div>
                    {
                        visitedFlags.map(flag => <img className="secImg" src={flag} key={flag.cca2} />)
                    }
                </div>
            </div>
            <div className="box">
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca2}
                        handleVisitedFlags={handleVisitedFlags} />)
                }
            </div>
        </div>
    );
};

export default Countries;