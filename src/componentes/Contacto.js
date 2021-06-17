import { useState } from "react";
import { useFormularios } from "../hooks/useFormularios";

export const Contacto = () => {
  const { datos: datosContacto, setDato } = useFormularios({
    nombre: "",
    email: "",
    comentarios: "",
  });
  return (
    <div className="row">
      <h2 className="col-12">Contacto</h2>
      <form className="col-12" noValidate autoComplete="off">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={datosContacto.nombre}
            className="form-control"
            id="nombre"
            onChange={setDato}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={datosContacto.email}
            id="email"
            className="form-control"
            onChange={setDato}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comentarios">Comentarios:</label>
          <textarea
            className="form-control"
            id="comentarios"
            value={datosContacto.comentarios}
            onChange={setDato}
          ></textarea>
        </div>
        <button className="btn btn-info" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
