import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t-4  border-gray-300/50 mt-10 w-1/2 mx-auto rounded-lg">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4 text-center text-sm text-gray-500">
        {t("footer.text")}
      </div>
    </footer>
  );
}
