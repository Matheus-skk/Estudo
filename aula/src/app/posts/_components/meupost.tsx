
type MeuPostType = {
    post: string  
}

export function MeuPost ({post}: MeuPostType) {
    return (
    <div className="bg-gray-800 p-5 text-2xl text-white border border-blue-300">                                                
                <p>{post}</p>
                </div>
    )
}
