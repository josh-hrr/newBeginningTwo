import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const apiUrl = process.env.REACT_APP_API_URL;

const DataPage = () => {
    const [data, setData] = useState([]);  
    const getData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/get-all-contact`);
            setData(response.data);
            localStorage.setItem('data', JSON.stringify(response.data));
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        } 
    }; 
    useEffect(() => {
        const cachedData = localStorage.getItem('data');
        if (cachedData) {
            setData(JSON.parse(cachedData)); 
        } else {
            getData();
        } 
    }, []);

    return (
        <div>
            <h1>Reservas LYT languages - Datos</h1>
            <Button variant="primary" onClick={getData}>Actualizar</Button> 

            <br></br>
            <br></br>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Número de teléfono</th>
                    <th>Pais</th>
                    <th>Cuidad</th>
                    <th>Idioma</th>
                    <th>Modalidad</th>
                    <th>Nivel</th>
                    <th>Horario</th>
                    <th>Comentario</th>  
                </tr>
                </thead>
                <tbody>
                {
                data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.paisSelect}</td>
                    <td>{item.ciudad}</td>
                    <td>{item.idiomaSelect}</td>
                    <td>{item.modalidadSelect}</td>
                    <td>{item.nivelSelect}</td>
                    <td>{item.horarioSelect}</td>
                    <td>{item.comentario}</td>  
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
  );
}; 
export default DataPage;  