import { useState } from 'react'; 

function MyInputField({myTitle, myDescription, myPlaceholder}) { 
  return (
    <div className=''>
        <h1 className='p-4 m-0'>{myTitle}</h1> 
        <p className='p-4 m-0'>{myDescription}</p>

        <div className="flex justify-center p-4 text-left">  
            <input
                type="text"
                placeholder={myPlaceholder}
                className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            
        </div>
        
    </div>
    
  );
}

export default MyInputField;