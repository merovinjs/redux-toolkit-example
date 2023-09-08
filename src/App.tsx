import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/header/Header";
import Deneme from "./pages/Deneme";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/deneme" element={<Deneme />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
