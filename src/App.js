import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Summary from "./dashboard/Pages/Summary";
import MyDrive from "./dashboard/Pages/MyDrive";
import Shared from "./dashboard/Pages/Shared";
import Favorite from "./dashboard/Pages/Favorite";
import Recent from "./dashboard/Pages/Recent";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/summary" exact element={<Summary />} />
      <Route path="/mydrive" exact element={<MyDrive />} />
      <Route path="/shared" exact element={<Shared />} />
      <Route path="/favorite" exact element={<Favorite />} />
      <Route path="/Recent" exact element={<Recent />} />
      </Routes>
    </Router>
  );
}

export default App;
