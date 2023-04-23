import { ReactNode } from "react"
import './Banner.css'
import fundo from './assets/fundo.png'

interface BannerProps {
    title?: string
    subtitle?: string
    children?: ReactNode
}

const Banner = ({ title, subtitle, children } : BannerProps) => {
    return (<section className="banner" style={{ backgroundImage: `url(${fundo})`}}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
    </section>)
}

export default Banner