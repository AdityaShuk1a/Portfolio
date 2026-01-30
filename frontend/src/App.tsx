
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import StartProject from "./pages/StartProject";
import { Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
    <>
    <NavBar />
    <div data-theme="cupcake" >
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-a-project" element={<StartProject />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
