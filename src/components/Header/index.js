import React, { useContext } from 'react';
import styles from './styles.module.css';
import { AuthContext } from '../../providers/auth';

import logo from '../../assets/images/logo/agencia-eplus-n-logo.png';
import search from '../../assets/svg/search.svg';
import person from '../../assets/svg/person.svg';
import shopping from '../../assets/svg/shopping.svg';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(AuthContext);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <img src={logo} alt="Agência e-Plus" />
      </div>
      <div className={styles.items}>
        <nav>
          <ul>
            <li>
              <a href="/">Lorem impsum</a>
            </li>
            <li>
              <a href="/">Lorem impsum</a>
            </li>
            <li>
              <a href="/">Lorem impsum</a>
            </li>
            <li>
              <a href="/">Lorem impsum</a>
            </li>
            <li>
              <a href="/">Lorem impsum</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.menu}>
        <button>
          <img className={styles.icon} src={search} alt="Buscar" />
        </button>
        <button>
          <img className={styles.icon} src={person} alt="Minha conta" />
        </button>
        <button onClick={handleClick}>
          <img className={styles.icon} src={shopping} alt="Carrinho" />
        </button>
      </div>
    </header>
  );
};

export default Header;
