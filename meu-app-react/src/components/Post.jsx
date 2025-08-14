import './Post.css'

function Post(props){

    
    return(
    <div >
    
        <div className='post'>
             
            <img src="\entenda-como-a-inteligencia-artificial-esta-transformando-o-mundo.jpg" alt="" />

            <div className='textos'>
             <h3>{props.tipo}</h3>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <p>{props.data}</p>
            </div>

        
         <button onClick={props.handleDelete}>Excluir </button>
        </div>
       
        
    </div>
    )
  
}

export default Post