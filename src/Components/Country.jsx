

const addStyle = {
    width: '400px',
    border: '5px solid blue',
    borderRadius: "10px",
    margin: '5px'
}

const imgStyle = {
    with:'100px',
    marginBottom: '10px'
}

const Country = ({ country }) => {
    const { name, flags } = country;
    console.log(country)
    return (
        <div style={addStyle}>
            <h4>Name: <u>{name.common}</u></h4>
            <img style={imgStyle} src={flags.png} alt="" />

        </div>
    );
};

export default Country;