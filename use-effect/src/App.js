import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [racas, setRacas] = useState([])
  const [busca, setBusca] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
    .then(resposta => resposta.json())
    .then(dados => {
      setRacas(dados)
    })
  }, [])

  useEffect(() => {
    if(busca && busca.length > 3){
    fetch('http://localhost:8080/doguinhos?nome=' +busca)
    .then(resposta => resposta.json())
    .then(dados => {
      setRacas(dados)
    })
    }
  }, [busca])
  return (
    <div className="App">
      <h1>Bem vindo aos doguinhos!</h1>
      <h4>Confira abaixo uma lista de raças dos doguinhos</h4>
      <input placeholder='buscar por raça' onChange={evento => setBusca(evento.target.value)}/>
      <ul>
        {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
      </ul>
    </div>
  );
}

export default App;
