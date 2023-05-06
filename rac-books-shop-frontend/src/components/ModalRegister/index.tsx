import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import axios, { Axios } from "axios"
import Button from '@mui/material/Button';

import loginImg from './assets/login.png'
import './ModalRegister.css'
import { Box, Modal, Stack } from "@mui/material";

interface PropsModalRegister {
    opened: boolean
    whenClose: () => void
}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalRegister = (props: PropsModalRegister) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [cep, setCep] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmed, setPasswordConfirmed] = useState('')

    const aoSubmeterFormular = () => {
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

        <Modal
            open={props.opened}
            onClose={props.whenClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={styleModal}>

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
                                    onClick={() => { aoSubmeterFormular() }}
                                >Create</Button>
                            </Stack>
                        </div>
                    </form>
                </section>
            </Box>
        </Modal>
    )
}

export default ModalRegister