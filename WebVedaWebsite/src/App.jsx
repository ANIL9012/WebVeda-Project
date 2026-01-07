import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AllCourse from "./components/AllCourse/AllCourse";
import WebVeda from "./components/WebVeda/WebVeda";
import WhyWebVeda from "./components/WebVeda/WhyWebVeda";
import Students from "./components/WebVeda/Students";
import LoginPage from "./components/Form/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCourse />} />
        <Route path="/webveda" element={<WebVeda />} />
        <Route path="/why-webveda" element={<WhyWebVeda />} />
        <Route path="/testimonials" element={<Students />} />
        <Route path="/authenticate" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
