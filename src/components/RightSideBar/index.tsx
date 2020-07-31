import React, { useState } from 'react';
import { FiMenu, FiHome, FiActivity, FiGrid } from 'react-icons/fi';
import './styles.scss';

const RightSideBar = () => {
	
	const [ openSidebar, setOpenSideBar ] = useState<boolean>(false);


	function handleButtonMenu() {
		setOpenSideBar(!openSidebar);
	}

	function handleMaskMenu() {
		setOpenSideBar(false);
	}

  return (
		<nav id="right-sidebar" className={openSidebar ? 'opened' : 'closed'}>
			<header>
				<button className="btn btn-primary" onClick={ handleButtonMenu }>
						<FiGrid />
						<span>Flávio Medeiros</span>
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

export default RightSideBar;