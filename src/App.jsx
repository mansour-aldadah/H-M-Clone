import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routersConfi";

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
