import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homePage from "/pages/homePage.js";

function App() {
  return (
    <Router>q
      <Routes>
        <Route path = "/" element = {<homePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
