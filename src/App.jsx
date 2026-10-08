import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import ListaTarea from "./components/ListaTarea/ListaTarea";
import "./App.css";
import { useEffect, useState } from "react";

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
            <button
              className={filtro === "todas" ? "activo" : ""}
              onClick={() => setFiltro("todas")}
            >
              Todas
            </button>

            <button
              className={filtro === "pendientes" ? "activo" : ""}
              onClick={() => setFiltro("pendientes")}
            >
              Pendientes
            </button>

            <button
              className={filtro === "completadas" ? "activo" : ""}
              onClick={() => setFiltro("completadas")}
            >
              Completadas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
