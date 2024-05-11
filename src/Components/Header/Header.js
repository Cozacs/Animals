import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/" className="Link">Home</Link>
                <Link to="/Contacts" className="Link">Contact</Link>
            </nav>
        </header>
    );
}