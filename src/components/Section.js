import Projeto1 from '../assets/images/Projeto1.png'
export const Section = () => {
  return (
    <div>
      <section className="container" id="about">
        <h2 className="header">SOBRE MIM</h2>
        <div className="features">
          <div className="card">
            <span>
              <i className="ri-book-line"></i>
            </span>
            <h4>Acadêmico.</h4>
            <p>
              Cursando Bacharelado em Sistemas de Informação no Insituto Federal Catarinense.
            </p>
          </div>
         
          <div className="card">
            <span>
              <i className="ri-meta-line"></i>
            </span>
            <h4>Objetivo.</h4>
            <p>
              Gostaria de me tornar um desenvolvedor full-stack.
            </p>
          </div>
        </div>
      </section>

      <section className="container" id="projects">
        <h2 className="header">MEUS PROJETOS</h2>
        <p className="sub-header">
          Todos os meus projetos estão abaixo! Fique a vontade para explorar.
        </p>
        <div className="pricing">
          <div className="card">
            <div className="content text-center">
              <h4>Buscador de CEP</h4>
              <img src={Projeto1} alt="" />
              
            </div>
             <button className="btn">
              <a href="https://github.com/lluissf/buscador-cep">
           Acessar
           </a>
           </button>
            
          </div>
       
        </div>
      </section>
    </div>
  );
};
