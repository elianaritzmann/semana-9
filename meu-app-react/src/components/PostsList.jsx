import Post from "./Post"
import { useState, useEffect } from 'react';

function PostsList(){
    const[post, setPost] = useState([]);

    useEffect(()=> {
        const postsExistentes =JSON.parse(localStorage.getItem('posts') || [])
        setPost(postsExistentes)
        
    }
    ,[])

    const  handleDelete = (id)=> {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const novaLista = posts.filter((p) => p.id !== id); 
        localStorage.setItem("posts", JSON.stringify(novaLista));
        setPost(novaLista)
        
    
    }
    return(
          
     <div> 
      {post.map((p,i)=>(
         <Post 
              key = {i}
              id = {p.id}
              tipo = {p.Categoria}
              titulo= {p.Titulo}
              descricao = {p.Descricao}
              data = {p.Data}
              handleDelete={() => handleDelete(p.id)}
        ></Post>

      ))}
       
    </div>

    )
   
}

export default PostsList