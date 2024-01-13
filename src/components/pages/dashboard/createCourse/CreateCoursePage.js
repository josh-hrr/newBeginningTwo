import ButtonBlue from "../../../formElements/ButtonBlue";

function CreateCoursePage () {
    
    return (
        <div class="p-4 sm:ml-64">
            <div class="p-4    rounded-lg dark:border-gray-700 "> 
                <div class="border-2 border-dashed flex items-center justify-center h-96 mb-4 rounded dark:bg-gray-800 text-center">
                     <p class=" text:colorBlue dark:text-gray-500">   
                        <p className="font-bold">Sumérgete en la Creación de Cursos</p>
                        <p>Desarrolla tu carrera y comparte tu conocimiento con estudiantes de todo el mundo.</p> 
                        <ButtonBlue text="Crear Curso" path="/creacion-de-curso" />
                     </p>    
                </div> 
                 
                <div class=" my-4  flex items-center justify-center h-80 mb-4 rounded bg-white dark:bg-gray-800">
                 </div>    
            </div> 
        </div> 
    )
}


export default CreateCoursePage;