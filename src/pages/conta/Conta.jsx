import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Conta.css'


export default function Conta(){

    const [nome, SetNome] = useState()
    const [senha, SetSenha] = useState()
    const [error, SetError] = useState(false)
    const navigate = useNavigate()


 
    function handleSenha (valor) {
        SetError(valor.length < 8)
        SetSenha(valor)
    }

    function salvar (e) {
        e.preventDefault()
       navigate('/') 
    }

    return(
        <form>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text" 
            id = 'nome' 
            value = {nome}
            onChange={e => SetNome(e.target.value)}            
            />

            <label htmlFor="senha">Senha</label>
            <input 
            type="password" 
            id = 'senha' 
            value = {senha}
            onChange={e => handleSenha(e.target.value)}
            />

            {error && <span>Senha muito curta!</span>}

            <button disabled = {error} onClick = {salvar}>Salvar</button>

        </form>
    )
}
