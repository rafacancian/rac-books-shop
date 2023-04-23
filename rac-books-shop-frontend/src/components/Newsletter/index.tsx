import { AbCampoTexto } from 'ds-alurabooks'
import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    return (<section className='Newsletter'>
        <div>
            <h6>Stay up to date with the news!</h6>
             <p>Ebook updates, new books, promotions and more</p>
        </div>
        <form>
            <AbCampoTexto 
                darkmode={false} 
                value={email}
                onChange={setEmail}
                placeholder="Register your email"
            />
        </form>
    </section>)
}

export default Newsletter