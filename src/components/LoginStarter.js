import MyRadioWithImg from "./formElements/MyRadioWithImg"; 
import facebookLogo from '../img/facebookLogo.png';
import googleLogo from '../img/googleLogo.png';

function LoginStarter() {
    const topics = [
        { name: 'Continuar con Facebook', logo: facebookLogo },
        { name: 'Continuar con Google', logo: googleLogo }
      ];
    const title = "¡Guarda tu progreso!";  
    const subTitle = "Inicia sesión con tu red social favorita";
    return (
        <div> 
            <MyRadioWithImg title={title} newTopics={topics} subTitle={subTitle} />
        </div> 
)}

export default LoginStarter;