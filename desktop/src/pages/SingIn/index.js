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
        toast.error('Ошибка при входе в систему');
      }
    } else {
      toast.error('Ошибка заполнения полей !');
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
          <h2>Входить</h2>
          <span>
            Введите свои данные для входа в систему и доступа к системе
          </span>

          <input
            className="input"
            type="text"
            placeholder="Электронная почта"
            name="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Пароль"
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
            {handleSubmitLogin ? 'Входить' : 'ожидающий'} {/* Entrar */}
          </button>
        </div>

        <button
          type="submit"
          className="cadastrar tbn"
          onClick={e => {
            goTocadastro(e);
          }}
        >
          Еще нет учетной записи? Регистр
        </button>
      </div>
    </div>
  );
}
