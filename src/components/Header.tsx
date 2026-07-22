import { useTranslation } from "react-i18next";
import { LINKS } from "../links";

export default function Header() {
  const { i18n, t } = useTranslation("common");
  const toggle = () => i18n.changeLanguage(i18n.language.startsWith("pt") ? "en" : "pt");

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b">
      <div className="font-bold text-xl">{t("brand")}</div>
      <nav className="flex items-center gap-3">
        <a className="underline" href={LINKS.social.x} target="_blank">X</a>
        <a className="underline" href={LINKS.social.tg} target="_blank">Telegram</a>
        <button onClick={toggle} className="px-3 py-1 rounded border">
          {t("lang")}: {i18n.language.startsWith("pt") ? "PT" : "EN"}
        </button>
      </nav>
    </header>
  );
}
