import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./components/langSwitch.tsx";
import ToTopBtn from "./components/toTopBtn.tsx";

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
          <section className="relative rounded-lg bg-neutral-50 shadow-xl max-lg:row-start-1  lg:row-span-2">
            <div className="absolute inset-px  max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="p-10 sm:p-12">
                <h6 className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                  {t("aboutCard.title")}
                </h6>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t("aboutCard.desc")}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"></div>
            </div>
          </section>

          {/* PROJECT CARD */}
          <section className="relative bg-neutral-50 rounded-lg shadow-xl lg:row-span-1 ">
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="p-10 sm:p-12">
                <h6 className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                  {t("projectCard.title")}
                </h6>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t("projectCard.desc")}
                </p>
              </div>
            </div>
          </section>

          {/* LINK CARD */}
          <section className="relative rounded-lg bg-neutral-50 shadow-xl max-lg:row-start-4 lg:col-start-2 lg:row-start-2 ">
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="p-10 sm:p-12">
                <h6 className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                  {t("linkCard.title")}
                </h6>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t("linkCard.desc")}
                </p>
              </div>
            </div>
          </section>

          {/* TECHNO CARD */}
          <section className="relative rounded-lg bg-neutral-50 shadow-xl lg:row-span-2   ">
            <div className="relative flex h-full flex-col overflow-hidden ">
              <div className="p-10 sm:p-12">
                <h6 className="mt-2 text-lg font-medium tracking-tight  max-lg:text-center">
                  {t("technoCard.title")}
                </h6>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t("technoCard.desc")}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="flex justify-center m-6 mt-10 sm:mt-16">
        <section className="bg-neutral-50 rounded-lg shadow-xl mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
            <h2 className="m-4 text-4xl font-semibold text-center text-gray-900 ">
              {t("contactSection.title")}
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
              {t("contactSection.desc")}
            </p>
            <form action="#" id="contact" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("contactSection.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-none focus:ring-purple-300 focus:ring-2 block w-full p-2.5  "
                  placeholder={t("contactSection.emailPH")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("contactSection.subjectLabel")}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg border border-gray-300 shadow-sm  focus:outline-none focus:ring-purple-300 focus:ring-2  "
                  placeholder={t("contactSection.subjectPH")}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("contactSection.messageLabel")}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg shadow-sm border border-gray-300  focus:outline-none focus:ring-purple-300 focus:ring-2 "
                  placeholder={t("contactSection.messagePH")}></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-500 sm:w-fit hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 ">
                {t("contactSection.sendButton")}
              </button>
            </form>
          </div>
        </section>
      </section>
      <ToTopBtn />
    </motion.main>
  );
}

export default App;
