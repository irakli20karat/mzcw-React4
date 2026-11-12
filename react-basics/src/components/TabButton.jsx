export default function TabButton({ handleClick, children }) {
    return (<>
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    </>)
}