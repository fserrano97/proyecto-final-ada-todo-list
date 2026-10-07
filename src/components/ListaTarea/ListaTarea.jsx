import "./ListaTarea.css";
import Tarea from "../Tarea/Tarea";

const ListaTarea = ({ tareas, completarTarea }) => {
  return (
    <div>
      <h2>Mis tareas</h2>

      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          completarTarea={completarTarea}
        />
      ))}
    </div>
  );
};

export default ListaTarea;