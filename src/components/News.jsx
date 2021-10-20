import axios from "axios"
import { useCallback, useState } from "react"
import { useEffect } from "react/cjs/react.development"

const News = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [newsletterSuccess, setNewsletterSuccess] = useState(false)

    const handleSubmit = useCallback(
        () => {
            if (!name) {
                setNameError(true)
            }

            if (!email) {
                setEmailError(true)
            }

            if (name && email) {
                let body = {
                    "email": email,
                    "name": name
                }
                axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', body)
                    .then(response => {
                        console.log(response)
                    });

                setNewsletterSuccess(true)
                setNameError(false)
                setEmailError(false)
            }
        }, [name, email]
    )

    useEffect(
        () => {
            console.log(email)
        }, [email]
    )

    return (
        <div>
            {newsletterSuccess ? (
                <div className="news-letter">
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <div className="form-news-letter">
                        <input type="button" className="btn-new-registro" onClick={() => { setNewsletterSuccess(false);  setName(""); setEmail("")}} value="Cadastrar novo e-mail" />
                    </div>
                </div>
            ) : (
                <div className="news-letter">
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <div className="form-news-letter">
                        <label htmlFor="name" className={nameError ? "error-ajuste" : ""}>
                            <input type="text" id="name" className={nameError ? "input-error" : ""} onChange={(event) => { setName(event.target.value) }} placeholder="Digite seu nome" />
                            {nameError && (<span className="Error">Preencha com seu nome completo</span>)}
                        </label>
                        <label htmlFor="email" className={emailError ? "error-ajuste" : ""}>
                            <input type="email" id="email" className={emailError ? "input-error" : ""} onChange={(event) => { setEmail(event.target.value) }} placeholder="Digite seu email" />
                            {emailError && (<span className="Error">Preencha com seu nome completo</span>)}
                        </label>
                        <input type="button" id="btn-news" onClick={() => { handleSubmit() }} value="Eu quero!" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default News