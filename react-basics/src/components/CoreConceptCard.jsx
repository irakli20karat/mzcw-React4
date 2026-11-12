export default function CoreConceptCard({ image, title, description }) {
    return (
        <div className="concept-card">
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}