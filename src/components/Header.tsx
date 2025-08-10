import { useTranslation } from "react-i18next";
import { LINKS } from "../links";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="px-4 py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-3">{t("tagline")}</h1>
      <p className="text-muted-foreground mb-6">{t("hero_line")}</p>
      <div className="inline-flex gap-3 flex-wrap justify-center">
        <a className="px-4 py-2 rounded bg-black text-white" href={LINKS.bsc.buy} target="_blank">{t("cta_bsc")}</a>
        <a className="px-4 py-2 rounded border" href={LINKS.bsc.chart} target="_blank">{t("cta_chart_bsc")}</a>
        <a className="px-4 py-2 rounded bg-black text-white" href={LINKS.sol.buy} target="_blank">{t("cta_sol")}</a>
        <a className="px-4 py-2 rounded border" href={LINKS.sol.buy} target="_blank">{t("cta_chart_sol")}</a>
      </div>
      <div className="mt-4 text-sm opacity-75">{t("badges")}</div>
    </section>
  );
}
