import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("ser_webDev"),
      description: t("ser_webDev_desc"),
      icon: "/icons/web.png",
      image: "/images/web-example.png",
    },
    {
      title: t("ser_lanPage"),
      description: t("ser_lanPage_desc"),
      icon: "/icons/landing-page.png",
      image: "/images/landing-example.png",
    },
    {
      title: t("ser_gameDev"),
      description: t("ser_gameDev_desc"),
      icon: "/icons/game.png",
      image: "/images/game-example.png",
    },
    {
      title: t("ser_PixelArt"),
      description: t("ser_PixelArt_desc"),
      icon: "/icons/pixel-art.png",
      image: "/images/pixel-example.png",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-zinc-900">
      <h2 className="text-4xl font-bold text-center text-blue-100 mb-12">
        {t("ser_services")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-zinc-800
              border-4
              border-blue-400
              rounded-none
              shadow-[8px_8px_0px_#000]
              p-6
              hover:-translate-y-2
              hover:shadow-[12px_12px_0px_#000]
              transition-all
              duration-200
            "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4 pixelated"
            />

            <h3 className="text-xl font-bold text-center text-white">
              {service.title}
            </h3>

            <p className="text-gray-300 text-center mt-3">
              {service.description}
            </p>

            <img
              src={service.image}
              alt={service.title}
              className="w-full mt-6 border-4 border-white pixelated"
            />

            <button
              className="
                w-full
                mt-6
                bg-yellow-300
                text-black
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
              {t("ser_viewMore")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
