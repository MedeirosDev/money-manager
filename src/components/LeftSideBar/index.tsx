import React, { useState } from 'react';
import { FiMenu, FiHome, FiActivity } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const LeftSideBar = () => {
	
	const history = useHistory();

	const isDevicePC = window.innerWidth > 1200;

	const [ openSidebar, setOpenSideBar ] = useState<boolean>(isDevicePC);


	function handleButtonMenu() {
		setOpenSideBar(!openSidebar);
	}

	function handleMaskMenu() {
		setOpenSideBar(false);
	}

	function handleLogoClick() {
		history.push('/');
	}

  return (
		<nav id="left-sidebar" className={openSidebar ? 'opened' : 'closed'}>
			<header>
				<div className="logo" onClick={ handleLogoClick }>
					<img src={ logo } alt="Money Manager logo"/>
					<span className="secondary-color">Money Manager</span>
				</div>
				<button className="btn btn-primary" onClick={ handleButtonMenu }>
					<FiMenu />
				</button>
			</header>
			<ul>
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
			<div className="mask" onClick={ handleMaskMenu }>&nbsp;</div>
		</nav>
  );
}

export default LeftSideBar;