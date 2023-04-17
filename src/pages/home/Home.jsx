import useAxios from 'axios-hooks'
import './Home.css'
import CardProduto from '../../components/CardProduto';


export default function Home() {

  const [{data, loading, error}] = useAxios('https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e'); //corrigir para a nova api

  if(loading) return <p> Loading...</p>
  if(error) return <p> Error!</p>

  const produto = data.results

  return (

     <div className = "App">
       <h1>Senac Fruit</h1>
       <h2>A alternativa mais saudável</h2>

      <section className = "Produtos">
      {produto.map(prod => <CardProduto prod = {prod} />)}

 
       </section>
     </div>
  )
}

