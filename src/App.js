import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// Alternative approach - works with older version too
// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinition);

// Newer approach
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      // Alternate approach using index
      { index: true, element: <HomePage /> },
      // When the path is empty, it will render the HomePage
      // { path: "", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
