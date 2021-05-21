import React from 'react';
import { MdBusiness } from 'react-icons/md';
import './Header.css';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const goTocadastro = () => {
    // window.location.href = '/cadastrar';
    history.push('/');
  };
  return (
    <header id="header-home-page">
      <div>
        <span id="das-home-page">evaBoard</span>
      </div>
      <div>
        <h2 id="vsuet-name">
          Воронежский государственный университет инженерных технологий
        </h2>
      </div>

      <div id="avatar-home-page">
        <div id="icon-univer-page">
          <MdBusiness size={20} />
          <span className="avatar-name-univer">ВГУИТ</span>

          <button
            type="submit"
            className="tbnn"
            onClick={e => {
              goTocadastro(e);
            }}
          >
            выйти
          </button>
        </div>

        {/*  <span id="user-page">Luis Água Rosada</span> */}
      </div>
    </header>
  );
}
