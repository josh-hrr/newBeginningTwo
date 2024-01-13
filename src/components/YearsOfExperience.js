import MyRadioWithImg from './formElements/MyRadioWithImg'; 


function YearsOfExperience() {
    const topics = [
        { name: 'Principiante', logo: null },
        { name: 'Intermedio', logo: null },
        { name: 'Avanzado', logo: null }  
      ]; 
    const title = "¿Cuánta experiencia tienes?"
    return (
        <div> 
            <MyRadioWithImg title={title} newTopics={topics} />
        </div>

)}

export default YearsOfExperience;