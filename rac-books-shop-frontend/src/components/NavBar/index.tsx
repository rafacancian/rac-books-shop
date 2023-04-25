import { Link } from "react-router-dom"
import logo from './assets/logo.png'
import './NavBar.css'
import NavButton from "../NavButton"
import userImg from './assets/usuario.svg'

const NavBar = () => {
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
                <NavButton text="Login" textAltSrc="Icone representando um usuário" imageSrc={userImg} />
            </li>
            <li>
                <NavButton
                    text="Cadastrar-se"
                    textAltSrc="Icone representando um usuário"
                    imageSrc={userImg}
                />
                {/* <ModalCadastroUsuario /> */}
            </li>
        </ul>
    </nav>)
}

export default NavBar