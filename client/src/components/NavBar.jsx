import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Plantacenter</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Tienda</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="favoritos">Favoritos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">Iniciar sesión</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="register">Registrarse</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

