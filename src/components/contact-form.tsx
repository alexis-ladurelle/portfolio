import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="flex justify-center m-6 mt-10 sm:mt-16">
      <motion.section
        className="card-base mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
          <h2 className="m-4 text-4xl font-semibold text-center text-gray-900">
            {t("contactSection.title")}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            {t("contactSection.desc")}
          </p>
          <form onSubmit={handleSubmit} id="contact" className="space-y-8">
            <div>
              <label htmlFor="email" className="form-label">
                {t("contactSection.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input p-2.5"
                placeholder={t("contactSection.emailPH")}
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="form-label">
                {t("contactSection.subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input p-3"
                placeholder={t("contactSection.subjectPH")}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">
                {t("contactSection.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="form-input p-2.5"
                placeholder={t("contactSection.messagePH")}
              />
            </div>
            <motion.button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-500 sm:w-fit hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}>
              {t("contactSection.sendButton")}
            </motion.button>
          </form>
        </div>
      </motion.section>
    </section>
  );
}
