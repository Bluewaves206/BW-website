import Layout from "./layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/services" element={<div>Servies</div>} />
            <Route path="/blog" element={<div>Blog</div>} />
            <Route path="/pricing" element={<div>Pricing</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
