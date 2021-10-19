import React from 'react'

// Import de imagens
import LogoImg from '../assets/img/logo-corebiz.png'
import IconCart from '../assets/img/icon/cart.svg'
import IconUser from '../assets/img/icon/user.svg'
import IconGlass from '../assets/img/icon/glass.svg'

const Header = () => {
    return(
        <header>
            <div className="logo-img">
                <img src={LogoImg} alt="Logo Corebiz" />
            </div> 
            <div className="SearchBar">
                <input type="text" />
                <button className="BtnGlass">
                    <img src={IconGlass} alt="Icone de pesquisa" />
                </button>
            </div>
            <div className="ColUser">
                <a href="http://localhost:3000/">
                    <img src={IconUser} alt="Icone de Usuario" />
                    <span className="mobile">Minha Conta</span>
                </a>
            </div>
            <div className="Cart">
                <img src={IconCart} alt="Icone de Carrinho de compra" />
            </div>
        </header>
    )
}

export default Header