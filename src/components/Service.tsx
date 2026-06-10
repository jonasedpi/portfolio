import { useTranslation } from "react-i18next";

const Service = () => {
    const { t } = useTranslation();

    return(
        <>
            <h2>{t("ser_services")}</h2>
            <h3>Landing Page</h3>
                <p>{t("inProgress")}</p>
            <h3>Websites</h3>
                <p>{t("inProgress")}</p>    
            <h3>Pixel Art</h3>
                <p>{t("inProgress")}</p>   
            <h3>Game Maker</h3>
                <p>{t("inProgress")}</p>
        </>
    )
}

export default Service