import Button from '../Button'
import FieldText from '../FieldText'
import ListSuspended from '../ListSuspended'
import './Forms.css'
export default function Forms(){

  const times = [
    'Progamação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (event) =>{
    event.preventDefault()
    console.log('form foi submetido')
  }
    return(
      <section className='forms'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do calaborador</h2>
            <FieldText obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <FieldText obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <FieldText label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListSuspended obrigatorio={true} label="Time" itens={times}/>
            <Button>
              Criar card
            </Button>
        </form>
      </section>
    )
}