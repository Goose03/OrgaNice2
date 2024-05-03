import bgEstudiante from "/src/assets/bgEstudiante.png";
import ToDo from './toDo/ToDo'
import Course from "./course/Course";

export default function Student() {

    return (
        <>
            <div className="bg-center bg-cover bg-no-repeat relative p-5" style={{ backgroundImage: `url(${bgEstudiante})`, minHeight: "150vh", }} >
                <div className="flex items-center">
                    <ToDo />
                    <div className="mt-9">

                    <Course />
                    </div>

                </div>
                    <a href="https://drive.google.com/drive/folders/1o1urk4SL7Bmls2kf_GCxoibsPbBve9MI" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Diviértete con MÉXICO MÁGICO!
                        </button>
                    </a>
            </div>
        </>
    )
}