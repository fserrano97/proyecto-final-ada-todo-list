import "./ListaTarea.css";
import Tarea from "../Tarea/Tarea";

const ListaTarea = ({
  tareas,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div>
      <h2>Mis tareas</h2>

      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
};

export default ListaTarea;