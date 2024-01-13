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