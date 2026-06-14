import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header bg py-1 justify-end-safe container">
      <ul>
        <li>{t("home")}</li>
        <li>{t("ab_me")}</li>
        <li>{t("pr_projects")}</li>
        <li>{t("ser_services")}</li>
        <li>{t("ct_contact")}</li>
      </ul>
    </div>
  );
};

export default Header;
