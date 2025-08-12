import Post from "./Post"
import { useState, useEffect } from 'react';

function PostsList(){
    const[post, setPost] = useState([]);

    useEffect(()=> {
        const postsExistentes =JSON.parse(localStorage.getItem('posts'))
        setPost(postsExistentes)
    }
    ,[])

      console.log(post)
      
    return(
          
     <div> 
      {post.map((p, i)=>(
         <Post key = {i}
              tipo = {p.Categoria}
              titulo= {p.Titulo}
              descricao = {p.Descricao}
              data = {p.Data}
        ></Post>

      ))}
       
    </div>

    )
   
}

export default PostsList