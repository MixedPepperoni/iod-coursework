function Greetings(prop) {
    return (
        <div className="Greetings">
            <h3>Hello: {prop.name ? prop.name : 'John'}</h3>
            {/* <h3>Hello: {prop.name ? prop.name : 'Jane'}</h3> */}
            {prop.children}
        </div>
    )
}

export default Greetings