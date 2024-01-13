import ButtonBlue from '../../../formElements/ButtonBlue';
import grad from '../../../../img/grad.png';
import plant from '../../../../img/plant.png';
import ButtonOrange from '../../../formElements/ButtonOrange';
import MyFooter from '../../../pages/footer/MyFooter';

function MyProfile () {
    return (
        <div class="p-4 sm:ml-64">
            <div class="p-4    rounded-lg dark:border-gray-700 "> 
                <div class=" flex items-center justify-center h-60 mb-4 rounded dark:bg-gray-800 text-center">
                    <img className='w-48 mr-8' src={grad}/>
                    <p class="text:colorBlue dark:text-gray-500">   
                        <p className="font-bold">Sumérgete en la Creación de Cursos</p>
                        <p>Desarrolla tu carrera y comparte tu conocimiento con estudiantes de todo el mundo. <br></br> ¡Crea tus propios cursos y haz crecer tu comunidad educativa!</p> 
                        <ButtonBlue text="Crear Curso" path="/test" /> 
                    </p>    
                </div>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    
                    <div class=" border-dashed border-2 flex items-center justify-center rounded bg-white h-80 dark:bg-gray-800">

                        <p class="text:colorBlue dark:text-gray-500">   
                        <p className="font-bold">¿Necesitas ayuda?</p>
                        <p>Contáctanos por WhatsApp</p>
                            <ButtonOrange text="WhatsApp" path="/test" />
                        </p>
                    </div> 
                    <div class="cursor-pointer bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded  flex items-center justify-center  h-80 dark:bg-gray-800 text-center">
                        <img className='w-48' src={plant}/>
                        <p class="text:colorBlue dark:text-gray-500"> 
                                <p className="font-bold">Impulsa a tu Comunidad Educativa</p>
                                <p className="m-0">Impulsa la participación de tus estudiantes ofreciendo descuentos o paquetes especiales en tus cursos</p>
                        
                        </p>
                    </div>
                </div>
                <div class="border-dashed border-2 flex items-center justify-center h-96 mb-4 rounded bg-white dark:bg-gray-800">
                            <p class="text:colorBlue dark:text-gray-500 flex justify-center"> 
                                <img className="w-50" src='https://img.icons8.com/?size=256&id=63671&format=png'/>
                            </p>  
                </div>  
                <div class=" my-4  flex items-center justify-center h-80 mb-4 rounded bg-white dark:bg-gray-800">
                        <MyFooter/> 
                </div>    
            </div>
        </div> 
    )
}

export default MyProfile;