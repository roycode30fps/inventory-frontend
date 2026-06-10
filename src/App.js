import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard'
import Navbar from './components/navigation';
import { ItemContextProvider } from './context/ItemContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ItemContextProvider>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Dashboard />}
              />
            </Routes>
          </div>
        </ItemContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;