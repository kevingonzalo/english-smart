import "./App.css";
import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cursos from "./components/Cursos";

function App() {
  const [scroll, setScroll] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = ref.current;
      const { y } = div.getBoundingClientRect();
      const scroll = y;
      setScroll(scroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App" ref={ref}>
      <Navbar scroll={scroll} />
      <Header />
      <Cursos />
    </div>
  );
}

export default App;
