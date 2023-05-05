import './Footer.css'

const Footer = () => {
    return (<footer className="rodape">
        <h2 className="rodape__titulo">RAC Group</h2>
        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Company</li>
            <li className="lista-rodape__item">
                <img src="/imagens/company.png" alt="company logo" />
                <a href="#!" className="lista-rodape__link">Info about company</a>
            </li>
        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Partners</li>
            <li className="lista-rodape__item">
                <img src="/imagens/company.png" alt="Partner 01 logo" />
                <a href="#!" className="lista-rodape__link">Partner 01</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/company.png" alt="Partner 02 logo" />
                <a href="#!" className="lista-rodape__link">Partner 02</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/company.png" alt="Partner 03 logo" />
                <a href="#!" className="lista-rodape__link">Partner 03</a>
            </li>
        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Social Midias</li>
            <li className="lista-rodape__item">
                <img src="/imagens/contact/instagram.png" alt="Instagram logo" />
                <a href="#!" className="lista-rodape__link">Instagram</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/contact/facebook.png" alt="Facebook logo" />
                <a href="#!" className="lista-rodape__link">Facebook</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/contact/twitter.png" alt="Twitter logo" />
                <a href="#!" className="lista-rodape__link">Twitter</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/contact/whatsapp.png" alt="Whatsapp logo" />
                <a href="#!" className="lista-rodape__link">Whatsapp</a>
            </li>
            <li className="lista-rodape__item">
                <img src="/imagens/contact/linkedin.png" alt="Linkedin logo" />
                <a href="#!" className="lista-rodape__link">Linkedin</a>
            </li>
        </ul>
    </footer>)
}

export default Footer