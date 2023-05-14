import { useState } from "react"
import axios, { Axios } from "axios"
import Button from '@mui/material/Button';

import loginImg from './assets/login.png'
import './ModalRegister.css'
import { Box, Modal, Stack, TextField } from "@mui/material";
import http from "../../http";

interface PropsModalRegister {
    opened: boolean
    whenClose: () => void
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

       http.post('public/register', user)
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

                        <Box
                            component="form"
                            alignItems={"center"}
                            sx={{ '& .MuiTextField-root': { m: 1, width: '42ch' }, }}
                            noValidate
                            autoComplete="off">

                            <TextField
                                required
                                id="filled-required"
                                label="Name"
                                variant="filled"
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setName(event.target.value);
                                }}
                            />

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
                                required
                                id="filled-required"
                                label="Address"
                                variant="filled"
                                value={address}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setAddress(event.target.value);
                                }}
                            />

                            <TextField
                                required
                                id="filled-required"
                                label="Complement"
                                variant="filled"
                                value={complement}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setComplement(event.target.value);
                                }}
                            />

                            <TextField
                                required
                                id="filled-required"
                                label="CEP"
                                variant="filled"
                                value={cep}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setCep(event.target.value);
                                }}
                            />

                            <TextField
                                required
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

                            <TextField
                                required
                                id="filled-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                                value={passwordConfirmed}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setPasswordConfirmed(event.target.value);
                                }}
                            />
                        </Box>

                        <div className="acoes">
                            <Stack alignItems={"end"} marginRight={"15%"}>
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