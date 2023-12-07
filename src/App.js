import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Form, Badge, Button} from 'react-bootstrap';
import axios from 'axios';

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
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;
  const data = { name, email, message };
  const response = await postData('https://fm56pa3fp6.execute-api.us-east-1.amazonaws.com/add-contact', data);
  console.log(response);
};


function App() {
  return (
    <div className="App"> 
      <h1>
        Contact Form
      </h1>
      <br>
      </br>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" type="message" as="textarea" rows={3} placeholder="Your message"/>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
