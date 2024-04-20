import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});
  async function handleSearch() {
    if(input === ""){
      alert('Forneça um CEP!')
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    } catch {
      alert('CEP não encontrado!')
      setInput('')
    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscar CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Forneça o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          {Object.keys(cep.logradouro).length > 0 && (
            <span>Lagradouro: {cep.logradouro}</span>
          )}
          {Object.keys(cep.complemento).length > 0 && (
            <span>Complemento: {cep.complemento}</span>
          )}
           {Object.keys(cep.bairro).length > 0 && (
            <span>Bairro: {cep.bairro}</span>
          )}
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
      <footer className="footer">
        <p>
          ₢ 2024, Por{" "}
          <a href="https://github.com/lluissf" target="_blank" rel="noreferrer">
            Luís Felipe
          </a>{" "}
          - Todos os Direitos Reservados.{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
