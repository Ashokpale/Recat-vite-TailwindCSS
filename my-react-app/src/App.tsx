// src/App.tsx

import { Routes, Route } from 'react-router-dom'
import { TodoItems } from './Components/TodoItems';


function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<TodoItems />} />
      </Routes>
    </div>
  )
}

export default App
