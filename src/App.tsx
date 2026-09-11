import Nav from "./components/nav";
import Hero from "./components/hero";
import Technologies from "./components/technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Technologies />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
