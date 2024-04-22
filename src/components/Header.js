/* eslint-disable jsx-a11y/alt-text */
import HeaderIMG from "../assets/images/header.png"
export const Header = () => {
 
    return (
    <header className="content">
        <div className="content">
          <span className="blur"></span>
          <span className="blur"></span>
          <h1>Olá, eu sou o <span>Luís Felipe</span>, Desenvolvedor web</h1>
          <p>
            Este é o meu portfólio pessoal, onde você pode encontrar informações sobre mim e meus projetos.
          </p>
          <a href="#about">
          <button className="btn">Ver mais..</button>
          </a>
        </div>
        <div className="image">
          <img src={HeaderIMG} />
        </div>
      </header>
    );
  };
  