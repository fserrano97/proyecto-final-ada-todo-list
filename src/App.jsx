import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import ListaTarea from "./components/ListaTarea/ListaTarea";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tareas, setTareas] = useState(() => {
  const tareasGuardadas = localStorage.getItem("tareas");

  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
});

  const completarTarea = (id) => {
  setTareas((tareas) =>
    tareas.map((tarea) =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    )
  );
};

const eliminarTarea = (id) => {
  setTareas((tareas) =>
    tareas.filter((tarea) => tarea.id !== id)
  );
};

useEffect(() => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}, [tareas]);

  return (
    <>
      <div className="App">
        <h1 className="titulo-principal">Mis Tareas</h1>

        <div className="container-list">
         <ListaTarea
  tareas={tareas}
  completarTarea={completarTarea}
  eliminarTarea={eliminarTarea}
/>
        </div>

        <div className="container-form">
          <FormularioTarea setTareas={setTareas} />
        </div>
      </div>
    </>
  );
}

export default App;
