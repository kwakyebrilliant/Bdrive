import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Summary from "./dashboard/Pages/Summary";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/summary" exact element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
