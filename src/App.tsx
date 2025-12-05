import { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Partner from "./pages/partner";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ScrollToTop from "./components/scroll-top";
import ViewBlog from "./pages/view-blogs";
import Error from "./pages/error";
import SMS from "./pages/sms";
import WebDev from "./pages/webdev";
import BulkEmail from "./pages/bulkEmail";
import Whatsapp from "./pages/whatsapp";
import IVR from "./pages/IVR";


import Loader from "./components/Loader";
import CRM from "./pages/crm";   


function App() {

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec loader

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }


  let theme = createTheme();
  theme = responsiveFontSizes(theme);


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/partnership" element={<Partner />} />
              <Route path="/sms" element={<SMS />} />
              <Route path="/webdev" element={<WebDev />} />
              <Route path="/Bmail" element={<BulkEmail />} />
              <Route path="/crm" element={<CRM />} />   
              <Route path="blogview" element={<ViewBlog blogTitle="Convolutional Neural Network"
                blogContent={`<p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    Dear Sir/Mam,
</p>
<p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    &nbsp;
</p>
<p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    Greetings from Bluewaves Media!
</p>
... (your full content remains unchanged)
`}
                blogImg="src/assets/DemoVid.png" />} />
              <Route path="/whatsapp" element={<Whatsapp />} />
              <Route path="/IVR" element={<IVR />} />
              <Route path="*" element={<Error />} />
            </Route>

          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
