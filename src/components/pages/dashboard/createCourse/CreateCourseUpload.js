import { useState } from 'react';
import ButtonBlue from '../../../formElements/ButtonBlue';
import ButtonOrange from '../../../formElements/ButtonOrange';


function CreateCourseUpload() {
    const myPlaceholder = "Introducción al curso";
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [uploadType, setUploadType] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const [sections, setSections] = useState([1]);

    const handleAddSection = () => {
        setSections([...sections, sections.length + 1]);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleUploadClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUploadTypeChange = (event) => {
        setUploadType(event.target.value);
    };

    return (
        <div>
            <h1>Creacion del curso</h1>
            <p>Ponle un nombre a tus clases y sube tu contenido</p>

            <div className="w-50 mx-auto">
            {sections.map((section, index) => (
                <div className="text-left m-3 gap-3" key={index}>   
                    <div className="flex justify-center items-center">
                        <div className="w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <p className='text-center p-1 m-5 border-4 rounded'>Clase {section}</p>
                            <p className='text-center p-1 m-5 rounded'>Titulo</p>
                        </div>
                        <div>
                            <button className='border-4 rounded p-3 m-3 ' onClick={handleUploadClick}>Editar</button>  
                        </div> 
                    </div>
                    {index === sections.length - 1 && (
                        <button className='w-96 border-4 rounded p-3 mt-3' onClick={handleAddSection}>+ Agregar otra clase</button>
                    )}
                </div>
            ))}
                
            </div> 
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '50%',
                    }}>
                        <form className='text-left'>
                            <div>
                                <label>
                                Titulo de la clase
                                    <input className='border block'
                                        type="text" placeholder='Introduccion al curso...'  
                                    />
                                </label>

                                <div className='mt-3 block border-3'>
                                    <label 
                                            className='block'>
                                        <input
                                            type="radio"
                                            value="video"
                                            checked={uploadType === 'video'}
                                            onChange={handleUploadTypeChange}
                                        />
                                        Upload Video
                                    </label>
                                    <label l>
                                        <input
                                            
                                            type="radio"
                                            value="zoom"
                                            checked={uploadType === 'zoom'}
                                            onChange={handleUploadTypeChange}
                                        />
                                        Place Zoom Link
                                    </label>
                                </div>
                                
                            </div>
                            {uploadType === 'video' && (
                                <input className='m-5 border-b-2' type="file" />
                            )}
                            {uploadType === 'zoom' && (
                                <input className='m-5 border-b-2' type="text" placeholder="Enter Zoom link" />
                            )}
                        </form>
                        <button onClick={handleCloseModal}>Guardar</button>
                    </div>
                </div>
            )}
        </div> 
    );
}

export default CreateCourseUpload;