import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "@routes/index";

function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Page }) => (
        <Route path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export default App;
