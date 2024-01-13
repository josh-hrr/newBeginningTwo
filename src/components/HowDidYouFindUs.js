import facebookLogo from '../img/facebookLogo.png';  
import instagramLogo from '../img/instagramLogo.png';
import linkedinLogo from '../img/linkedInLogo.png';
import googleLogo from '../img/googleLogo.png'; 
import MyRadioWithImg from './formElements/MyRadioWithImg';

function HowDidYouFindUs() { 
    const topics = [
        { name: 'Facebook', logo: facebookLogo},
        { name: 'Instagram', logo: instagramLogo},
        { name: 'LinkedIn', logo: linkedinLogo },
        { name: 'Busqueda de Google', logo: googleLogo },
        { name: 'Un amigo'},
        { name: 'En otro medio' }
      ]; 

    const tilte = "¿Cómo nos encontraste?";

  return (
    <div>
       <MyRadioWithImg title={tilte} newTopics={topics}   />
    </div>
  );
}

export default HowDidYouFindUs;