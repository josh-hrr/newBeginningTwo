import ButtonBlue from "../../../formElements/ButtonBlue";
import ButtonOrange from "../../../formElements/ButtonOrange";
import MyFooter from "../../footer/MyFooter";
import plant from "../../../../img/plant.png";

function createData(courseName, courseDesc, sessions, duration, protein) {
    return { courseName, courseDesc, sessions, duration, protein };
}
  
  const rows = [
    createData("Curso 1", "Curso sobre full stack", 6.0, "1h"),
    createData("Curso 2", "Curso sobre web development", 9.0, "5h"),
    createData("Curso 3", "Curso sobre backend", 16.0, "10h"),
    createData("Curso 4", "Curso sobre QA Automation", 4, "5h"),
    createData("Curso 5", "Curso sobre idiomas", 16.0, "20h"),
];

function MyCoursesPage () { 
    return (
        <div class="p-4 sm:ml-64">
            <div class="p-4    rounded-lg dark:border-gray-700 ">  

                <table class="w-full text-center text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Nombre</th>
                                <th scope="col" class="px-6 py-3">Description</th>
                                <th scope="col" class="px-6 py-3">Sesiones</th>
                                <th scope="col" class="px-6 py-3">Duracion</th>
                                <th scope="col" class="px-6 py-3">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.courseName} className="border-b-2 border-gray-100">
                                    <td class="px-6 py-4">{row.courseName}</td>
                                    <td class="px-6 py-4">{row.courseDesc}</td>
                                    <td class="px-6 py-4">{row.sessions}</td>
                                    <td class="px-6 py-4">{row.duration}</td>
                                    <td class="px-6 py-4"><ButtonBlue text="Editar" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
            </div>              
        </div> 
    )
}

export default MyCoursesPage;