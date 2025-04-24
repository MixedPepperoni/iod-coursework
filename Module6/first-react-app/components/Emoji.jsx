import { useState } from 'react';

function Emoji() {
    const [emoji, setEmoji] = useState('HAPPY');
    // Calls setEmoji with a fixed value of 'ecstatic'
    // begin with 'handle' prefix by convention
    const handleChangeEmoji = () => {
    setEmoji(prev => (prev === 'HAPPY' ? 'sad' : 'HAPPY'));
    }
    // Calls setEmoji with a conditional state value
   
    return (
    <div className="Emoji componentBox">
        <h1>Current Emoji: {emoji}</h1>
   
    {/* Using arrow functions */}
     {/* New toggle button */}
     <button onClick={handleChangeEmoji}>Change Mood</button>

    </div>
    )
   }
   // ++ add your own buttons to handle different Emojis!
   export default Emoji