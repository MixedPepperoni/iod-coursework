// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DataTable from '../components/DataTable';
import ShoppingList from '../components/ShoppingList';
import About from '../components/About'; // ✅ Add this line

import { useState } from 'react';
import { getSessionId } from './session';

function MainApp() {
  const [selectedItems, setSelectedItems] = useState([]);
  const sessionId = getSessionId();

  return (
    <>
      <h1>LunchBreak</h1>
      <h3>You're in a maze when store prices. Let us be the ones who always keep you going right.</h3>
      <div className="card">
        <DataTable onSelectionChange={setSelectedItems} sessionId={sessionId} />
      </div>
      <p className="moneySaver">
        Making cookies at home is 150% cheaper than putting that in your cart.
      </p>
      <p>
        Do you wish to share your list? Here's a link:{' '}
        <code>{`${window.location.protocol}//${window.location.host}/?session=${sessionId}`}</code>
      </p>
      <ShoppingList selectedItems={selectedItems} sessionId={sessionId} />
    </>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/about" element={<About />} /> {/* ✅ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
