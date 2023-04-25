import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalLogin.css'

interface PropsModalLogin {
    opened: boolean
    whenClose: () => void
}

const ModalLogin = (props : PropsModalLogin) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const user = {
            email,
            password,
        }
        // TODO http.post to login user
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
                    <AbBotao texto="Login"/>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalLogin