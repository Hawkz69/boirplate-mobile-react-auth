import React, { Component } from 'react';
import './Panel.scss';
import logo from '../../../../assets/imgs/presential.png';

export const Panel = ({ children }) => (
	<div className="container-main">
		<div className="panel">
			<div className="line" />
			<div id="logo" className="div-logo-login">
				<img src={logo} width="100%"/>
			</div>
			<div>
				{ children }
			</div>
			<div className="terms">
				<p>Ao criar uma conta você aceita nossos <a href="#" className="link">Termos e Condições de Uso.</a></p>
			</div>
		</div>
	</div>
);

export default Panel;