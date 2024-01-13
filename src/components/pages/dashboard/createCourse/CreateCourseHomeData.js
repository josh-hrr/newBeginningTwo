import MyInputField from "../../../formElements/MyInputField";

function CreateCourseHomeData () { 
    let myTitle = "Página de inicio del curso";    
    let pageDescription = "Agrega un título, una descripción y una imagen de portada para tu curso."
    let myPlaceholder = "Titulo del curso";
    let myPlaceholderExampleTwo = "Descripcion del curso"; 

    let myDescriptionTwo = "¿Existen requisitos previos para inscribirse en el curso?";
    let myPlaceholderTwo = "No se necesitan conocimientos previos...";
    
    let DescriptionThree = "¿Cuál es el público objetivo del curso?";
    let myPlaceholderThree = "Estudiantes principiantes o avanzados...";

    let myInputField = {
        type: "text",
        placeholder: "Ejemplo: Al finalizar este curso, los estudiantes serán capaces de...",
        className: "shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    }
    
    return (
        <div className=""> 

            
                <h1 className='p-4 m-0'>{myTitle}</h1>   
                <p>{pageDescription}</p>
                    <div className="mt-4"> 
                        <div className="flex justify-center text-left m-3">   
                            
                            
                        </div>  

                        <div className="flex justify-center text-left m-3">   
                            
                        </div>  

                        <div className="flex justify-center text-left m-3">
                            
                            <div className="flex justify-center items-center gap-4">
                                
                                <img className="w-80 border-4 rounded shadow" src='https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Course" />
                                
                                <div className="grid gap-3"> 
                                <input
                                type="text"
                                placeholder={myPlaceholder}
                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />

                                <input
                                type="text"
                                placeholder={myPlaceholderExampleTwo}
                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /> 

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange=''
                                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                </div>
                                
                            </div> 
                        </div> 
            </div>
        </div>
    )
}

export default CreateCourseHomeData;