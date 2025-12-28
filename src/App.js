import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./router/AppRouter";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}
