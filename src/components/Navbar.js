/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Logo from '../assets/images/logo.png';
export const NavBar = () => {
 
  return (
    <nav>
       <div className="nav-logo">
          <img src={Logo} />
      </div>

      <ul className="nav-links">
        <li className="link"><a href="#">Inicio</a></li>
        <li id="link1" className="link"><a href="#about">Sobre mim</a></li>
        <li id="link1" className="link"><a href="#projects">Projetos</a></li>
  
      </ul>
      <a href="https://github.com/lluissf">
        <button className="btn">Github</button>
      </a>
    </nav>
  );
};
