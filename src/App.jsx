import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import ListaTarea from "./components/ListaTarea/ListaTarea";
import "./App.css";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <div className="App">
        <h1 className="titulo-principal">Mis Tareas</h1>

        <div className="container-list">
          <ListaTarea />
        </div>

        <div className="container-form">
          <FormularioTarea setTareas={setTareas} />
        </div>
      </div>
    </>
  );
}

export default App;
