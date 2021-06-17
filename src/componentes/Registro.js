import { useState } from "react";
import { useFormularios } from "../hooks/useFormularios";

export const Registro = () => {
  const { datos: datosRegistro, setDato } = useFormularios({
    nombre: "",
    trabajo: "",
    aceptar: false,
  });
  return (
    <div className="row">
      <h2 className="col-12">Registro</h2>
      <form className="col-12" noValidate autoComplete="off">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={datosRegistro.nombre}
            className="form-control"
            id="nombre"
            onChange={setDato}
          />
        </div>
        <div className="form-group">
          <label htmlFor="trabajo">Trabajo:</label>
          <select
            id="trabajo"
            value={datosRegistro.trabajo}
            className="form-control"
            onChange={setDato}
          >
            <option value="">Seleccionar trabajo</option>
            <option value="paro">En paro</option>
            <option value="programador">Programador</option>
            <option value="dj">DJ</option>
          </select>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            checked={datosRegistro.acepto}
            type="checkbox"
            id="aceptar"
            onChange={setDato}
          />
          <label className="form-check-label" htmlFor="aceptar">
            Acepto las condiciones que no me he leído
          </label>
        </div>
        <button className="btn btn-info" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
