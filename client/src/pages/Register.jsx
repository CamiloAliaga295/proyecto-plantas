import React, { useState } from "react";

const Register = () => {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [direccion, setDireccion] = useState("")
  const [contraseña, setContraseña] = useState("")

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === '' || correo === '' || direccion === '' || contraseña === '') {
      setError(true)
      return;
    }
  }

  return (
    <div>
      <h1 className='text-center mt-5'>Registrarse</h1>

      <form className="formulario row d-flex justify-content-center" onSubmit={handleSubmit}>

        {error ? <p className='alert alert-danger text-center ms-5'>Todos los datos son obligatorios</p> : null}


        <div className="mb-3 ms-5  me-5 col-xs-4">
          <label className="form-label">Nombre</label>
          <input type="name" className="form-control" id="name" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4">
          <label className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electronico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4">
          <label className="form-label">Dirección</label>
          <input type="adress" className="form-control" id="adress" placeholder="Ingresa tu dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-success d-grid gap-2 col-6 mx-auto">Registrarme</button>


      </form>




    </div>
  );
};

export default Register;
