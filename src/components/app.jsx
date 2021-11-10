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
import { Form } from './form/form'
import { Main } from './ejemplo-redux/main'

export function App() {
  return (
    <>
      <Router>
        <div className="btn-group">
          <Link to="/" className="btn btn-dark mt-3">Inicio</Link>
          <Link to="/nosotros" className="btn btn-dark mt-3">Nosotros</Link>
          <Link to="/contacto" className="btn btn-dark mt-3">Contacto</Link>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Main />
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
