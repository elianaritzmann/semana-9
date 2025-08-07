import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='painel'>
        <h1>Painel de gerenciamento</h1>
        <span>Novo post</span>
       <form action="">
        <input type="text" placeholder='Titulo' />
        <textarea name="descricao" id="descricao" placeholder='descrição'></textarea>
       </form>
      </div>
    </>
  )
}

export default App
