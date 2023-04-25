import { Link } from "react-router-dom"
import logo from './assets/logo.png'
import './NavBar.css'
import NavButton from "../NavButton"
import userImg from './assets/usuario.svg'
import ModalCreateUser from "../ModalCreateUser"
import { useState } from "react"

const NavBar = () => {

    const [modalOpened, setModalOpened] = useState(false)

    return (
        <nav className="ab-navbar">
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
                            <Link to="/">Backend</Link>
                        </li>
                        <li>
                            <Link to="/">Frontend</Link>
                        </li>
                        <li>
                            <Link to="/">Devops</Link>
                        </li>
                        <li>
                            <Link to="/">Design e UX</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="acoes">
                <li>
                    <NavButton text="Login" textAltSrc="User icon" imageSrc={userImg} />
                </li>
                <li>
                    <NavButton text="Create Account" textAltSrc="User icon" imageSrc={userImg}
                        onClick={() => setModalOpened(true)}/>
                    <ModalCreateUser 
                        opened={modalOpened}
                        whenClose={() => setModalOpened(false)}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar