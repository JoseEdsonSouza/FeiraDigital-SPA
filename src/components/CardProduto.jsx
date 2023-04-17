import { useState } from 'react'
import './CardProduto.css'
import { Link } from 'react-router-dom'


export default function CardProduto({prod}){

    const [carrinho, setCarrinho]  = useState(false)
    const urlImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/" // trocar para a nova API
9
    function Addcarrinho() {
        carrinho.valueOf() == false  ?  setCarrinho(true) : setCarrinho(false)
    }

    return(
        <div className = "CardProduto">

            <img src={urlImage + prod.poster_path} alt={`imagem do produto ${prod.title}`} />
            
            <h3>{prod.title}</h3>

            <p><strong>
                {carrinho ? "Adicionado!" : ""}
            </strong></p>

            <span>{prod.vote_average.toFixed(1)}</span>

          {/* adicionar o perfil do vendedor */}
            <p><Link to = {'/vendedor/'+ prod.id} state={prod} className='botao'>Perfil do Vendedor</Link></p>

            <button on onClick={Addcarrinho}>Adicionar ao Carrinho</button>
        </div>

    )
}