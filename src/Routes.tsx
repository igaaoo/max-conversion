import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Binary } from './pages/Binary'
import { Home } from './pages/Home'
import { Morse } from './pages/Morse'

import '../src/App.css'

// Para criar rotas: Importar as dependências da primeira linha, importar os components que serão as rotas
// Criar a estrutura <Router><Routes><Route path="/endereço" element={<Component/>}></Routes></Router>

export function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />

          <Route path="/binary" element={<Binary />} />

          <Route path="/morse" element={<Morse />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </div>
  )
}
