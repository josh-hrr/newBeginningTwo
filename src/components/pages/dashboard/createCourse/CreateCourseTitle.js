import MyInputField from "../../../formElements/MyInputField";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyCheckboxNoImg from "../../../formElements/MyCheckboxNoImg";
import MyRadioWithImg from "../../../formElements/MyRadioWithImg";
import CreateCourseObjectives from "./CreateCourseObjectives";
import CreateCourseUpload from "./CreateCourseUpload";
import CreateCourseHomeData from "./CreateCourseHomeData";
import CreateCoursePrice from "./CreateCoursePrice";


function CreateCourseTitle() {  
  
  let myInputTitle = "Empecemos colocando un título a tu curso";
  let myInputDescription = "Puedes modificar el título más adelante si así lo prefieres";
  let myInputPlaceholder = "Ejemplo: Introducción a la programación";

  let myCategoryTitle = "Elige una categoría para tu curso";
  let myCategoriesSubTitle = "Elige la categoría que mejor se adapte a tu curso";
  
  let myCategoryTitleLevel = "Elige el nivel de tu curso";
  let myCategoriesSubTitleLevel = "Este nivel se mostrará en la página de inicio de tu curso"; 

  const myCategoriesLevel = [
    { name: 'Principiante', logo: null  },
    { name: 'Intermedio', logo: null  },
    { name: 'Avanzado', logo: null }, 
  ];  

  const myCategories = [
    { name: 'Tecnología', logo: null  },
    { name: 'Matemáticas', logo: null  },
    { name: 'Salud y bienestar', logo: null },
    { name: 'Idiomas', logo: null  },
  ];  
  
  let buttonNext = "Siguiente"; 
  const [progress, setProgress] = useState(0); 
  const navigate = useNavigate();

  const handleNext = () => { 
    setProgress((increase) => {

      if(increase === 100) {
        navigate('/dashboard');
      } else {
        let myProgress; 
        myProgress = Math.min(increase + 12.5, 100);  
        return myProgress 
      }  
    });   
};
  return (
    <div className="h-50">
        <div className="mb-5 h-6 bg-colorSaltBox mx-5 rounded-full"> 
            <div className="h-6 bg-orange rounded-full" 
                style= {
                        {    
                            backgroundColor: '#FFA500',
                            width: `${progress}%`, 
                        }
                    } 
            > 
                <p className="font-sans mx-2"><i>{`${progress}%`}</i></p> 
            </div>
            
        </div>   

        { 
            progress === 0 ? <MyInputField myTitle={myInputTitle} myDescription={myInputDescription} myPlaceholder={myInputPlaceholder} /> : null 
        } 

        {
            progress === 12.5 ? <MyRadioWithImg title={myCategoryTitle} newTopics={myCategories} subTitle={myCategoriesSubTitle} /> : null 
        }

{
            progress === 25 ? <MyRadioWithImg title={myCategoryTitleLevel} newTopics={myCategoriesLevel} subTitle={myCategoriesSubTitleLevel} /> : null 
        }

        {
            progress === 37.5 ? <CreateCourseObjectives /> : null
        }

        {
            progress === 50 ? <CreateCourseUpload /> : null
        } 

        {
            progress === 62.5 ? <CreateCourseHomeData /> : null
        } 

        {
            progress === 75 ? <CreateCoursePrice /> : null
        }

        {
            progress === 87.5 ? <CreateCoursePrice /> : null
        }

        {
            progress === 100 ? <CreateCoursePrice /> : null
        }
 


        <button onClick={handleNext} className="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {
                progress === 100 ? buttonNext = "Finalizar" : buttonNext
            } 
        </button>   
    </div>
  );
}


export default CreateCourseTitle;


/*
import MyCheckboxNoImg from '../components/formElements/MyCheckboxNoImg';

function Topic() {
  const componentTopics = ['Tecnología', 'Matemáticas', 'Salud y bienestar', 'Idiomas']; 
  const title = "¿Qué temas te interesan?";
  return (
    <div> 
        <MyCheckboxNoImg title={title} newTopics={componentTopics} /> 
    </div>
  );
}

export default Topic;


*/



// this is a changed made from another local repository