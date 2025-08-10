import { LINKS } from "../links";
import { useTranslation } from "react-i18next";

export default function Contracts() {
  const { t } = useTranslation("common");

  return (
    <section className="px-4 py-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{t("contracts")}</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <div className="text-sm mb-1">{t("bsc_contract")}</div>
          <code className="break-all text-xs">{LINKS.bsc.contract}</code>
          <div className="mt-3 flex gap-2">
            <a className="px-3 py-1 rounded border" href={LINKS.bsc.scan} target="_blank">{t("scan")}</a>
            <a className="px-3 py-1 rounded border" href={LINKS.bsc.lock} target="_blank">{t("lock")}</a>
          </div>
        </div>

        <div className="p-4 border rounded">
          <div className="text-sm mb-1">{t("sol_mint")}</div>
          <code className="break-all text-xs">{LINKS.sol.mint}</code>
          <div className="mt-3 flex gap-2">
            <a className="px-3 py-1 rounded border" href={LINKS.sol.buy} target="_blank">{t("cta_sol")}</a>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">{t("links")}</h3>
        <div className="flex gap-2 flex-wrap">
          <a className="px-3 py-1 rounded border" href={LINKS.social.tg} target="_blank">Telegram</a>
          <a className="px-3 py-1 rounded border" href={LINKS.social.x} target="_blank">X / Twitter</a>
        </div>
      </div>
    </section>
  );
}
