import MyInputField from "../../../formElements/MyInputField";

function CreateCourseObjectives () { 
    let myTitle = "Metas educativas del programa";   
    let myDescription = "¿Cuáles son los conocimientos que adquirirán tus alumnos con este curso?";
    let myPlaceholder = "El estudiante será capaz de...";
    let myPlaceholderExampleTwo = "Adquirir destrezas para innovar en...";
    let myPlaceholderExampleThree = "Comprender y explicar conceptos sobre...";

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
                    <div className="mt-4">
                        <p className='p-4 m-0'>{myDescription}</p>
                        <div className="flex justify-center text-left m-3">   
                            <input
                                type="text"
                                placeholder={myPlaceholder}
                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            
                        </div>  

                        <div className="flex justify-center text-left m-3">   
                            <input
                                type="text"
                                placeholder={myPlaceholderExampleTwo}
                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            
                        </div>
                        
                        <div className="flex justify-center text-left m-3">   
                            <input
                                type="text"
                                placeholder={myPlaceholderExampleThree}
                                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            
                        </div>
                        


                    </div>
                    <div className="mt-4">
                        <p className='p-4 m-0'>{myDescriptionTwo}</p>
                            <div className="flex justify-center text-left">  
                                <input
                                    type="text"
                                    placeholder={myPlaceholderTwo}
                                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /> 
                            </div>  
                    </div>

                    <div className="mt-4">
                        <p className='p-4 m-0'>{DescriptionThree}</p>
                            <div className="flex justify-center text-left">  
                                <input
                                    type="text"
                                    placeholder={myPlaceholderThree}
                                    className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                /> 
                    </div>      
            </div>
        </div>
    )
}

export default CreateCourseObjectives;