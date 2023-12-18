import "../public/App.css"
import BubbleSort from "./pages/BubbleSort";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Palindrome from "./pages/Palindrome";
import StackData from "./pages/StackData";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/palindrome", element: <Palindrome /> },
    { path: "/bubble", element: <BubbleSort /> },
    { path: "/stackdata", element: <StackData /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
