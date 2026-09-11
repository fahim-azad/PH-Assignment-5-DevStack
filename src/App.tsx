import Nav from "./components/nav";
import Hero from "./components/hero";
import Technologies from "./components/technologies";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
