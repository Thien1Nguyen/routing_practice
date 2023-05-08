import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
// import DisplayBoard from './views/DisplayBoard';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import { Data } from './components/Data';

    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/:data/:color/:bg" element={<Data />} />
        <Route path="/:data/:color" element={<Data />} />
        <Route path="/:data" element={<Data />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App