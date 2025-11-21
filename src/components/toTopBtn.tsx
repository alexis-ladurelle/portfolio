import { useState } from "react";
import chevronUp from "../assets/chevron-up.svg";

const ToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    globalThis.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  globalThis.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible && (
        <section className="fixed bottom-8 left-0 right-0 z-50 max-w-2xl lg:max-w-7xl mx-auto w-full px-4 flex justify-end pointer-events-none">
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-full bg-white/50 p-3 text-xs font-medium uppercase leading-tight text-purple-500 shadow-md transition duration-150 ease-in-out pointer-events-auto">
            <img src={chevronUp} alt="" />
          </button>
        </section>
      )}
    </>
  );
};

export default ToTopBtn;
