import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
