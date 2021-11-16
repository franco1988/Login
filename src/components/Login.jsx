import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import '../App.css'
import { registroUsuario } from './action';

export function validate(valor){
  let error = {};
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor.username)){
    error.username = 'Ingrese un email valido'
   }
  if(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(valor.password)){ 
    error.password = 'Ingrese una contraseña valida' 
  }
  return error;
}

export default function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState({})
  const [registro, setRegistro] = useState({
    username: '',
    password: ''
  })

  function handleRegistro(e){
    setError(validate({
      ...registro,
      [e.target.name]: e.target.value
    }));
    
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("Registro =>",registro)
    dispatch(registroUsuario(registro));
    setRegistro({
      username: '',
      password: ''
    });
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit} >
        <div className="titulo">
          Ben-vindo do volta!
        </div>
        <div className='frase1'>
          Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.
        </div>

        <div className="email">
          <input type="email" class='form-control' onChange={handleRegistro}
            value={registro.username} name="username" placeholder="E-mail"/>
        </div>
        <div className="contraseña">
          <input type="password" class='form-control' onChange={handleRegistro}
            value={registro.password} name="password" placeholder="Senha"/>
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
  )
}
