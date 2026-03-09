import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t-4 border-line/50 mt-10 w-1/2 mx-auto rounded-lg">
      <div className="layout-container py-4 text-center text-sm text-muted">
        {t("footer.text")}
      </div>
    </footer>
  );
}
