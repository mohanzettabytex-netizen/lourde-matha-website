import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />   {/* ✅ MUST be here */}
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}
