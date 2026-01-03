import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Error from "./pages/error";

function App() {
  return (
    <BrowserRouter parentC>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/game-terminal" element={<GameTerminal />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

