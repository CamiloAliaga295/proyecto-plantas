import React, { useState } from 'react'

const Login = () => {
    const[correo, setCorreo]=useState("")
    const[contraseña, setContraseña]=useState("")

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(correo === '' || contraseña === '') {
            setError(true)
            return;
        }
    }

    return (
        <div>
            <h1 className='text-center mt-5'>Iniciar sesion</h1>

            <form className='formulario' onSubmit={handleSubmit}>
            {error ? <p className='alert alert-danger text-center ms-5'>Datos incorrectos</p> : null}

            <div className="mb-3 ms-5  me-5 col-xs-4">
                <label className="form-label">Correo electronico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            </div>

            <div className="mb-3 ms-5  me-5 col-xs-4">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-success d-grid gap-2 col-6 mx-auto">Iniciar Sesión</button>

            </form>


        </div>
    )
}

export default Login

