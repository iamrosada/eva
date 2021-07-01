import React from 'react';

import { MdBusiness } from 'react-icons/md';
import './Header.css';
import { useHistory } from 'react-router-dom';
import logout from '../../images/logout.svg';

export default function Header() {
  const history = useHistory();
  const goTocadastro = () => {
    // window.location.href = '/cadastrar';
    history.push('/');
  };
  return (
    <header id="header-home-page">
      <div>
        <span id="das-home-page">Eva in CEAV</span>
      </div>
      <div>
        <h2 id="vsuet-name">COMUNIDADE DOS ESTUDANTES ANGOLANOS EM VORONEZH</h2>
      </div>

      <div id="avatar-home-page">
        <div id="icon-univer-page">
          <MdBusiness size={20} />
          <span className="avatar-name-univer">CEAV</span>

          <button
            type="submit"
            className="tbnn"
            onClick={e => {
              goTocadastro(e);
            }}
          >
            <img src={logout} alt="" />
          </button>
        </div>


      </div>
    </header>
  );
}
