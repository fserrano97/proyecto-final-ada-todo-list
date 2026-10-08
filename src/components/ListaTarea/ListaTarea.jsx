import "./ListaTarea.css";
import Tarea from "../Tarea/Tarea";

const ListaTarea = ({
  tareas,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div className="container-tarea">
      <h2 className="titulo-tareas">Mis tareas</h2>

      {tareas.length === 0 && (
        <p className="mensaje-vacio">Aún no hay tareas pendientes...</p>
      )}

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