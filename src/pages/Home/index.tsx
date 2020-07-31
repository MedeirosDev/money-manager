import React from 'react';
import './styles.scss';
import NavBar from '../../components/NavBar';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
const Home = () => {

  return (
    <div id="page-home">
      <LeftSideBar />
      <div className="column">
        <NavBar />
        <div className="content">
          <span>Meu conteudo</span><br />
          <span>Meu conteudo</span>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default Home;