import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Routes from "./Routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='App'>
      <Navbar />
      <Routes location={location} />
      <Footer />
    </div>
  );
}

export default App;
