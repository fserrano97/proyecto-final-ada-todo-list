import "./FormularioTarea.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const FormularioTarea = ({ setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [error, setError] = useState(false);
  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    const nueva = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    };

    setTareas((tareas) => [...tareas, nueva]);

    setNuevaTarea("");
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="titulo-form">Agregar Tarea</h2>

        <form onSubmit={agregarTarea}>
          <input
            className="input-tarea text-white placeholder:text-pink-300 rounded"
            type="text"
            placeholder="Escribe aqui.."
            value={nuevaTarea}
            maxLength={30}
            onChange={(e) => {
              setNuevaTarea(e.target.value);
              setError(false);
            }}
          />

          {error && (
            <div className="cartel-error">
              <span>⚠️¡Ups! Escribe una tarea..</span>

              <button className="cartel-cruz" onClick={() => setError(false)}>✕</button>
            </div>
          )}

          <button className="btn btn-primary" type="submit">
          <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioTarea;
