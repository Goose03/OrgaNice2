// initializes the backend server using Express and 
// listens on port 5000. It also imports the db_connection.js file,
// which establishes a connection to the MySQL database.
// defines the API endpoints and routes requests to the corresponding controller functions.

import express from 'express';
import cors from 'cors';
import {getTables} from './endpoint_handlers/test_endpoint.js';
import {createEstudiante,getEstudianteId, getClaseEstudiante, deleteEstudiante} from './endpoint_handlers/estudiante.js';
import { getTareasEstudiante, patchTareaComp, postTarea} from './endpoint_handlers/tarea.js';
import { postInscribirClase, getClase } from './endpoint_handlers/clase.js';

//Define port
const Port = 3000;

// Initialize Express for backend server 
const app = express();

// Middleware
app.use(cors());

// Start server
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});


//Testing route 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World');
});


// //MySQL routes (these functions are imported as routes from the controllers.js file)
app.get('/tables', getTables);


//Estudiante routes
app.get('/createEstudiante', createEstudiante); //createEstudiante?name=Moi&contraseina=password
app.get('/estudianteID', getEstudianteId)  //estudianteID?estudianteName=
app.get('/claseEstudiante', getClaseEstudiante); //claseEstudiante?id=000000000X
app.get('/deleteEstudiante', deleteEstudiante); //http://localhost:3000/deleteEstudiante?id=000000000X

//Tarea routes
app.get('/tareasEstudiante', getTareasEstudiante); //   
app.get('/patchTareaComp', patchTareaComp); //patchTareaComp?est_id=000000000X&hw_id=000000000X
app.get('/postTarea', postTarea); //postTarea?class_id=000000000X&hw_name=nombre&descript=descripcion&due_date=fecha&priority=prioridad

//Clase routes
app.get('/postInscribirClase', postInscribirClase); //postInscribirClase?est_id=000000000X&clase_id=000000000X
app.get('/getClase', getClase); //getClase?class_id=00X