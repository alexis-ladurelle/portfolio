import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Card from "./components/card-component.tsx";
import ContactForm from "./components/contact-form.tsx";
import LangSwitcher from "./components/lang-switcher.tsx";
import ToTopBtn from "./components/to-top-btn.tsx";

function App() {
  const { t } = useTranslation();

  return (
    <motion.main
      className="py-16 selection:bg-purple-200 sm:py-32 scroll-smooth"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 },
        scale: { duration: 0.8 },
      }}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mb-10">
        <header className="my-4 w-full text-right gap-4 flex justify-end-safe">
          <a
            href="#contact"
            className=" text-sm font-medium text-center text-purple-500  ">
            {t("hero.contactLink")}
          </a>
          <LangSwitcher />
        </header>

        <div>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
            Alexis Ladurelle
          </h2>
          <p className="text-center text-xl font-semibold text-purple-500">
            {t("hero.role")}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* ABOUT CARD */}
          <Card
            title={t("aboutCard.title")}
            description={t("aboutCard.desc")}
            className="max-lg:row-start-1 lg:row-span-2"
          />

          {/* PROJECT CARD */}
          <Card
            title={t("projectCard.title")}
            description={t("projectCard.desc")}
            className="lg:row-span-1"
          />

          {/* LINK CARD */}
          <Card
            title={t("linkCard.title")}
            description={t("linkCard.desc")}
            className="max-lg:row-start-4 lg:col-start-2 lg:row-start-2"
          />

          {/* TECHNO CARD */}
          <Card
            title={t("technoCard.title")}
            description={t("technoCard.desc")}
            className="lg:row-span-2"
          />
        </div>
      </div>

      {/* CONTACT SECTION */}
      <ContactForm />
      <ToTopBtn />
    </motion.main>
  );
}

export default App;
