import { useState, useEffect } from 'react';

function ShoppingList({ selectedItems = [], sessionId }) {
  console.log('Fetching items for sessionId:', sessionId); // <-- moved inside component

  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch items on mount or when sessionId changes
  useEffect(() => {
    if (!sessionId) return; // optionally guard if sessionId is undefined
    setLoading(true);
    setError(null);
    fetch(`/api/items/${sessionId}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then(data => {
        const enriched = data.map((item, index) => ({
          ...item,
          quantity: item.quantity || 1,
          key: item._id || `${item.name}-${index}`,
        }));
        setItems(enriched);
        setLoading(false);
      })
      .catch(err => {
        console.error('ShoppingList fetch error:', err);
        setError('Failed to load items. Check if backend is running at http://localhost:5000 (try /api/health) and MongoDB is seeded with sessionId: default-session.');
        setLoading(false);
      });
  }, [sessionId]);

  // ... rest of your component unchanged

  const handleAddItems = async () => {
    if (!name.trim()) return;
    setLoading(true);
    setError(null);
    const newItem = { name: name.trim(), price: Number(price), sessionId, quantity };
    try {
     const res = await fetch('http://localhost:5000/api/items', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newItem),
});
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const savedItem = await res.json();
      setItems(prev => [...prev, { ...savedItem, quantity, key: savedItem._id }]);
      setName('');
      setQuantity(1);
      setPrice(0);
      setLoading(false);
    } catch (err) {
      console.error('Add item error:', err);
      setError('Failed to add item. Please try again.');
      setLoading(false);
    }
  };

  // ... other functions remain same

  const theTotal = () => {
    return items
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };
const handleRemoveItem = async (itemId) => {
  if (!itemId) return;
  setLoading(true);
  setError(null);
  try {
    const res = await fetch(`http://localhost:5000/api/items/${itemId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);

    // Remove the deleted item from local state
    setItems(prevItems => prevItems.filter(item => item._id !== itemId));
  } catch (err) {
    console.error('Delete item error:', err);
    setError('Failed to delete item. Please try again.');
  } finally {
    setLoading(false);
  }
};
const handleQuantityChange = (itemId, newQuantity) => {
  setItems(prevItems =>
    prevItems.map(item =>
      item._id === itemId
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    )
  );
};
  return (
    <div className="shopping-list">
      <h2>Shopping List (Lunchbreak)</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
  <label>
    Item:
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="e.g., Rice"
      disabled={loading}
      style={{ marginLeft: '4px' }}
    />
  </label>

  <label>
    Quantity (lbs):
    <input
      type="number"
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
      min="1"
      disabled={loading}
      style={{ marginLeft: '4px', width: '60px' }}
    />
  </label>

  <label>
    Price ($/lb):
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(Number(e.target.value))}
      min="0"
      step="0.01"
      disabled={loading}
      style={{ marginLeft: '4px', width: '80px' }}
    />
  </label>

  <button onClick={handleAddItems} disabled={loading}>
    <em>+</em>
  </button>
</div>


    <ul>
  {items.map(item => (
    <li key={item.key}>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
        min="1"
        style={{ width: '50px', marginRight: '8px' }}
        disabled={loading}
      />
      <strong>{item.name}</strong> @ ${item.price.toFixed(2)} × {item.quantity} = ${(
        item.price * item.quantity
      ).toFixed(2)}
      <button onClick={() => handleRemoveItem(item._id)} disabled={loading} style={{ marginLeft: '8px' }}>
        x
      </button>
    </li>
  ))}
</ul>

      <h3>Total: ${theTotal()}</h3>
    </div>
  );
}

export default ShoppingList;
