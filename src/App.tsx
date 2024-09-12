import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <ScrollToTopBtn />
    </main>
  );
};

export default App;
