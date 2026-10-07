import "./FormularioTarea.css";
import { useState } from "react";

const FormularioTarea = ({ setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

const agregarTarea = (e) => {
  e.preventDefault();

  const nueva = {
    id: Date.now(),
    texto: nuevaTarea,
    completada: false,
  };

  setTareas((tareas) => [...tareas, nueva]);
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
            onChange={(e) => setNuevaTarea(e.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioTarea;
