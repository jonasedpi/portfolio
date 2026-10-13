import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: "📧",
      title: t("ct_email"),
      link: "mailto:jonasespinheiro@gmail.com",
      label: "jonasespinheiro@gmail.com",
    },
    {
      icon: "💻",
      title: t("ct_github"),
      link: "https://github.com/jonasedpi",
      label: "github.com/jonasedpi",
    },
    {
      icon: "💼",
      title: t("ct_linkedin"),
      link: "https://www.linkedin.com/in/jonas-eduardo-schumann-pinheiro/",
      label: "Jonas Pinheiro",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-950 text-white">
      <h2 className="font-pixel text-3xl text-center text-blue-300 mb-12">
        {t("ct_contact")}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              bg-zinc-800
              border-4
              border-blue-300
              p-6
              shadow-[8px_8px_0px_#000]
              hover:-translate-y-2
              hover:shadow-[12px_12px_0px_#000]
              transition-all
              duration-200
            "
          >
            <div className="text-5xl text-center mb-6">{contact.icon}</div>

            <h3 className="font-pixel text-base text-center text-blue-300 mb-4">
              {contact.title}
            </h3>

            <p className="text-center text-zinc-300 group-hover:text-white text-[10px] leading-relaxed break-all">
              {contact.label}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Jonas Eduardo Schumann Pinheiro
      </div>
    </section>
  );
};

export default Contact;
