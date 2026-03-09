import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="flex justify-center m-4 sm:m-6 mt-10 sm:mt-16 ">
      <motion.section
        className="card-base mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8  "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="py-6 sm:py-8 lg:py-16 px-3 sm:px-4 mx-auto max-w-3xl">
          <h2 className="m-2 sm:m-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-heading">
            {t("contactSection.title")}
          </h2>
          <p className="mb-6 sm:mb-8 lg:mb-16 font-light text-center text-sm sm:text-base lg:text-lg text-muted">
            {t("contactSection.desc")}
          </p>
          <form
            onSubmit={handleSubmit}
            id="contact"
            className="space-y-8 opacity-60   cursor-not-allowed">
            <div>
              <label htmlFor="email" className="form-label">
                {t("contactSection.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input p-3 cursor-not-allowed"
                placeholder={t("contactSection.emailPH")}
                required
                disabled
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
                className="form-input p-3 cursor-not-allowed"
                placeholder={t("contactSection.subjectPH")}
                required
                disabled
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
                className="form-input p-3 min-h-12 max-h-96 pointer-events-none cursor-not-allowed"
                placeholder={t("contactSection.messagePH")}
                disabled
              />
            </div>
            <motion.button
              type="submit"
              className="py-3 px-6 text-sm font-medium text-center text-white rounded-full bg-accent sm:w-fit hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              disabled>
              {t("contactSection.sendButton")}
            </motion.button>
          </form>
        </div>
      </motion.section>
    </section>
  );
}
