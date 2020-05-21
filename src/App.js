import React, {useState} from 'react';

function App(props) {
  return (
    <>
    <h1>{props.title}</h1>
    <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
    <button type='button'>Pesquisar</button>
    </>
  );
}

export default App;
