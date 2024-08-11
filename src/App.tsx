import { RouterProvider } from "react-router-dom";
import Router from "./Routes/router";
import "./App.scss";
function App() {
  return <RouterProvider router={Router}></RouterProvider>;
}

export default App;
