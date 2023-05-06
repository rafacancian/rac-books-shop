import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import axios from "axios";
import Button from '@mui/material/Button';

import imagemPrincipal from './assets/login.png'

import './ModalLogin.css'
import { Box, Modal, Stack, Typography } from "@mui/material";

interface PropsModalLogin {
    opened: boolean
    whenClose: () => void
    whenExecuteLogin: () => void
}

const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalLogin = (props: PropsModalLogin) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const aoSubmeterFormular = () => {
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

    return (
        <Modal
            open={props.opened}
            onClose={props.whenClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={styleModal}>
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
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" size="large"
                                    onClick={() => { aoSubmeterFormular() }}
                                >Login </Button>
                            </Stack>
                        </div>
                    </form>
                </section>
            </Box>
        </Modal>

    )
}

export default ModalLogin