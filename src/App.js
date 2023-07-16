import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  useEffect(() => {
    // Code to run when the component mounts
    AOS.init();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
