import React from 'react'
import { Router, Route, Switch } from 'wouter'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route>
            <div className="min-h-screen bg-storm-dark text-white flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-brics-gold mb-4">404</h1>
                <p className="text-xl mb-8">Página não encontrada</p>
                <a href="/" className="text-brics-gold hover:text-white underline">
                  Voltar ao início
                </a>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
