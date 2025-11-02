
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

const App = () => {
  
  return (
    <>
    <NavBar />
    <div data-theme="cupcake" >
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
