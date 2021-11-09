import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"

import { Inicio } from './pages/inicio'
import { Contacto } from './pages/contacto'
import { Nosotros } from './pages/nosotros'
import { Pokemon } from './pages/pokemon'

export function App() {
  return (
    <>
      <Router>
        <div className="btn-group">
          <Link to="/" class="btn btn-dark mt-3">Inicio</Link>
          <Link to="/nosotros" class="btn btn-dark mt-3">Nosotros</Link>
          <Link to="/contacto" class="btn btn-dark mt-3">Contacto</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/pokemon/:nombre">
            <Pokemon />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
