import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic (Formspree, serverless function, etc.)
    console.log("Form submitted");
  };

  return (
    <section className="flex justify-center m-6 mt-10 sm:mt-16">
      <section className="bg-neutral-50 rounded-lg shadow-xl mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
          <h2 className="m-4 text-4xl font-semibold text-center text-gray-900">
            {t("contactSection.title")}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            {t("contactSection.desc")}
          </p>
          <form onSubmit={handleSubmit} id="contact" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900">
                {t("contactSection.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-purple-300 focus:ring-2 block w-full p-2.5"
                placeholder={t("contactSection.emailPH")}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900">
                {t("contactSection.subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-purple-300 focus:ring-2"
                placeholder={t("contactSection.subjectPH")}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900">
                {t("contactSection.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-purple-300 focus:ring-2"
                placeholder={t("contactSection.messagePH")}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-500 sm:w-fit hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300">
              {t("contactSection.sendButton")}
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
