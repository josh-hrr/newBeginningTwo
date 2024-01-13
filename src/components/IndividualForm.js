import individualImage from '../img/draw2.jpg';
import ReservasForm from './ReservasForm';

function IndividualForm () {
    return (
        <div className="flex justify-center">
            <div className="m-5">    
            <img src={individualImage} width="300"/>   
            </div> 
            <div className="m-5 block p-6 rounded-lg shadow-lg bg-white max-w-md" > 
                <ReservasForm />  
            </div>
        </div>
    )
}

export default IndividualForm;


/*

<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <form>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block" id="exampleInput7"
                        placeholder="Name"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
                        " id="exampleInput8"
                        placeholder="Email address"/>
                    </div>
                    <div className="form-group mb-6">
                        <textarea
                        className="form-control block"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                    ></textarea>
                    </div> 
                    <button type="submit" className="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out">Send</button>
                    </form>
                </div>

*/