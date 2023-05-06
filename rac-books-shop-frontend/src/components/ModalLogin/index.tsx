import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import axios from "axios";
import Button from '@mui/material/Button';

import imagemPrincipal from './assets/login.png'

import './ModalLogin.css'

interface PropsModalLogin {
    opened: boolean
    whenClose: () => void
    whenExecuteLogin: () => void
}

const ModalLogin = (props: PropsModalLogin) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const user = {
            email,
            password,
        }
        console.log(user)

        axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                Accept: 'application/json',
                Content: 'application/json'
            }
        }).post('public/login', user)
            .then(response => {
                sessionStorage.setItem('token', response.data.access_token)
                setEmail('')
                setPassword('')
                props.whenExecuteLogin()
            })
            .catch(error => {
                if (error?.response?.data?.message) {
                    alert("Login error: " + error);
                } else {
                    alert("Login error")
                }
            })
    }

    return (<AbModal
        titulo="Login"
        aberta={props.opened}
        aoFechar={props.whenClose}
    >
        <section className="modalLoginBody">
            <figure>
                <img src={imagemPrincipal} alt="Login user Icon" />
            </figure>
            <form onSubmit={aoSubmeterFormular}>
                <AbCampoTexto
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbCampoTexto
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    type="password"
                />
                <div className="acoes">
                    <Button variant="contained" size="large">Login </Button>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalLogin