import "./App.css";
import MainPage from "./component/MainPage";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/routes";
import "./App.css";
function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Element }) => (
        <Route path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default App;
