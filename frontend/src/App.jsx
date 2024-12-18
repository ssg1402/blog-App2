import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {Home} from "./pages/home"
import {Blog} from "./pages/Blog"




function App() {
  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Blog" element={<Blog/>} />

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
