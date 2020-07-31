import React from 'react';
import './styles.scss';
import { FiGrid, FiGlobe } from 'react-icons/fi';


const NavBar = () => {


  return (
		<nav id="navbar">
			<ul>
				<li>&nbsp;</li>
			</ul>
			<ul>
				{/* <li>
					<button className="btn btn-primary">
						PT-BR
						<FiGlobe />
					</button>
					<ul>
						<li>
							<button className="btn btn-primary">
								EN
							</button>
						</li>
						<li>
							<button className="btn btn-primary">
								RU
							</button>
						</li>
					</ul>
				</li> */}
				<li>
					&nbsp;
				</li>
			</ul>
		</nav>
  );
}

export default NavBar;