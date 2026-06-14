import { useTranslation } from "react-i18next";

const About = () => {

    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
  };

    return(
        <div className="about bg py-1">
            <button onClick={() => changeLanguage("pt")}>🇧🇷 PT</button>
            <button onClick={() => changeLanguage("en")}>🇺🇸 EN</button>
            <p>{t("ab_me")}</p>
            <p>{t("ab_greeting")}</p> 
            <p>{t("ab_college")}</p>
            <p>{t("ab_technologies")}</p>
        </div>
    )
}

export default About