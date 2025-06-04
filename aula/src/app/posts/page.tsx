import Link from "next/link";
import { MeuPost } from "./_components/meupost";

export interface PostProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps{
    posts: PostProps[]
}
export const revalidate = 60

export default async function PostsPage(){

    const response = await fetch('https://dummyjson.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 60
        }
    })
    const data: ResponseProps = await response.json()

    //console.log(data);
async function handleFetchUser(formData: FormData) {
    'use server'
    const userId = formData.get('userId')

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`,)
    const data: ResponseProps = await response.json()

    console.log(data)
}

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os Posts</h1>

            <form className="flex gap-2 my-3" action={handleFetchUser}>
                <input 
                type="text"
                placeholder="ID do usuário"
                className="border border-gray-200 p-2 ml-3 "
                name="userId"
                />
                <button className=" bg-blue-500 text-white p-2 " >
                    Buscar usuário 
                </button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                 <MeuPost post={"meu novo conteudo"}/>

                {data.posts.map(post =>(
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>                   
                     <MeuPost post={post.body}/>
                     <Link className="text-blue-500" href={`/posts/${post.id}`}>
                        Acessa detalhes                     
                     </Link>

                    </div>
                ))}

            </div>
        </div>
    )
}