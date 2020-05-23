import React, { useState } from 'react';
import * as S from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function App() {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();

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
        history.push('/repositories');
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
