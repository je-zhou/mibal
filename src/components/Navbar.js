import './navbar_styles.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return <nav className="nav">
        <NavLink to="/" className="title" end>Mibal</NavLink>
        <ul>
            <NavLink to="/balance-sheet"
                className="link-active" >Balance Sheet</NavLink>
            <NavLink to="/cash-flow"
                className={isActive => isActive ? "link-active" : "link"} >Cash Flow</NavLink>
        </ul>
    </nav>
}
