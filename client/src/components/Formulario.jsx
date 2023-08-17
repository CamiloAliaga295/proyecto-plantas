import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Formulario = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [password, setPassword] = useState('')
  
    const registrarUsuario = async () => {
      try {
        const body = { nombre, email, direccion, password }
        console.log('cuerpo', body)
        await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        
        alert('Usuario creado con exito')
        
      } catch (error) {
        alert('Hubo un error')
        console.log(error.message)
      }
    }
    return (
      <div>
        <form>
          <div>
            <label className="form-label" htmlFor="title">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
  
          <div>
            <label className="form-label" htmlFor="title">
              email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            <label className="form-label" htmlFor="title">
              Direccion
            </label>
            <input
              className="form-control"
              type="addres"
              id="addres"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
  
          <div>
            <label className="form-label" htmlFor="title">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button className="btn btn-primary" onClick={registrarUsuario}>
            Registrarse
          </button>
        </form>
      </div>
    );
  }
  
  
  
  
  export default Formulario;