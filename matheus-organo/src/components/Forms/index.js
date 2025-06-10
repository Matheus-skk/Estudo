import { useState } from 'react'
import Button from '../Button'
import FieldText from '../FieldText'
import ListSuspended from '../ListSuspended'
import './Forms.css'
export default function Forms(props){



  const[nome, setNome] = useState('')
  const[cargo, setCargo] = useState('')
  const[imagem, setImagem] = useState('')
  const[time, setTime] = useState('')

  const aoSalvar = (event) =>{
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }
    return(
      <section className='forms'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do calaborador</h2>
            <FieldText obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
            <FieldText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
            <FieldText label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
            <ListSuspended obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
            <Button>
              Criar card
            </Button>
        </form>
      </section>
    )
}