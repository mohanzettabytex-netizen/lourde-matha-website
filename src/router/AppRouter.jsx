import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import StudentLife from "../pages/StudentLife";
import Updates from "../pages/Updates";
import Rules from "../pages/Rules";
import Admissions from "../pages/Admissions";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/student-life" element={<StudentLife />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
