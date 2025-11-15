import i18n from "./i18n";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { label: "🇫🇷 French", code: "fr" },
  { label: "🇬🇧 English", code: "en" },
] as const;

export default function LangSwitcher() {
  const { i18n: i18nInstance } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18nInstance.changeLanguage(lang_code);
  };

  return (
    <select
      className="text-gray-400"
      value={i18nInstance.language}
      onChange={onChangeLang}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
