import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topic from './Topic';
import ThankYou from './ThankYouPage';
import HowDidYouFindUs from './HowDidYouFindUs';
import WhyWouldYouLikeToJoinUs from './WhyWouldYouLikeToJoinUs';
import YearsOfExperience from './YearsOfExperience';
import BenefitsOfJoining from './BenefitsOfJoining';
import LoginStarter from './LoginStarter';
import Welcome from './Welcome';
import Walkthrough from './Walkthrough'; 
 
function GetStartedPage() {
  let buttonNext = "Siguiente"; 
  const [progress, setProgress] = useState(0); 
  const navigate = useNavigate();

  const handleNext = () => { 
    setProgress((increase) => {

      if(increase === 100) {
        navigate('/dashboard');
      } else {
        let myProgress; 
        myProgress = Math.min(increase + 12.5, 100);  
        return myProgress 
      }  
    });   
};
  return ( 
    <div> 
            <div className="mb-5 h-6 bg-colorSaltBox mx-5 rounded-full"> 
                <div className="h-6 bg-orange rounded-full" 
                        style= {
                                {    
                                    backgroundColor: '#FFA500',
                                    width: `${progress}%`, 
                                }
                            } 
                > 
                <p className="font-sans mx-2"><i>{`${progress}%`}</i></p>
                
              </div>
            </div>   
              
            { 
              progress === 0 ? <Topic /> : null   
            }          
            {
              progress === 12.5 ? <ThankYou /> : null
            }
            {
              progress === 25 ? <HowDidYouFindUs /> : null
            }
            { 
              progress === 37.5 ? <WhyWouldYouLikeToJoinUs /> : null
            }
            {
              progress === 50 ? <YearsOfExperience /> : null
            }
            {
              progress === 62.5 ? <BenefitsOfJoining /> : null
            }
            {
              progress === 75 ? <LoginStarter /> : null
            } 
            {
              progress === 87.5 ? <Welcome /> : null
            }
            {
              progress === 100 ? <Walkthrough /> : null
            } 

            
            <button onClick={handleNext} className="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              {
                progress === 100 ? buttonNext = "Finalizar" : buttonNext
              } 
            </button>  
    </div>
  );
}

export default GetStartedPage;