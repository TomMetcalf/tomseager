import './App.css';

function App() {
  return (
    <>
      <h1>www.tom-seager.com</h1>
      <h2>The home of Tom Seager</h2>
      <p>Site currently under construction.</p>
      <p>Please check back for future updates.</p>
      <section className="siteLinks">
        <a
          href="https://art.tom-seager.com"
          className="siteLinkStyle"
          target="_blank"
        >
          Visit Tom Seager's Art Site
        </a>
        <a
          href="https://dev.tom-seager.com"
          className="siteLinkStyle"
          target="_blank"
        >
          Visit Tom Seager's Dev Site
        </a>
      </section>
    </>
  );
}

export default App;
