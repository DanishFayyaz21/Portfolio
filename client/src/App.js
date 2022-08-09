import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar";
import WebRoutes from "./Routes/Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <WebRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
