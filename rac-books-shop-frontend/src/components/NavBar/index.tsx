import { Link } from "react-router-dom"
import logo from './assets/logo.png'
import './NavBar.css'
import NavButton from "../NavButton"
import userImg from './assets/usuario.svg'
import ModalRegister from "../ModalRegister"
import { useState } from "react"
import ModalLogin from "../ModalLogin"

const NavBar = () => {

    const [modalLoginOpened, setModalLoginOpened] = useState(false)
    const [modalRegisterOpened, setModalRegisterOpened] = useState(false)
    
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
                    <NavButton text="Login" textAltSrc="User icon" imageSrc={userImg} 
                    onClick={() => setModalLoginOpened(true)}/>
                    <ModalLogin 
                        opened={modalLoginOpened}
                        whenClose={() => setModalLoginOpened(false)}
                    />
                </li>
                <li>
                    <NavButton text="Create Account" textAltSrc="User icon" imageSrc={userImg}
                        onClick={() => setModalRegisterOpened(true)}/>
                    <ModalRegister 
                        opened={modalRegisterOpened}
                        whenClose={() => setModalRegisterOpened(false)}
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar