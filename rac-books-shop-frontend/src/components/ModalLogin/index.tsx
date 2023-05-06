
import { useState } from "react"
import axios from "axios";
import Button from '@mui/material/Button';
import imagemPrincipal from './assets/login.png'

import './ModalLogin.css'
import { Box, Modal, Stack, TextField } from "@mui/material";
import React from "react";

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
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalLogin = (props: PropsModalLogin) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {
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
                    <form onSubmit={submitLogin}>

                        <Box
                            component="form"
                            alignItems={"center"}
                            sx={{ '& .MuiTextField-root': { m: 1, width: '42ch' }, }}
                            noValidate
                            autoComplete="off">

                            <TextField
                                required
                                id="filled-required"
                                label="Email"
                                variant="filled"
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setEmail(event.target.value);
                                }}
                            />

                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </Box>

                        <div className="acoes">
                            <Stack alignItems={"end"} marginRight={"15%"}>
                                <Button variant="contained" size="large"
                                    onClick={() => { submitLogin() }}
                                >Login </Button>
                            </Stack>
                        </div>

                    </form>
                </section>
            </Box>
        </Modal >
    )
}

export default ModalLogin