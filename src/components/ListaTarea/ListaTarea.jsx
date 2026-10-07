import "./ListaTarea.css";
import Tarea from "../Tarea/Tarea";

const ListaTarea = ({ tareas }) => {
  return (
    <div>
      <h2>Mis tareas</h2>

      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default ListaTarea;