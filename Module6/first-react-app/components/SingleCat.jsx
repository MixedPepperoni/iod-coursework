function SingleCat({name, latinName, image}) {
  return (
    <li
      style={{
        marginBottom: "4px",
      }}
    >
      <h3>{name}</h3>
      <em>{latinName}</em>
      <div>
        <img
          src={image}
          alt={name}
          style={{ maxWidth: "360px", borderRadius: "12px" }}
        />
      </div>
    </li>
  );
}

export default SingleCat;
