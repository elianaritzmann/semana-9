import { use, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [titulo,setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
   function save(event){
    event.preventDefault()

   }
  return(
    <>
      <div id='painel'>
        <h1>Painel de gerenciamento</h1>
        <span>Novo post</span>
       <form action="" onSubmit={save}>
        <input type="text" placeholder='Titulo' value={titulo}
        onChange={(event)=>{ setTitulo(event.target.value)}} />

        <textarea name="descricao" id="descricao" placeholder='descrição' value={descricao} 
        onChange={(event)=>{ setDescricao(event.target.value)}
        }>

        </textarea>
        <button type='submit'>Publicar</button>
       </form>
      </div>
    </>
  )
}

export default App
