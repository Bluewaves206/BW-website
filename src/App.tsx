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


function App() {

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
<p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    &nbsp;
</p>
<p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
    I hope this email finds you well. Bluewaves Media is a digital marketing company based in Kolkata that has been helping businesses like yours since 2012.<br>
    <br>
    At Bluewaves Media, we specialize in providing cutting-edge SMS marketing services, both promotional and transactional, that can help you reach your target audience and drive sales. Our team of experts is committed to creating customized campaigns that are tailored to your unique business needs, ensuring that your message is delivered to the right people at the right time.<br>
    <br>
    In addition to SMS marketing, we also offer verified business WhatsApp services, which allow you to engage with your customers directly and build stronger relationships with them. With our powerful and user-friendly platform, you can send targeted messages, share images and videos, and provide real-time support to your customers, all while keeping their data secure and protected.<br>
    <br>
    We also provide IVR cloud-based solutions and voice solutions that can help you automate your customer service and streamline your business operations. Our state-of-the-art technology enables you to create personalized greetings, route calls to the right department or agent, and track your performance metrics, all from a single platform.<br>
    <br>
    At Bluewaves Media, we understand that every business is unique, which is why we take a consultative approach to our services. We work closely with you to understand your goals, challenges, and opportunities, and then develop a customized strategy that is tailored to your specific needs. Our goal is to help you achieve your objectives and grow your business through the power of digital marketing.<br>
    <br>
    <strong>If you are interested in learning more about our services, please find attached a detailed quotation that outlines our offerings and pricing. We are confident that we can help you achieve your goals and look forward to the opportunity to work with you.</strong><br>
    <br>
    Thank you for considering Bluewaves&nbsp;Media as your digital marketing partner. We look forward to hearing back from you soon.
</p>
<ol>
    <li>
        <p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
            apple
        </p>
    </li>
    <li>
        <p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
            peach
        </p>
    </li>
    <li>
        <p class="MsoNormal" style="-webkit-text-stroke-width:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);font-family:&quot;Times New Roman&quot;, &quot;serif&quot;;font-size:12pt;font-style:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-weight:400;letter-spacing:normal;margin:0px 0in;orphans:2;text-align:start;text-decoration-color:initial;text-decoration-style:initial;text-decoration-thickness:initial;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;">
            banana
        </p>
    </li>
</ol>`}
                blogImg="src/assets/DemoVid.png" />} />
              <Route path="*" element={<Error />} />
            </Route>

          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
