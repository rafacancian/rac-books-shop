import { Link } from "react-router-dom"
import logo from './assets/logo.png'
import './NavegationBar.css'

const NavegationBar = () => {
    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="RAC Books logo" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categories</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Backend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Devops
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>

    </nav>)
}

export default NavegationBar