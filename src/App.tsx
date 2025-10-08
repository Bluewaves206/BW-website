import Layout from "./layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<div>Servies</div>} />
            <Route path="/blog" element={<Blogs/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
