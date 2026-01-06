import { useState, useEffect } from "react";
import chevronUp from "../assets/chevron-up.svg";

const ToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    globalThis.addEventListener("scroll", toggleVisible);

    return () => {
      globalThis.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    globalThis.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <section className="fixed bottom-8 left-0 right-0 z-50 max-w-2xl lg:max-w-7xl mx-auto w-full px-4 flex justify-end pointer-events-none">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full bg-white/50 p-3 text-xs font-medium uppercase leading-tight text-purple-500 shadow-md transition duration-150 ease-in-out hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 pointer-events-auto">
            <img
              src={chevronUp}
              alt="Button to scroll to the top"
              aria-hidden="true"
            />
          </button>
        </section>
      )}
    </>
  );
};

export default ToTopBtn;
