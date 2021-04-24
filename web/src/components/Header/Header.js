import React from 'react';
import { MdBusiness } from 'react-icons/md';
import './Header.css';

export default function Header() {
  return (
    <header id="header-home-page">
      <div>
        <span id="das-home-page">Dasboard-hostel 2</span>
      </div>
      <div />

      <div id="avatar-home-page">
        <div id="icon-univer-page">
          <MdBusiness size={20} />
          <span className="avatar-name-univer">VSUET</span>
        </div>
        <span id="user-page">Luis Água Rosada</span>
      </div>
    </header>
  );
}
