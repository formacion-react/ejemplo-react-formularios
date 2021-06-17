import { useState } from "react";
import { Contacto } from "./componentes/Contacto";
import { Registro } from "./componentes/Registro";

function App() {
  const [formulario, setFormulario] = useState("registro");
  return (
    <div className="container">
      <div className="row">
        <button
          className="btn btn-info col-3"
          onClick={() => setFormulario("registro")}
        >
          Registro
        </button>
        <button
          className="btn btn-info col-3"
          onClick={() => setFormulario("contacto")}
        >
          Contacto
        </button>
        <h1 className="col-12">Formularios</h1>
        {formulario === "registro" ? <Registro /> : <Contacto />}
      </div>
    </div>
  );
}

export default App;
