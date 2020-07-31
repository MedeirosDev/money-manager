import React, { useState } from 'react';
import { FiMenu, FiHome, FiActivity } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.scss';

const LeftSideBar = () => {

	const [ openMenu, setOpenMenu ] = useState<boolean>(true);

	function handleButtonMenu() {
		setOpenMenu(!openMenu);
	}

  return (
		<nav id="left-sidebar" className={openMenu ? 'opened' : 'closed'}>
			<header>
				<div className="logo">
					<img src={ logo } alt="Money Manager logo"/>
					<span className="secondary-color">Money Manager</span>
				</div>
				<button className="btn btn-primary" onClick={handleButtonMenu}>
					<FiMenu />
				</button>
			</header>
			<ul >
				<li className="active">
					<a href="#">
						<FiHome />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="#">
						<FiActivity />
						<span>Relatórios</span>
					</a>
				</li>
			</ul>
		</nav>
  );
}

export default LeftSideBar;