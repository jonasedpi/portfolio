import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 aspect-<3:2>">
      <h2>{t("ser_services")}</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <h3>Landing Page</h3>
      <p>{t("inProgress")}</p>
      </div>
      <h3>{t("ser_webDev")}</h3>
      <p>{t("inProgress")}</p>
      <h3>{t("ser_PixelArt")}</h3>
      <p>{t("inProgress")}</p>
      <h3>{t("ser_gameDev")}</h3>
      <p>{t("inProgress")}</p>
    </div>
  );
};

export default Service;
