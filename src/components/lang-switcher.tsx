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
      className="text-gray-700 border-2 border-gray-300 rounded-lg px-3 py-1.5 hover:border-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
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
