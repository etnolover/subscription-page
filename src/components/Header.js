import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className="Header">
      <span className="Header-decoration-text">Домашний<br/>Магазин</span>
      <hr className="Header-hr"/>
      <h1 className="Header-h1">Оформление подписки</h1>
      <p className="Header-thanks">Спасибо, что решили стать участником клуба</p>
    </div>
  );
}

export default Header;