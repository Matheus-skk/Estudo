'use client'
import { useState } from "react"

export function Button(){
    const [nome, setName] = useState("Sujeito Progrmador")

    function handleChangeName(){
        setName("Matheus de Sousa")
    }
    return(
        <div>
            <button onClick={handleChangeName}>Alerar nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}