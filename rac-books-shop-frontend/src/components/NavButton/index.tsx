import './NavButton.css'

interface NavButtonProps {
    imageSrc: string
    textAltSrc: string
    text?: string
    onClick?: () => void
}

const NavButton = ({ imageSrc, text, textAltSrc, onClick }: NavButtonProps) => {
    const manipularClick = () => {
        if (onClick) {
            onClick()
        }
    }
    
    return (<button className="btn-nav" onClick={manipularClick}>
        <img src={imageSrc} alt={textAltSrc} />
        {text}
    </button>)
}

export default NavButton