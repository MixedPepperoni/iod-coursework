import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; /// deelte this, <a href and the img src to get it working without logo.
import "./App.css";
// import PropsDisplayer from '../components/PropsDisplayer'; // up the top
import Greetings from "../components/Greetings";
import Comment from "../components/Comment"; //should work//
import MoviesList from "../components/MoviesList"; // seeems to have worked?
// This creates a new component as a function that returns some JSX.
import BigCats from '../components/BigCats';

import Emoji from '../components/Emoji';
// import Bomb from '../components/Bomb';// seems to work
import Calculator from "../components/Calculator";



// Add this in App.jsx ABOVE the App component
function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function App() {
  //this si the app componentt, remember//
  const [count, setCount] = useState(0);
  const invalidJSX = (
    <p>paragraph 1 & paragraph 2</p>
  ); /*Corrected the parant element by removing the extra element.*/

  function NamePart(props) {
    return (
      // reusable component to display part of a name from the value prop
      <span className="NamePart">{props.value}</span>
    );
  }
  function FullName(props) {
    return (
      // composes the NamePart component to display a full name
      <div className="FullName componentBox">
        Full name: <NamePart value={props.first} />{" "}
        <NamePart value={props.middle} /> <NamePart value={props.last} />
      </div>
    );
  }
  const CommentData = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      {/* This renders the component, calling the function and
including its JSX output at this point in the code. Add this
INSIDE the return block of the App component.  */}

      {/* <PropsDisplayer Doggies={["Jazz/RIP", "Skyla/Happy"]}/> */}
      <ExampleComponent />
      <Greetings />
      <FullName first="Brendan" middle="Ozongho" last="Tabod" />

      {/* render the component, passing object data as props */}

      <Comment
        author={CommentData.author}
        date={CommentData.date}
        text={CommentData.text}
      />
      <MoviesList />
      <BigCats />
      <Emoji />
      <Calculator />
      {/* <Bomb/> */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
