import { use, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [titulo,setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const[url, setUrl] =useState('')
  const[data, setData]= useState('')
  const[categoria, setCategoria]= useState('')
  const hoje = new Date()
  const [qntd, setQntd]=useState(0)
   function save(event){
    event.preventDefault()
    if(titulo === '' || descricao === ''){
      alert('Esses campos não podem ficar vazios')
    }else if(!url.startsWith('http')){
      alert('link invalido')
    }else if(categoria === ''){
      alert('selecione uma categoria')
    }else if (data<hoje){
      alert('data invalida')
    }
    
    const postsExistentes = JSON.parse(localStorage.getItem('posts')) || [];
    const novoPost = {
    Titulo: titulo,
    Descrição: descricao,
    URL: url,
    Data: data,
    Categoria: categoria
  };

  postsExistentes.push(novoPost);
  localStorage.setItem('posts', JSON.stringify(postsExistentes));

  if(postsExistentes.length > 0){
    setQntd(qntd+1);
  }

   }
  return( 
    <>
      <div id='painel'>
        <h1>Painel de gerenciamento</h1>
        <span>Novo post</span>
       <form action="" onSubmit={save}>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name='titulo' placeholder='Titulo' value={titulo}
        onChange={(event)=>{ setTitulo(event.target.value)}} />
        <label htmlFor="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" placeholder='descrição' value={descricao} 
        onChange={(event)=>{ setDescricao(event.target.value)}
        }>
        </textarea>
        <input type="text" placeholder='URL da imagem de capa'value={url} onChange={(event)=>{ setUrl(event.target.value)} } />
        <input type="date" placeholder='Data de publicação' value={data} onChange={(event)=>{ setData(event.target.value)} } />
        <label htmlFor="categoria">Tipo do post: </label>
        <select name="categoria" id="categoria" value={categoria} onChange={(event)=>{ setCategoria(event.target.value)} } >
          <option value="artigo">Artigo</option>
          <option value="noticia">Notícia</option>
          <option value="tutorial">Tutorial</option>
          <option value="entrevista">Entrevista</option>
        </select>
        <button type='submit'>Publicar</button>
       </form>
       <h3>Quantidade de posts:  {qntd}</h3>
      </div>
    </>
  )
}

export default App
