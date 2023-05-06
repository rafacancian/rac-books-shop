import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import axios, { Axios } from "axios"
import Button from '@mui/material/Button';

import loginImg from './assets/login.png'
import './ModalRegister.css'
import { Stack } from "@mui/material";

interface PropsModalRegister {
    opened: boolean
    whenClose: () => void
}

const ModalRegister = (props: PropsModalRegister) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [cep, setCep] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmed, setPasswordConfirmed] = useState('')

    const aoSubmeterFormular = () => {
        //props.preventDefault()
        const user = {
            name,
            email,
            password,
            address,
            cep,
            complement
        }
        console.log("Action to register user: " + user)

        axios.create({
            baseURL: 'http://localhost:8000',
            headers: {
                Accept: 'application/json',
                Content: 'application/json'
            }
        }).post('public/register', user)
            .then(() => {
                alert("User registered with success")
                setName("")
            })
            .catch(error => {
                alert("Register error: " + error)
            })
    }

    return (
        <AbModal
            titulo="Register"
            aberta={props.opened}
            aoFechar={props.whenClose}
        >
            <section className="registerBody">
                <figure>
                    <img src={loginImg} alt="Register user icon" />
                </figure>
                <form onSubmit={aoSubmeterFormular}>
                    <AbCampoTexto
                        label="Name"
                        value={name}
                        onChange={setName}
                    />
                    <AbCampoTexto
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        type="email"
                    />
                    <AbCampoTexto
                        label="Address"
                        value={address}
                        onChange={setAddress}
                    />
                    <AbCampoTexto
                        label="Complement"
                        value={complement}
                        onChange={setComplement}
                    />
                    <AbCampoTexto
                        label="CEP"
                        value={cep}
                        onChange={setCep}
                    />
                    <AbCampoTexto
                        label="Password"
                        value={password}
                        onChange={setPassword}
                        type="password"
                    />
                    <AbCampoTexto
                        label="Confirm password"
                        value={passwordConfirmed}
                        onChange={setPasswordConfirmed}
                        type="password"
                    />
                    <div className="acoes">
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" size="large"
                           onClick={() => {aoSubmeterFormular()}}
                            >Create</Button>
                        </Stack>
                    </div>
                </form>
            </section>
        </AbModal>)
}

export default ModalRegister