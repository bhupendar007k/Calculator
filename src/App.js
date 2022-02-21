import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calci from "./page/Calci";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Calci />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
