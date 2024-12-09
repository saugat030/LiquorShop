import "./App.css";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import BestSelling from "./Components/BestSelling";
import Years from "./Components/Years";
import Footer from "./Components/Footer";
import WhyUs from "./Components/WhyUs";
function App() {
  return (
    <div className="font-Poppins">
      <NavBar />
      <Landing></Landing>
      <WhyUs />
      <BestSelling />
      <Years />
      <Footer />
    </div>
  );
}

export default App;
