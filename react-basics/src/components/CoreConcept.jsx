import CoreConceptCard from "./CoreConceptCard"

export default function CoreConcept({ data }) {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul className="core-concept-div">
                {data.map((dataEntry, idx) => (
                    <li key={idx}>{CoreConceptCard(dataEntry)}</li>
                ))}
            </ul>
        </section>
    )
}