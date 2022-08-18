import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./Routes/Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
