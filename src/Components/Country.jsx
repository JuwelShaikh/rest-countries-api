

const addStyle = {
    width: '500px',
    border: '5px solid blue',
    borderRadius: "10px",
    margin: '5px'
}


const Country = ({ country }) => {
    const { name, capital, languages } = country;
    console.log(country)
    return (
        <div style={addStyle}>
            <h4>Name: <u>{name.common}</u></h4>
            <p>Capital: {capital}</p>
            <p>Language: {languages}</p>
        </div>
    );
};

export default Country;