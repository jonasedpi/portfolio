import { useTranslation } from "react-i18next";
import perfil from "../assets/images/perfil.jpg";
import Skills from "./Skills";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-6 bg-zinc-900 text-white">
      <h2 className="text-4xl text-center text-blue-300 font-bold mb-10">
        {t("ab_me")}
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Foto */}
        <div className="flex justify-center">
          <div
            className="
              w-full
              max-w-md
              bg-zinc-800
              border-4 border-blue-300
              p-3
              shadow-[8px_8px_0px_#000]
            "
          >
            <img
              src={perfil}
              alt="Perfil"
              className="
                w-full
                aspect-square
                object-cover
                border-4 border-white
              "
            />
          </div>
        </div>

        {/* HUD */}
        <div
          className="
            bg-zinc-800
            border-4 border-blue-300
            p-8
            shadow-[8px_8px_0px_#000]
          "
        >
          <h3 className="text-2xl font-bold text-blue-300 mb-6">
             Jonas
          </h3>

          <p className="mb-4">{t("ab_greeting")}</p>
          <p className="mb-4">{t("ab_college")}</p>
          <p className="mb-8">{t("ab_technologies")}</p>

          <Skills />
        </div>

      </div>
    </section>
  );
};

export default About;
