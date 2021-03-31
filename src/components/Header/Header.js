import React from 'react';
import './Header.css';
import gallo from '../../images/logo_gallo.svg';
import pult from '../../images/logo_pult.svg';

function Header() {
	return (
		<header className="header">
			<a href="https://www.pult.ru/" class="header__link" target="blank">
				<img className="header__gallo-icon" src={gallo} alt="GALLO" />
			</a>
			<a href="https://www.pult.ru/" class="header__link" target="blank">
				<img className="header__pult-icon" src={pult} alt="pult" />
			</a>
		</header>
	);
}

export default Header;
