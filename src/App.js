import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataPage from './components/ReservasData';
import ContactForm from './components/ReservasForm';
import Home from './components/Home';
import Header from './components/Header';
import IndividualForm from './components/IndividualForm';
import IndividualPage from "./components/IndividualPage";
import StudentPage from './components/StudentPage';
import './App.css';   
import { useLocation } from 'react-router-dom';
import GetStartedPage from './components/GetStartedPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DashboardPage from './components/pages/dashboard/DashboardPage';
import CreateCoursePage from './components/pages/dashboard/createCourse/CreateCoursePage';
import CreateCourseTitle from './components/pages/dashboard/createCourse/CreateCourseTitle';


function App() {

  const location = useLocation();

  return (
    <div className="App px-6 py-12 text-center md:px-12 lg:text-left">    
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
     
         <div>
          {
          location.pathname === "/" || 
          location.pathname === "/estudiante" ||
          location.pathname === "/individual" ? <Header /> : null
          }
         </div> 
      </div>    

      <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={500}
      >
        
        <Routes>  
          <Route path="/" element={<Home />}>
          </Route> 
          <Route path="/dashboard" element={<DashboardPage />}> 
          </Route>
          <Route path="/creacion-de-curso" element={<CreateCourseTitle />}> 
          </Route>
          <Route path="/get-started" element={<GetStartedPage />}> 
          </Route>
          <Route path="/estudiante" element={<StudentPage />}> 
          </Route>
          <Route path="/individual" element={<IndividualPage />}> 
          </Route>
          <Route path="/individualFormulario" element={<IndividualForm />}> 
          </Route>
          <Route path="/reservasFormulario" element={<ContactForm />}>  
          </Route>
          <Route path="/reservasData" element={<DataPage />}>
          </Route> 
        </Routes>  
        </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

/*
function TailwindCSSButton(props) {
  return (
    <a href={props.href} target={props.target} className="bg-blue-500 text-white font-medium px-4 py-4 rounded hover:bg-blue-600">
      {props.children}
    </a>
  )
}
*/

export default App;
