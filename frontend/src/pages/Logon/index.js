import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'     // feather icons

import api from '../../services/api.js'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    const [ id, setId ] = useState('')
    
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('session', { id })

            // Para ter esse nome disponível na aplicação salva isso no storage do navegador
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (error) {
            alert('Falha no Login. Tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}/>
                    {/* no react escreve-se className e não class, pois class é uma palavra reservada do JavaScript */}
                    <button className="button" type="submit">Entrar</button>

                    {/* Se usar o a ele recarrega a página e assim recarrega todo o react,
                        ao invés de apenas mudar a rota.
                        Para resolver isso usa-se o componente Link do react-router-dom. */}
                    {/* Sério, o resultado é muito massa */}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}