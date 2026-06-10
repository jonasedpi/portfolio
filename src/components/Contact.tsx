import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return(
        <div>
            <h1>{t("ct_contact")}</h1>
            <button><a href="mailto:jonasespinheiro@gmail.com" target="_blank" rel='noopener'>{t("ct_email")}</a></button>
            <button><a href="https://github.com/jonasedpi" target="_blank" rel='noopener'>{t("ct_github")}</a></button>
            <button><a href="https://www.linkedin.com/in/jonas-eduardo-schumann-pinheiro/" target="_blank" rel='noopener'>{t("ct_linkedin")}</a></button>
        </div>
    );
}

export default Contact