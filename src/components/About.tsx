
import { useTranslation } from "react-i18next";
import perfil from "../assets/images/perfil.png";

const About = () => {

    const { t } = useTranslation();

    return(
        <div>
            <p>{t("ab_me")}</p>
            <div className="flex flex-col items-center columns-2xl">   
                <img
                    src={perfil}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto my-4 justify-end-safe"
                />
                <p>{t("ab_greeting")}</p> 
                <p>{t("ab_college")}</p>
                <p>{t("ab_technologies")}</p>
            </div>     
        </div>
    )
}

export default About