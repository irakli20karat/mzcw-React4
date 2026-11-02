import reactAtomImg from './assets/react-core-concepts.png'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

export default function Header() {
    return (
        <header>
            <img src={reactAtomImg} />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[getRandomInt()]} React concepts you will need for almost any app you are going to
                build!
            </p>
        </header>
    )
}