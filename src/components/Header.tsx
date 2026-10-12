import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const menu = [
    { icon: "🏠", label: t("home"), href: "#" },
    { icon: "👤", label: t("ab_me"), href: "#about" },
    { icon: "💻", label: t("pr_projects"), href: "#projects" },
    { icon: "⚒️", label: t("ser_services"), href: "#services" },
    { icon: "✉️", label: t("ct_contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 border-b-4 border-blue-300 shadow-[0_6px_0px_#000]">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="font-pixel text-blue-300 text-xl">
            JONAS.exe
          </h1>

          <p className="text-[10px] text-zinc-400">
            Full-Stack &amp; Unity Developer
          </p>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-3">

            {menu.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="
                    group
                    relative
                    whitespace-nowrap
                    text-xs
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    border-2
                    border-transparent
                    text-white
                    transition-all
                    hover:border-blue-300
                    hover:bg-blue-300
                    hover:text-black
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0px_#000]
                  "
                >
                  <span
                    className="
                      absolute
                      -left-3
                      opacity-0
                      group-hover:opacity-100
                      text-blue-300
                    "
                  >
                    ▶
                  </span>

                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}

          </ul>
        </nav>

        {/* Idiomas Desktop */}
        <div className="hidden xl:flex gap-2">

          <button
            onClick={() => changeLanguage("pt")}
            className="border-2 border-blue-300 px-3 py-2 hover:bg-blue-300 hover:text-black transition"
          >
            🇧🇷
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className="border-2 border-blue-300 px-3 py-2 hover:bg-blue-300 hover:text-black transition"
          >
            🇺🇸
          </button>

        </div>

        {/* Botão Mobile */}
        <button
          className="xl:hidden text-blue-300 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="xl:hidden bg-zinc-900 border-t-4 border-blue-300">

          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                gap-3
                px-6
                py-4
                text-white
                border-b
                border-zinc-700
                hover:bg-blue-300
                hover:text-black
                transition
              "
            >
              <span>▶</span>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}

          <div className="flex justify-center gap-4 py-4">

            <button
              onClick={() => changeLanguage("pt")}
              className="border-2 border-blue-300 px-4 py-2 hover:bg-blue-300 hover:text-black transition"
            >
              🇧🇷 PT
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="border-2 border-blue-300 px-4 py-2 hover:bg-blue-300 hover:text-black transition"
            >
              🇺🇸 EN
            </button>

          </div>

        </div>
      )}

    </header>
  );
};

export default Header;