import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL; 
const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data); 
    return response.data;
  } catch (error) {
    console.error(`Error in postData: ${error}`);
  }
}; 

const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const phone = event.target.elements.phone.value;
  const paisSelect = event.target.elements.paisSelect.value;
  const ciudad = event.target.elements.ciudad.value;
  const idiomaSelect = event.target.elements.idiomaSelect.value;
  const modalidadSelect = event.target.elements.modalidadSelect.value;
  const nivelSelect = event.target.elements.nivelSelect.value;
  const horarioSelect = event.target.elements.horarioSelect.value;
  const comentario = event.target.elements.comentario.value;
  const data = { name, email, phone, paisSelect, ciudad, idiomaSelect, modalidadSelect, nivelSelect, horarioSelect, comentario};
  const response = await postData(`${apiUrl}/add-contact`, data);
  
  if (response) {
    window.alert("Reserva enviada exitosamente");
    form.reset();
  } else {
    window.alert("Error en el envio de la reserva, comprueba que los datos sean correctos e intenta nuevamente");
  }
};


function ContactForm() {
  return ( 
    <div className="ContactForm">  
      <h1>
        Reservas LYT languages
      </h1>
      <br>
      </br>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="name" type="text" placeholder="Ingresa tu nombre" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control name="email" type="email" placeholder="correo@ejemplo.com" required/>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Numero de teléfono</Form.Label>
          <Form.Control name="phone" type="number" placeholder="Ingresa tu número teléfono" pattern="[0-9]*" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Pais</Form.Label>
          <Form.Select name="paisSelect">
            <option>Brasil</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Costa Rica</option>
            <option>Ecuador</option>
            <option>Guatemala</option>
            <option>Honduras</option>
            <option>Mexico</option>
            <option>Panama</option>
            <option>Peru</option>
            <option>Republica Dominicana</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control name="ciudad" type="text" placeholder="Ingresa tu ciudad" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Idioma</Form.Label>
          <Form.Select name="idiomaSelect">
            <option>Ingles</option>
            <option>Frances</option>
            <option>Portugues</option>
            <option>Aleman</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Modalidad</Form.Label>
          <Form.Select name="modalidadSelect">
            <option>Intensivo</option>
            <option>Semi Intensivo</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Nivel</Form.Label>
          <Form.Select name="nivelSelect">
            <option>Inicial</option>
            <option>Medio</option>
            <option>Medio 2</option>
            <option>Avanzado</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Label>Horario</Form.Label>
          <Form.Select name="horarioSelect">
            <option>6 a.m. a 8 a.m.</option>
            <option>7 a.m a 9 a.m.</option>
            <option>9 a.m. a 11 a.m.</option>
            <option>4 p.m. a 6 p.m.</option> 
            <option>5 p.m. a 7 p.m.</option> 
            <option>6 p.m. a 8 p.m.</option> 
            <option>7 p.m. a 9 p.m.</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Comentario</Form.Label>
          <Form.Control name="comentario" type="text" placeholder="Ingresa un comentario" />
        </Form.Group>
        <Button type="submit" variant="primary">Enviar</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
