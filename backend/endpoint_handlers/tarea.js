import db from "../db_connection.js";

export const getTareasEstudiante=(req,res)=>{
        const id = req.query.id;
        db.query("CALL getTareasEstudiante (?)", [id], (error, results) => {
        
            if (error) {
                console.error("Error fetching student tasks:", error);
                res.status(500).json({ error: "Internal server error" });
                return;
            }
            res.json(results);
            });
    }

export const patchTareaComp=(req,res)=>{
    const est_id = req.query.est_id;
    const hw_id = req.query.hw_id;
    db.query("CALL patchTareaComp (?,?)", [est_id,hw_id], (error, results) => {
    
        if (error) {
            console.error("Error updating student tasks:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.json(results[0]);
        });
}

export const postTarea=(req,res)=>{
    const clase_id = req.query.class_id;
    const nombre_tarea= req.query.hw_name;
    const descripcion= req.query.descript;
    const fecha_entrega= req.query.due_date;
    const prioridad= req.query.priority;
    db.query("CALL postTarea (?,?,?,?,?)", [clase_id,nombre_tarea,descripcion,fecha_entrega,prioridad], (error, results) => {
    
        if (error) {
            console.error("Error posting student tasks:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }
        res.json(results);
        });
}