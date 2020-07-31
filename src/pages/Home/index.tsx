import React from 'react';
import './styles.scss';
import NavBar from '../../components/NavBar';
import LeftSideBar from '../../components/LeftSideBar';
const Home = () => {

  return (
    <div id="page-home">
      <LeftSideBar />
      <div className="rigth">
        <NavBar />
        <div className="content">
          <span>Meu conteudo</span><br />
          <span>Meu conteudo</span>
        </div>
      </div>
    </div>
  );
}

export default Home;