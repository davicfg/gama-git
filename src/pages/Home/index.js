import React, { useState } from 'react';
import * as S from './styled';
import axios from 'axios';

function App() {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    console.log(usuario);
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map(repository => {
        repositoriesName.push(repository.name);
      })

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    });
  }

  return (
    <S.Container>
      <S.Input className='usuarioInput' placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
  );
}

export default App;
