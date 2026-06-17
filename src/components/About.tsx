
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();

    return(
        <div>
            <p>{t("ab_me")}</p>
            <img src="../assets/images/perfil.jpg" alt="Profile Picture"  />
            <p>{t("ab_greeting")}</p> 
            <p>{t("ab_college")}</p>
            <p>{t("ab_technologies")}</p>
        </div>
    )
}

export default About