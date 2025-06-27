import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "components/PostModelo";

export default function Post(){
    const parametros = useParams();
    const post = posts.find((post)=>{
        return post.id === Number(parametros.id)
    })
    return(
        <div>
           <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
           >

           </PostModelo>
        </div>
    )
}