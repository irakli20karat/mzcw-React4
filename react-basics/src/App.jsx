import reactCoreConceptsImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data"

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}

function Header() {
  return (
    <header>
      <img src={reactCoreConceptsImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {titles[getRandomInt()]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

function CoreConceptCard({ image, title, description }) {
  return (
    <div className="concept-card">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function CoreConcept({ data }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="core-concept-div">
        {data.map(dataEntry => (
          <li>{CoreConceptCard(dataEntry)}</li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Lets Get Started!</h2>
        <CoreConcept data={CORE_CONCEPTS} />
      </main>
    </div>
  );
}

export default App;
