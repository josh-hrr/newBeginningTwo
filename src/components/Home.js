import '../styles/Home.css'; 
import pexelsFront from '../img/pexelsFront.jpeg';
import imageGrad from '../img/grad.png';
import trophy from '../img/trophy.png';
import goals from '../img/goals.png';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {  
    return (
        <div className="home"> 
            <section className="mb-40">   
                <div className="px-6 py-6 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                        <div>
                            <h1 className="mt-2 mb-2 text-4xl font-bold tracking-tight md:text-3xl xl:text-4xl">
                                Succeed in Pixels: 
                            </h1>
                            <h2 className="mb-3"><span className="text-primary">Your Digital Learning Companion</span> 
                            </h2>
                                <NavLink to="/get-started">
                                <button className="m-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                        Comenzar ahora
                                </button>
                                </NavLink>
                                
                                <button className="m-2 bg-colorOrange hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded">
                                        WhatsApp
                                </button>
                        </div>
                        </div>
                            <div className="md:mb-12 lg:mb-0">
                            <img src={imageGrad}
                                 alt="" />
                            </div>
                        </div>   
                    </div>

                </div> 

                <div className="bg-colorBlue w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                        <div>  
                            <div className="md:mb-12 lg:mb-0">
                            <img src={goals}
                                className="" alt="" />
                            </div>
                        </div>
                        </div>
                            <div>  
                                <h2 className="mb-3"><span className="text-colorOrange font-bold">
                                Cursos dinámicos, efectivos y divertidos.
                                </span> 
                                </h2> 

                                <p className="mb-3 text-white"><b>Aprende con profesores expertos en la materia, quienes guiarán tus cursos en vivo con pasión y conocimiento. Nuestra plataforma te ofrece la oportunidad de sumergirte en un aprendizaje interactivo, donde cada clase se convierte en una experiencia enriquecedora. </b></p>
                            </div>  
                        </div>  
                    </div>

                    

                    <div className="bg-white w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div className="grid items-center lg:grid-cols-2">
                        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0"> 
                        <div>  
                                <h2 className="mb-3"><span className="text-colorOrange font-bold">
                                         Diseñamos programas educativos que son estimulantes, eficaces y atractivos. 
                                </span> 
                                </h2>  
                                <p className="mb-3 text-colorBlue font-bold">Nuestra plataforma te brinda la posibilidad de sumergirte en un aprendizaje participativo, donde cada lección se transforma en una aventura educativa.</p>
                            </div>  
                        </div>  

                        <div>  
                            <div className="md:mb-12 lg:mb-0">
                            <img src={trophy}
                                className="" alt="" />
                            </div>
                        </div> 
                        </div> 
                     </div>


                     <div className="bg-colorBlue p-12 w-100 my-12 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                        <div className="grid items-center lg:grid-cols-1">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0"> 
                            <div> 
                                    <h1 className="font-bold mt-2 mb-2 text-4xl tracking-tight md:text-3xl xl:text-4xl text-white">
                                            Aprende a tu ritmo 
                                    </h1>  
                                    <button className="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                        Comenzar ahora
                                    </button>
                                    
                                    <button className="m-5 bg-colorOrange hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-blue-500 rounded">
                                            WhatsApp
                                    </button>
                                 </div>  
                            </div>   
                            </div> 
                        </div>

            </section> 


            <section className="mb-0">   
                <div className="px-6 py-6 text-center md:px-12 lg:text-left">
                    
                </div>   
            </section> 
              
        </div>
    );
}

export default Home;

/*


<h2>Welcome to Succeed in Pixels!</h2>
            <p>Our logo is a pixelated owl. The owl is a symbol of wisdom and knowledge. The pixels represent the digital world.</p>
            <p>Meet our mascot, a pixelated owl named <strong>Pixel</strong>.</p>
            <p>Our brand colors are <span className="color-blue">blue</span> and <span className="color-orange">orange</span>.</p>
            <h2>Our tagline is: “Succeed in Pixels!”</h2>
            <p>Visit us at: <a href="http://www.succeedinpixels.com" target="_blank" rel="noopener noreferrer">www.succeedinpixels.com</a></p>


function Home ()
{
    return (
        <div>
            <h1>Home</h1>
            <p>Succeed in Pixels: Your Digital Learning Companion!</p>
            <p>Our mission is to help you succeed in your digital learning journey.</p>

            <p>Our vision is to be the most trusted digital learning companion.</p>

            <p>Our values are:</p>

            <p>Integrity: We are honest, transparent, and accountable.</p>

            <p>Quality: We are committed to excellence.</p>

            <p>Respect: We treat others the way we want to be treated.</p>

            <p>Teamwork: We work together to achieve our goals.</p>

            <p>Our promise is to provide you with the best digital learning experience.</p>

            <p>Our motto is: “Succeed in Pixels!”</p>

            <p>Our slogan is: “Your Digital Learning Companion!”</p>

            <p>Our logo is a pixelated owl. The owl is a symbol of wisdom and knowledge. The pixels represent the digital world.</p>

            <p>Our mascot is a pixelated owl named Pixel.</p>

            <p>Our colors are blue and orange.</p>

            <p>Our tagline is: “Succeed in Pixels!”</p>

            <p>Our website is: www.succeedinpixels.com</p>
 

        </div>
    );
}

export default Home;

*/