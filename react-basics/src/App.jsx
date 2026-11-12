import reactCoreConceptsImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data"
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { useState } from 'react'

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

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Select a topic");
  function onSelect(value) {
    setSelectedTopic(value);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Lets Get Started!</h2>
        <CoreConcept data={CORE_CONCEPTS} />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton handleClick={() => onSelect("Components")}>Components</TabButton>
            <TabButton handleClick={() => onSelect("JSX")}>JSX</TabButton>
            <TabButton handleClick={() => onSelect("Props")}>Props</TabButton>
            <TabButton handleClick={() => onSelect("State")}>State</TabButton>
            {selectedTopic}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
