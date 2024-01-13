import React, { useState } from 'react';

function MyListWithImg({title, newTopics}) {
    const topics = newTopics; 
    const [selectedTopics, setSelectedTopics] = useState([]); 
    const handleSelect = (topic) => {
        setSelectedTopics([topic]);
    };

  return (
    <div>
      <h1>{title}</h1> 
      <div className="flex flex-wrap justify-center items-center p-4 text-left">  
        {
            topics.map((topic, index) => (
            <div 
                key={index} 
                className={`w-full h-full bg-gray-100 font-bold py-2 px-4 border-b-4 rounded max-w-sm overflow-hidden shadow-lg m-4`}
                onClick={() => handleSelect(topic.name)}
            >
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><img className='w-10 h-10 inline-block mr-3' src={topic.logo}/>{topic.name}</div>
                </div>
                <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                    {topic.description}
                </p>
                </div>
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default MyListWithImg;