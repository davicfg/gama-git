import React, { useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    }else{
      history.push('/');
    }

  }, [history])
  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>
      <S.List>
        { repositories.map(repository => {
          return (
          <S.ListItem>{repository}</S.ListItem>
          )
        })}
      </S.List>

        <S.LinkHome to='/'>Voltar</S.LinkHome>
    </S.Container>
  )
}