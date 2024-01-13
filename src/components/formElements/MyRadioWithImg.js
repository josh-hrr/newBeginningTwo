import React, { useState } from 'react';

function MyRadioWithImg({title, newTopics, subTitle}) {
    const topics = newTopics; 
    const [selectedTopics, setSelectedTopics] = useState([]); 
    const handleSelect = (topic) => {
        setSelectedTopics([topic]);
    }; 
  return (
    <div>
      <h1>{title}</h1> 
      {subTitle === undefined ? null : <p className='mt-4'>{subTitle}</p>  } 
      <div className="flex flex-wrap justify-center items-center p-4 text-colorGray text-left">  
        {
            topics.map((topic, index) => (
            <div 
                key={index} 
                className={`hover:text-white w-full h-full bg-gray-100  hover:bg-colorBlue font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-blue-500 rounded max-w-sm overflow-hidden shadow-lg m-4 cursor-pointer ${selectedTopics.includes(topic.name) ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleSelect(topic.name)}
            >
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><img className='w-10 h-10 inline-block mr-3' src={topic.logo}/>{topic.name}</div>
                </div>
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default MyRadioWithImg;