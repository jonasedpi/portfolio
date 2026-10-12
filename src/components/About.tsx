import { useTranslation } from "react-i18next";
import perfil from "../assets/images/perfil.png";

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
                w-118
                h-118
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

          {/* Status */}
          <div className="space-y-4">

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>React</span>
                <span>85%</span>
              </div>

              <div className="w-full bg-zinc-700 h-4 border-2 border-white">
                <div className="bg-blue-500 h-full w-[85%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>TypeScript</span>
                <span>80%</span>
              </div>

              <div className="w-full bg-zinc-700 h-4 border-2 border-white">
                <div className="bg-cyan-400 h-full w-[80%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Unity</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-zinc-700 h-4 border-2 border-white">
                <div className="bg-green-500 h-full w-[90%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>C#</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-zinc-700 h-4 border-2 border-white">
                <div className="bg-purple-500 h-full w-[90%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Pixel Art</span>
                <span>70%</span>
              </div>

              <div className="w-full bg-zinc-700 h-4 border-2 border-white">
                <div className="bg-yellow-400 h-full w-[70%]"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
