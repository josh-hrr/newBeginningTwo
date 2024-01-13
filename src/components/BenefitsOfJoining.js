import MyListWithImg from "./formElements/MyListWithImg";

function BenefitsOfJoining() {

    const topics = [
        { name: 'Clases en vivo', logo: null, description: 'Acceso a contenido y recursos exclusivos' },
        { name: 'Networking', logo: null, description: 'Conecta y establece contactos con profesionales de la industria' },
        { name: 'Comunidad', logo: null, description: 'Mantente actualizado con las últimas noticias y tendencias' },
        { name: 'Recomendaciones', logo: null, description: 'Recibe recomendaciones e información personalizada' },
      ];  
    const title = "¡Te ayudamos a conseguir tu objetivo!";
    
    return (
        <div >  
            <MyListWithImg title={title} newTopics={topics}/> 
        </div>
    )
} 

export default BenefitsOfJoining;