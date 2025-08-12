import './Post.css'
function post(props){
    return(
    <div >
    
        <div className='post'>
             
            <img src="\entenda-como-a-inteligencia-artificial-esta-transformando-o-mundo.jpg" alt="" />

            <div className='textos'>
             <h3>{props.tipo}</h3>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <span>{props.data}</span>
            </div>

        
         <button>Excluir </button>
        </div>
       
        
    </div>
    )
  
}

export default post