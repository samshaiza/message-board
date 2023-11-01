import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./pages/Board";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
