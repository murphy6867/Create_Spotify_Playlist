import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}>
        <Route index element={<Home />} />
    </Route>
  )
)

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
