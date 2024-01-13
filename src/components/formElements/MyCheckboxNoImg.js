import React, { useState } from 'react';

function MyCheckboxNoImg({title, newTopics}) {
  const topics = newTopics; // Replace with your topics, pass an array as parameter
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleSelect = (topic) => {
    setSelectedTopics((prevTopics) => {
      if (prevTopics.includes(topic)) {
        // If the topic is already selected, unselect it
        return prevTopics.filter((t) => t !== topic);
      } else {
        // If the topic is not selected, select it
        return [...prevTopics, topic];
      }
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="flex flex-wrap justify-around p-4 text-left">  
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className={`hover:text-white w-full h-full bg-gray-100 hover:bg-colorBlue  font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-blue-500 rounded max-w-sm overflow-hidden shadow-lg m-4 cursor-pointer ${selectedTopics.includes(topic) ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleSelect(topic)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{topic}</div> 
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCheckboxNoImg;