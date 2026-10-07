import "./Tarea.css";

const Tarea = ({ tarea, completarTarea }) => {
  return (
    <div>
      <div className="tarea">
        <p className={tarea.completada ? "completada" : ""}>{tarea.texto}</p>
        <button onClick={() => completarTarea(tarea.id)}>
          {tarea.completada ? "Completada" : "Completar"}
        </button>
      </div>
    </div>
  );
};

export default Tarea;
