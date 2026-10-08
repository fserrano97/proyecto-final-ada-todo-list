import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import ListaTarea from "./components/ListaTarea/ListaTarea";
import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");

    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") {
      return tarea.completada;
    }

    if (filtro === "pendientes") {
      return !tarea.completada;
    }

    return true;
  });

  const completarTarea = (id) => {
    setTareas((tareas) =>
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  };

  const eliminarTarea = (id) => {
    setTareas((tareas) => tareas.filter((tarea) => tarea.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <div className="App">
        <h1 className="titulo-principal">TodoList</h1>
        <div className="container-principal">
          <div className="container-primero">
            <div className="container-list">
              <ListaTarea
                tareas={tareasFiltradas}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
              />
            </div>

            <div className="container-form">
              <FormularioTarea setTareas={setTareas} />
            </div>
          </div>

          <div className="filtros">
            <FontAwesomeIcon icon={faFilter} />
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
              <option value="todas"> Todas</option>
              <option value="pendientes">Pendientes</option>
              <option value="completadas">Completadas</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
