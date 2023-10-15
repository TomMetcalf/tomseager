import './App.css';

function App() {
  return (
    <>
      <h1 className="web-address">www.tom-seager.com</h1>
      <h2>
        <span className="first-line">The Home of </span>
        <span className="second-line">Tom Seager</span>
      </h2>
      <p>Site currently under construction.</p>
      <p>Please check back for future updates.</p>
      <section className="siteLinks">
        <a
          href="https://art.tom-seager.com"
          className="siteLinkStyle"
          target="_blank"
        >
          Visit Tom Seager Art Site
        </a>
        <a
          href="https://dev.tom-seager.com"
          className="siteLinkStyle"
          target="_blank"
        >
          Visit Tom Seager Dev Site
        </a>
      </section>
    </>
  );
}

export default App;
