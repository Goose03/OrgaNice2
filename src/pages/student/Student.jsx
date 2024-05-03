import bgEstudiante from "/src/assets/bgEstudiante.png";
import ToDo from './toDo/ToDo'
import Course from "./course/Course";

export default function Student(){

    return(
        <>
            <div className="bg-center bg-cover bg-no-repeat relative p-5" style={{backgroundImage: `url(${bgEstudiante})`, minHeight: "150vh",}} >
            <div className="flex items-center">
                <ToDo />
                <Course />
            </div>
            </div>
        </>
    )
}