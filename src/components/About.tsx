import { useTranslation } from "react-i18next";

const About = () => {

    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
  };

    return(
        <>
            <button onClick={() => changeLanguage("pt")}>🇧🇷 PT</button>
            <button onClick={() => changeLanguage("en")}>🇺🇸 EN</button>
            <h2>About</h2>
            <p>{t("ab_greeting")}</p> 
            <p>{t("ab_college")}</p>
            <p>{t("ab_technologies")}</p>
        </>
    )
}

export default About