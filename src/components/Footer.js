/* eslint-disable jsx-a11y/alt-text */
import Logo from "../assets/images/logo.png";
export const Footer = () => {
  return (
    <div>
      <footer className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
          <div className="logo">
            <img src={Logo} />
          </div>
          <p>Este é o meu portfólio pessoal. 😁</p>
          <div className="socials">
            <a href="https://www.youtube.com/@LuisFelipeBSI">
              <i className="ri-youtube-line"></i>
            </a>
            <a href="https://www.instagram.com/_.luissf/">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://twitter.com/llittle_louis">
              <i className="ri-twitter-line"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <h4>Contato</h4>
          <a href="https://discord.gg/bFvB2u8B6D">Discord</a>
          <a href="https://github.com/lluissf">Github</a>
        </div>
      </footer>

      <div className="copyright">
        © 2024 Luís Felipe. Todos os Direitos Rervados.
      </div>
    </div>
  );
};
