function Welcome () {
    const title = "¡Bienvenido a bordo!";
    return (
        <div>
            <h1>{title}</h1>
            <br />
            
            <div className=" text-left flex flex-wraps justify-center items-center"> 
                <div className="w-50"> 
                    <ul className="list-disc m-4 p-0">
                        <li> 
                            <p> 
                                <span className="font-bold">¡Gracias por hacer la diferencia! 💛📚</span>
                            </p>
                        </li>
                        <li> 
                            <p> 
                                Sabemos la importancia de la educacion y el impacto que tiene en la vida de las personas.
                            </p>
                        </li>
                        <li> 
                            <p> 
                                ¡Comencemos juntos este emocionante viaje!
                            </p>
                        </li>
                    </ul> 
                </div>
                <div>
                    <p> 
                        <span className="font-bold border-5">Image Placeholder</span>
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Welcome;