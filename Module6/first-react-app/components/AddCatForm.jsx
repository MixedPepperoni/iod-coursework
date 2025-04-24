import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      latinName,
      image,
    };

    onAddCat(newCat); // Pass up to parent
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form className="AddCatForm" onSubmit={handleSubmit}>
      <h3>Add a New Big Cat</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
