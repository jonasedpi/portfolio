import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

    return(
        <>
            <ul>
                <li>{t("home")}</li>
                <li>{t("ab_me")}</li>
                <li>{t("pr_projects")}</li>
                <li>{t("ser_services")}</li>
                <li>{t("ct_contact")}</li>
            </ul>
        </>
    )
}

export default Header