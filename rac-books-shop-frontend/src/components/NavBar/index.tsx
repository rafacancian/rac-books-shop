import { Link, useNavigate } from "react-router-dom"
import logo from './assets/logo.png'
import './NavBar.css'
import NavButton from "../NavButton"
import userImg from './assets/usuario.svg'
import ModalRegister from "../ModalRegister"
import ModalLogin from "../ModalLogin"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react"
import React from "react"

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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="RAC Books logo" />
                </Link>
            </h1>
            <ul className="navegacao">

                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        Categories
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Backend</MenuItem>
                        <MenuItem onClick={handleClose}>Frontend</MenuItem>
                        <MenuItem onClick={handleClose}>Devops</MenuItem>
                        <MenuItem onClick={handleClose}>Design e UX</MenuItem>
                    </Menu>
                </div>
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