// Import de imagens
import IconChat from '../assets/img/icon/chat.svg'
import IconFone from '../assets/img/icon/fone.svg'
import ImgVtex from '../assets/img/vtex.svg'
import ImgCore from '../assets/img/created.png'

const Footer = () => {
    return (
        <footer>
            <div className="about-corebiz">
                <article>
                    <h3>Localização</h3>
                    <div className="bar"></div>
                </article>
                <ul>
                    <li>Avenida Andrômeda, 2000. Bloco 6 e 8 </li>
                    <li>Alphavile SP</li>
                    <li>brasil@corebiz.ag</li>
                    <li>+55 11 3090 1039</li>
                </ul>
            </div>
            <div className="btn-info">
                <a href="http://localhost:3000/">
                    <img src={IconChat} alt="Icone de Mensagem" />
                    ENTRE EM CONTATO
                </a>
                <a href="http://localhost:3000/">
                    <img src={IconFone} alt="Icone de HeadPhone" />
                    FALE COM O NOSSO CONSULTOR ONLINE
                </a>
            </div>
            <div className="criadores">
                <a href="http://localhost:3000/">
                    <img src={ImgCore} alt="Imagem da CoreBiz" />
                </a>
                <a href="http://localhost:3000/">
                    <img src={ImgVtex} alt="Imagem da Vtex" />
                </a>
            </div>
        </footer>
    )
}

export default Footer