import React, { useState } from 'react';
import './styles.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import loginIm from '../../images/login.png';
import api from '../../services/api';
// import history from '../../history';

export default function SingIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmitLogin() {
    const data = { email, password: senha };

    if (email !== '' && senha !== '') {
      const response = await api.post('/session', data);

      if (response.status !== 400) {
        // window.location.href = '/home';
        history.push('/home');
      } else {
        toast.error('Error ao fazer o login ');
      }
    } else {
      toast.error('Error preencha os campos !');
    }
  }

  const goTocadastro = () => {
    // window.location.href = '/cadastrar';
    history.push('/cadastrar');
  };
  return (
    <div id="section">
      <div id="tm-img">
        <img id="tm" src={loginIm} alt="" />
      </div>

      <div id="tel-login">
        <div id="tel-login-container">
          <h2>Login</h2>
          <span>Digite seus dados para entrar e acessar o conteúdo.</span>

          <input
            className="input"
            type="text"
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            name="senha"
            required
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button
            className="cadastrar btn"
            type="submit"
            onClick={handleSubmitLogin}
          >
            {handleSubmitLogin ? 'Entrar' : 'waiting'} {/* Entrar */}
          </button>
        </div>

        <button
          type="submit"
          className="cadastrar tbn"
          onClick={e => {
            goTocadastro(e);
          }}
        >
          Ainda não tem conta? Cadastre-se.
        </button>
      </div>
    </div>
  );
}
