import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
        const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
  };


  return (
    <div className="flex flex-row justify-items-center-safe">
      <div className="flex flex-row justify-items-start-safe">
      <button onClick={() => changeLanguage("pt")}>🇧🇷 PT</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 EN</button>
      </div>
      <ul className="flex flex-row justify-items-end-safe ">
        <li className="px-4 py-2"> {t("home")} </li>
        <li className="px-4 py-2">{t("ab_me")}</li>
        <li className="px-4 py-2">{t("pr_projects")}</li>
        <li className="px-4 py-2">{t("ser_services")}</li>
        <li className="px-4 py-2">{t("ct_contact")}</li>
      </ul>
    
    </div>
  );
};

export default Header;
