import "./Tarea.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
const Tarea = ({ tarea, completarTarea, eliminarTarea }) => {
  return (
    <div>
       
      <div className="tarea">
       
         <button
          className="btn-completar"
          onClick={() => completarTarea(tarea.id)}
        >
        {tarea.completada ? (
  <FontAwesomeIcon icon={faCircleCheck} />
) : (
  <FontAwesomeIcon icon={faCircle} />
)}
        </button>
        <p className={tarea.completada ? "completada" : ""}>{tarea.texto}</p>
       
        <button
          className="btn-eliminar"
          onClick={() => eliminarTarea(tarea.id)}
        >
            <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Tarea;
