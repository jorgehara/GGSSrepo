import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client'; para versions of React after 18
import './index.css';
import Formulario from './Formulario';
import DragArea from './DragDrop';

ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<Formulario />
			<DragArea/>
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);