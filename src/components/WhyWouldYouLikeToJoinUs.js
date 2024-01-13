import React, { useState } from 'react';
import MyRadioWithImg from './formElements/MyRadioWithImg';

function WhyWouldYouLikeToJoinUs() {
    const topics = [
        { name: 'Estudiante', logo: null },
        { name: 'Profesor', logo: null }
      ]; 
    const title = "¿Como te gustaria comenzar?" 
    return (
        <div> 
            <MyRadioWithImg title={title} newTopics={topics} />
        </div>
    )
}

export default WhyWouldYouLikeToJoinUs;