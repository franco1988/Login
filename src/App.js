import React, { useState } from 'react'
import './App.css'

function App() {
  const [registro, setRegistro] = useState({
    email: '',
    contraseña: ''
  })

  return (
    <div className="app">
      <form className="form">
        <div className="titulo">
          Ben-vindo do volta!
        </div>
        <div className='frase1'>
          Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.
        </div>

        <div className="email">
          <input type="email" class="form-control" placeholder="E-mail"/>
        </div>
        <div className="contraseña">
          <input type="password" class="form-control" placeholder="Senha"/>
        </div>
        <div className="frase2">
          Esqueceu sua senha?
        </div>
        <button type="submit" className="boton">Entrar</button>
        <div className="frase3">
          OU ENTRE COM
        </div>
        <div className="frase4">
          Ainda não tem uma conta? Cadastre-se
        </div>
      </form>
      <div className="fondo">
       
      </div>
    </div>
  );
}

export default App;
