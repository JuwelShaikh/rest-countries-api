

const addStyle = {
    // backgroundColor: 'blue',
    border: '10px blue',
    // borderRedious: "10px"

}

const Country = ({ country }) => {
    return (
        <div style={addStyle}>
            <h4>Name: </h4>
            <p>Capital: </p>
        </div>
    );
};

export default Country;