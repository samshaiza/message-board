import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./pages/Board";

function App() {
  return (
    <div className="container-md">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
