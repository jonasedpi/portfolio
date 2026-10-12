import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  // Emojis por enquanto. Quando tiver ícones/prints de verdade, adicione um campo `image`.
  const services = [
    {
      title: t("ser_webDev"),
      description: t("ser_webDev_desc"),
      icon: "🌐",
    },
    {
      title: t("ser_lanPage"),
      description: t("ser_lanPage_desc"),
      icon: "📄",
    },
    {
      title: t("ser_gameDev"),
      description: t("ser_gameDev_desc"),
      icon: "🎮",
    },
    {
      title: t("ser_PixelArt"),
      description: t("ser_PixelArt_desc"),
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-zinc-900">
      <h2 className="text-4xl font-bold text-center text-blue-100 mb-12">
        {t("ser_services")}
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="
              flex
              flex-col
              bg-zinc-800
              border-4
              border-blue-400
              shadow-[8px_8px_0px_#000]
              p-6
              hover:-translate-y-2
              hover:shadow-[12px_12px_0px_#000]
              transition-all
              duration-200
            "
          >
            <div className="text-5xl text-center mb-4" aria-hidden="true">
              {service.icon}
            </div>

            <h3 className="text-sm font-bold text-center text-white break-words">
              {service.title}
            </h3>

            <p className="text-xs leading-relaxed text-gray-300 text-center mt-4">
              {service.description}
            </p>

            <a
              href="#contact"
              className="
                mt-auto
                block
                text-center
                bg-yellow-300
                text-black
                text-xs
                font-bold
                py-3
                border-4
                border-black
                shadow-[4px_4px_0px_#000]
                hover:translate-x-1
                hover:translate-y-1
                hover:shadow-none
                transition-all
              "
            >
              {t("ser_quote")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
