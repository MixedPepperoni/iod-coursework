// src/components/About.jsx

export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h2>About LunchBreak</h2>
      <p>
        <strong>LunchBreak</strong><br></br>Track  food costs, estimate shopping budgets, We'll save your money.
      </p>
       <h2>Why?</h2>
      <p>
        I wanted a simple & easy way to estimate how much my shopping.<br></br>Great for families,students,impulse shoppers who needa little help not want to overpaying.
      </p>

      <h2>What It Does</h2>
      <ul>
        <li>Ingredients/Price per pound.</li>
        <li>Automatically calculates total cost of cart</li>
        <li>Generate and share a shopping list via link</li>
        <li>A small box list to remind you of What your buying.</li>
      </ul>

     

      <h2>Coming Soon</h2>
      <ul>
        <li>Login/account system?</li>
        <li>A more flexible unit handling? sysyem</li>
        <li>Mobile improvements</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Made with Love for Baking and Homegoods & Hatred for an Empty Wallet,<br></br> by Brendan Ozongho Tabod.Seem some of my work at:
        <br />
        <a href="https://github.com/MixedPepperoni" target="_blank" rel="noopener noreferrer">
          Here, I hope it's to your liking.
        </a>
      </p>
    </div>
  );
}
