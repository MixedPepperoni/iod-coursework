function PropsDisplayer(props) {
    // convert object> now string
    const stringProps = JSON.stringify(props);
    return (
    <div className="PropsDisplayer componentBox">
    <h2>Check out my props!</h2>
    <h3>{stringProps}</h3>
    {/* what happens if we try to render the object {props} ? */}
    </div>
    )
   }
   // export this component
   export default PropsDisplayer