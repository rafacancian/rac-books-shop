import { Link, useNavigate } from "react-router-dom"
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
    
    const token = sessionStorage.getItem("token")
    const [userLogged, setUserLogged] = useState<boolean>(token != null && token != undefined)

    const navigate = useNavigate();
    
    const whenExecuteLogin = () => {
        setModalLoginOpened(false)
        setUserLogged(true)
    }

    const whenExecuteLogout = () => {
        setUserLogged(false)
        sessionStorage.removeItem("token")
        navigate("/")
    }

    const WhenExecuteMyAccount = () => {
        navigate("/admin/account/orders")
    }

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
                {!userLogged && (<>
                    <li>
                        <NavButton text="Login" textAltSrc="User icon" imageSrc={userImg}
                            onClick={() => setModalLoginOpened(true)} />
                        <ModalLogin
                            opened={modalLoginOpened}
                            whenClose={() => setModalLoginOpened(false)}
                            whenExecuteLogin={whenExecuteLogin}
                        />
                    </li>
                    <li>
                        <NavButton text="Create Account" textAltSrc="User icon" imageSrc={userImg}
                            onClick={() => setModalRegisterOpened(true)} />
                        <ModalRegister
                            opened={modalRegisterOpened}
                            whenClose={() => setModalRegisterOpened(false)}
                        />
                    </li>
                </>)}
                {userLogged && <>
                    <li>
                        <NavButton
                            text="My Account"
                            textAltSrc="User logo"
                            imageSrc={userImg}
                            onClick={WhenExecuteMyAccount}
                        />
                    </li>
                    <li>
                        <NavButton
                            text="Logout"
                            textAltSrc="User logo"
                            imageSrc={userImg}
                            onClick={whenExecuteLogout}
                        />
                    </li>
                </>}
            </ul>
        </nav>
    )
}

export default NavBar