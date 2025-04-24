import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm"; //adding componenet for addcat form//

const allCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Cheetah%2C_Masai_Mara_%2852448476886%29.jpg", //Cheeahs are tthe best big cat since they wont (purposefully)rip your back open if you turn itt to them.Remember that.//
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/African_leopard_male_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
  },
  {
    id: 6,
    name: "Snow Leopard",
    latinName: "Panthera uncia",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg",
  },
];

function BigCats() {
  //it seemed to have all worked perfectly//
  const [catList, setCatList] = useState(allCats);
  const handleAddCat = (newCat) => {
    setCatList((prevCats) => [...prevCats, newCat]);
  };
  const handleDeleteCat = (id) => {
    setCatList((prevCats) => prevCats.filter((cat) => cat.id !== id));
  };


  const handleSort = () => {
    const sorted = [...catList].sort((a, b) =>
      a.name.toUpperCase().localeCompare(b.name.toUpperCase())
    );
    setCatList(sorted);
  };

  const handleReverse = () => {
    const reversed = [...catList].reverse();
    setCatList(reversed);
  };

  const handleFilterPanthera = () => {
    const filtered = allCats.filter((cat) =>
      cat.latinName.toLowerCase().startsWith("panthera")
    );
    setCatList(filtered);
  };

  const handleReset = () => {
    setCatList(allCats);
  };

  return (
    <div className="BigCats componentBox">
      <h1>Big Cats</h1>
      <AddCatForm onAddCat={handleAddCat} />

      <div style={{ marginBottom: "2px" }}>
        <button onClick={handleSort}>Alphabetical</button>
        <button onClick={handleReverse}>Reverse Alphabetical</button>
        <button onClick={handleFilterPanthera}>Family:Panthera</button>
        <button onClick={handleReset}>Reset</button>
        {/* It actually freaking worked?!My codes got fixed and worked?! */}
      </div>
   
      <ul style={{ listStyleType: "numbered", padding: 2 }}>
        {catList.map((cat) => (
          <li key={cat.id}>
            <SingleCat
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
            <button onClick={() => handleDeleteCat(cat.id)}>Delete?</button>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
