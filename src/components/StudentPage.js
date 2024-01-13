import estudiante_class from '../img/estudiante_class.jpg';
import '../styles/Home.css'; 

function StudentPage () {
    return (
        <div className="home">
            <section className="mb-40">   
                    <div className="px-6 py-6 text-center md:px-12 lg:text-left">
                        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                            <div> 
                                <h1 className="mt-2 mb-3 text-4xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                                ¿Eres estudiante?
                                </h1> 
                                <h2>
                                ¡Encuentra una forma divertida de aprender, clases en linea y en vivo!
                                </h2> 
                                    <button className="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                        Comenzar ahora
                                    </button> 
                            </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                            <img src={estudiante_class}
                                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>
                        </div>
                        </div>
                    </div> 
            </section>  
        </div>
    )
}

export default StudentPage;