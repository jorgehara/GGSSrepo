import { usePoppusOk } from '../hooks/usePoppusOk'
import Loader from './Loader'
import Message from "./Message";

const initialForm = {
  name: " "
//   email: "",
//   subject: "",
//   comments: "",
};

const validationsForm = (form) => {
  let errors = {}; //por cada error que obtenemos, se va a llenar el object 
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
//   let regexComments = /^.{1,255}$/; //contar los caracteres de comments hastas 255 caracteres


//sino tiene nombre escrito, es decir esta vacío, se ACTIVA el Error
if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

//   if (!form.email.trim()) {
//     errors.email = "El campo 'Email' es requerido";
//   } else if (!regexEmail.test(form.email.trim())) {
//     errors.email = "El campo 'Email' es incorrecto";
//   }

//   if (!form.subject.trim()) {
//     errors.subject = "El campo 'Asunto a tratar' es requerido";
//   }

//   if (!form.comments.trim()) {
//     errors.comments = "El campo 'Comentarios' es requerido";
//   } else if (!regexComments.test(form.comments.trim())) {
//     errors.comments =
//       "El campo 'Comentarios' no debe exceder los 255 caracteres";
//   }

  return errors;
};


//Estilos del error
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const PoppusOk = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = usePoppusOk(initialForm, validationsForm);

  return (
    <div>
      <h2>País de Origen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="País de Origen"
          placeholder="Escribe su País de Origen"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />

        {/* //ES un CONDICIONAL para que se MUESTRE EL ERROR debajo del formulario */}

    {errors.name && <p style={styles}>{errors.name}</p>} 
        
        
        
        {/* <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        /> */}

{/* //ES un CONDICIONAL para que se MUESTRE EL ERROR debajo del formulario */}
{/* 
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        /> */}

{/* //ES un CONDICIONAL para que se MUESTRE EL ERROR debajo del formulario */}

        {/* {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        >
        </textarea> */}

{/* //ES un CONDICIONAL para que se MUESTRE EL ERROR debajo del formulario */}

        {/* {errors.comments && <p style={styles}>{errors.comments}</p>} */}
        <input type="submit" value="Enviar" />
      </form>


      {/* Cuando la variable Loading este en TRUE MUESTRA CONDITIONAL RENDER "LOADER" */}
      
      {loading && <Loader />}
     
      {/* Cuando la variable Response este en TRUE MUESTRA CONDITIONAL RENDER "MESSAGE" */}
      
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
};

export default PoppusOk;
