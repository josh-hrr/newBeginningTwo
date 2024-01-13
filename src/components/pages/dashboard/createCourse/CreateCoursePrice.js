import RadioButtonWithImg from '../../../../components/formElements/MyRadioWithImg';

function CreateCoursePrice () {

    let pageTitle = "Precio del curso";
    let pageDescription = "¿Cuánto debería costar tu curso?";
    let myPlaceholder = "Ejemplo: 19.99";

    let newTopics =  [
        { name: '$100', logo: null  },
        { name: '$200', logo: null  },
        { name: '$300', logo: null }, 
      ];

    return (
        <div>  
            <RadioButtonWithImg title={pageTitle} newTopics={newTopics} subTitle={pageDescription}  />
        </div>
)}

export default CreateCoursePrice;