import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import chevronUp from "/assets/chevron-up.svg?url";

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
    <AnimatePresence>
      {visible && (
        <motion.section
          className="fixed bottom-8 left-0 right-0 z-50 max-w-2xl lg:max-w-7xl mx-auto w-full px-4 flex justify-end pointer-events-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="rounded-full bg-card/60 p-3 text-xs font-medium uppercase leading-tight text-accent shadow-md transition duration-150 ease-in-out hover:bg-card/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas pointer-events-auto">
            <img
              src={chevronUp}
              alt="Button to scroll to the top"
              aria-hidden="true"
            />
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ToTopBtn;
