const News = () => {
    return(
        <div className="newsletter">
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <div className="FormNewsletter">
                <input type="text" placeholder="Digite seu nome" />
                <input type="email" placeholder="Digite seu email" />
                <input type="button" value="Eu quero!" />
            </div>
        </div>
    )
}

export default News