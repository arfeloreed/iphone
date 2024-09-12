import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => scrollToTop()}
      className={`fixed bottom-8 right-8 z-20 rounded-full bg-gray-200 p-4 text-xl font-semibold
        text-black transition-all duration-300 hover:bg-blue hover:text-white
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTopBtn;
