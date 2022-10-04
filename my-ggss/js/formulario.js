//Variables Formularios Input Varios
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//variables Formulario Imagen
const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
let files;

button.addEventListener("click", (e) => {
	input.click();
});

input.addEventListener("change", (e) => {
	files = this.files;
	dropArea.classList.add("active");
	showFiles(files);
	dropArea.classList.remove("active");
});

//mientras arrastramos elementos se activa este
dropArea.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropArea.classList.add("active");
	dragText.textContent = "Suelta para subir tu imagen"
});

//mientras estamos arrastrando el elemento pero no estamos dentro de la DropArea 
dropArea.addEventListener("dragleave", (e) => {
	e.preventDefault();
	dropArea.classList.remove("active");
	dragText.textContent = "Arrastra y suelta imágenes"
});

//cuando soltamos los elementos en la DropArea 
dropArea.addEventListener("drop", (e) => {
	e.preventDefault();
	files = e.dataTransfer.files;
	showFiles(files);
	dropArea.classList.remove("active");
	dragText.textContent = "Arrastra y suelta imágenes"
});


	 
function showFiles(files) {
	if (files.length === undefined) {
		processFile(files);
	}else{
		for (const file of files) {
			processFile(file);
		}
	}
}

function processFile(file){
	const docType = file.type;
	const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

	if(validExtensions.includes(docType)) {
		//archivo válido
		const fileReader = new FileReader();
		const id = 'file-${Math.random().toString(16).substring(7)}';

		fileReader.addEventListener(
			'load', e => {
				const fileUrl = fileReader.result;
				const image = 
				<div>
				 {/* id='${id}' class="file-conteiner"> */}
				<img src="${fileUrl}" alt="${file.name}" width={50}/>
				<div class="status">
					<span>${file.name}</span>
					<span class="status-text">
						Loading...
					</span>
				</div>;
			 </div>;
			
			
			const html = document.querySelector("#preview").innerHTML;
			document.querySelector("#preview").innerHTML = image + html;
		});

	fileReader.readAsDataURL(file);
	uploadFile(file, id);

	}else{
		//no es un archivo válido
		alert("No es un archivo válido");
	}
}

function uploadFile(file, id) {
 //SEGUIR ACAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!
}




const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	// nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// nombre: /^[a-zA-ZÀ-ÿ\s]$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[A-Za-z]+$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});