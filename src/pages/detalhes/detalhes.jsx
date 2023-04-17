import { Link, useParams } from 'react-router-dom'
import './detalhes.css'
import useAxios from 'axios-hooks'


export default function Detalhes(){
    const {id} = useParams()
    const url = `https://www.themoviedb.org/3/movie/${id}?api_key=1e922667481ab207d642450b0efb461e&language=pt-BR`
    const [{data,loading, error}] = useAxios(url)

    const urlImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/"
    const produto = data;

    return(
    <>
       <Link to={('/')} >Voltar</Link>
       {/* <img src={urlImage + filme.poster_path} alt=""  className='poster'/> */}
       <h1>{produto.title}</h1>
       <h1>{produto.overview}</h1>

    </>
    )
}
