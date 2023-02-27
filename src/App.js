import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
