import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Binario } from './pages/Binario'
import { Home } from './pages/Home'
import { Morse } from './pages/Morse'

// Para criar rotas: Importar as dependências da primeira linha, importar os components que serão as rotas
// Criar a estrutura <Router><Routes><Route path="/endereço" element={<Component/>}></Routes></Router>

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />

        <Route path="/binario" element={<Binario />} />

        <Route path="/morse" element={<Morse />} />
      </Routes>
    </Router>
  )
}
