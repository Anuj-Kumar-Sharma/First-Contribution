import './App.css';
import NavigationBar from './components/Navigation';
import { Routes, Route } from "react-router"
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
    </Routes>
  );
}

export default App;
