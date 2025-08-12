import './Post.css'
function post(){
    return(
    <div >
    
        <div className='post'>
             
            <img src="\entenda-como-a-inteligencia-artificial-esta-transformando-o-mundo.jpg" alt="" />

            <div className='textos'>
             <h3>tipo de post</h3>
            <h1>Titulo do post</h1>
            <p>descrição do post</p>
            <span>data do post</span>
            </div>

        
         <button>Excluir </button>
        </div>
       
        
    </div>
    )
  
}

export default post