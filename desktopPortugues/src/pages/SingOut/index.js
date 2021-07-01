import React, { useState } from 'react';
import './styles.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import out from '../../images/out.png';
import api from '../../services/api';


export default function SingOut() {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit() {
    const data = { name: nome, email, password: senha };

    if (nome !== '' && email !== '' && senha !== '') {
      const response = await api.post('/manager', data);

      if (response.status !== 400) {
        // window.location.href = '/home';
        history.push('/home');
      } else {
        toast.error('Error ao cadastar o usuario!');
      }
    } else {
      toast.error('Error preencha os campos !');
    }
  }

  function goTologin() {
    // window.location.href = '/';
    history.push('/');
  }
  return (
    <div id="section">
      <div id="tel-sing">
        <div id="tel-sing-container">
          <h2>Registrar</h2>
          <span>
            Fazes Parte da Administração da comunidade ?, insira os seus dados
            para poder ter acesso as informações dos Estudantes da CEAV.
          </span>

          <input
            name="nome"
            className="input"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            name="email"
            className="input"
            autoComplete="email"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="senha"
            className="input"
            type="password"
            required
            autoComplete="senha"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <button
            className="cadastrar btn"
            type="submit"
            onClick={handleSubmit}
          >
            Registrar agora
          </button>
        </div>

        <button type="submit" className="cadastrar tbn" onClick={goTologin}>
          já tem uma conta? Entrar
        </button>
      </div>

      <div id="tm-img-sing">
        <img id="tm-sing" src={out} alt="" />
      </div>
    </div>
  );
}
