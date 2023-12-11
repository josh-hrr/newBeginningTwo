import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataPage from './components/DataPage';
import ContactForm from './components/ContactForm';
import './App.css';  

function App() {
  return ( 
    <div className="App"> 
      <Router>
        <Routes>  
          <Route path="/contactForm" element={<ContactForm />}>  
          </Route>
          <Route path="/contactFormData" element={<DataPage />}>
          </Route> 
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
