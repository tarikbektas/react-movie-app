import "./App.css";
 
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetials/MovieDetail";
import MainComp from "./components/MainComp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainComp></MainComp>}></Route>
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
