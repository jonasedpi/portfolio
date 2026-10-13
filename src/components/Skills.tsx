import { useState } from "react";
import { useTranslation } from "react-i18next";

type Category = "games" | "frontend" | "backend" | "tools";

interface Skill {
  id: string;
  name: string;
  icon: string; // sigla curta no estilo "runa"
  category: Category;
  level: 1 | 2 | 3 | 4; // 1 Aprendiz, 2 Praticante, 3 Avançado, 4 Mestre
  projects: string[]; // chaves de tradução dos títulos dos projetos
}

const PORTFOLIO = "projects.portfolio.title";
const TEKOHA = "projects.vr_unity.title";

// ✏️ Ajuste aqui os níveis e os projetos de cada habilidade.
const skills: Skill[] = [
  { id: "unity", name: "Unity", icon: "UN", category: "games", level: 3, projects: [TEKOHA] },
  { id: "csharp", name: "C#", icon: "C#", category: "games", level: 3, projects: [TEKOHA] },
  { id: "pixelart", name: "Pixel Art", icon: "PX", category: "games", level: 2, projects: [] },

  { id: "react", name: "React", icon: "RE", category: "frontend", level: 3, projects: [PORTFOLIO] },
  { id: "typescript", name: "TypeScript", icon: "TS", category: "frontend", level: 3, projects: [PORTFOLIO] },
  { id: "tailwind", name: "Tailwind CSS", icon: "TW", category: "frontend", level: 3, projects: [PORTFOLIO] },
  { id: "htmlcss", name: "HTML / CSS", icon: "</>", category: "frontend", level: 3, projects: [PORTFOLIO] },

  { id: "node", name: "Node.js", icon: "ND", category: "backend", level: 2, projects: [] },
  { id: "sql", name: "SQL", icon: "SQL", category: "backend", level: 2, projects: [] },

  { id: "git", name: "Git / GitHub", icon: "GIT", category: "tools", level: 3, projects: [TEKOHA, PORTFOLIO] },
];

const categories: { id: Category; emoji: string }[] = [
  { id: "games", emoji: "🎮" },
  { id: "frontend", emoji: "🌐" },
  { id: "backend", emoji: "⚙️" },
  { id: "tools", emoji: "🛠️" },
];

// Classes completas (o Tailwind precisa enxergar o nome inteiro no código)
const colors: Record<Category, { border: string; text: string; pip: string }> = {
  games: { border: "border-green-400", text: "text-green-400", pip: "bg-green-400" },
  frontend: { border: "border-blue-400", text: "text-blue-400", pip: "bg-blue-400" },
  backend: { border: "border-purple-400", text: "text-purple-400", pip: "bg-purple-400" },
  tools: { border: "border-yellow-400", text: "text-yellow-400", pip: "bg-yellow-400" },
};

const Pips = ({ level, pipClass }: { level: number; pipClass: string }) => (
  <span className="flex gap-0.5" aria-hidden="true">
    {[1, 2, 3, 4].map((n) => (
      <span
        key={n}
        className={`w-1.5 h-1.5 ${n <= level ? pipClass : "bg-zinc-700"}`}
      />
    ))}
  </span>
);

const Skills = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = skills.find((s) => s.id === selectedId) ?? null;

  return (
    <div>
      <h4 className="text-sm text-blue-300 mb-5">⚔️ {t("skills.title")}</h4>

      <div className="space-y-5">
        {categories.map((cat) => {
          const c = colors[cat.id];
          return (
            <div key={cat.id}>
              <p className={`text-[10px] mb-2 ${c.text}`}>
                {cat.emoji} {t(`skills.cat.${cat.id}`)}
              </p>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === cat.id)
                  .map((s) => {
                    const active = s.id === selectedId;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onMouseEnter={() => setSelectedId(s.id)}
                        onFocus={() => setSelectedId(s.id)}
                        onClick={() => setSelectedId(s.id)}
                        aria-label={`${s.name}, ${t(`skills.level.${s.level}`)}`}
                        aria-pressed={active}
                        className={`
                          w-14 h-14
                          flex flex-col items-center justify-center gap-1.5
                          bg-zinc-900
                          border-4
                          shadow-[3px_3px_0px_#000]
                          transition-all
                          ${active ? "border-yellow-300 -translate-y-1" : c.border}
                        `}
                      >
                        <span className={`text-xs ${c.text}`}>{s.icon}</span>
                        <Pips level={s.level} pipClass={c.pip} />
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Painel de detalhes do item (o "tooltip") */}
      <div
        className="mt-6 min-h-36 border-4 border-zinc-600 bg-zinc-900 p-4 text-xs leading-relaxed"
        aria-live="polite"
      >
        {selected ? (
          <>
            <p className={`text-sm font-bold ${colors[selected.category].text}`}>
              {selected.name}
            </p>

            <div className="mt-3 flex items-center gap-3 text-zinc-200">
              <span>{t("skills.lv", { n: selected.level })}</span>
              <Pips level={selected.level} pipClass={colors[selected.category].pip} />
              <span>{t(`skills.level.${selected.level}`)}</span>
            </div>

            <p className="mt-3 text-zinc-300">
              {selected.projects.length > 0
                ? `${t("skills.usedIn")}: ${selected.projects.map((p) => t(p)).join(", ")}`
                : t("skills.noProject")}
            </p>
          </>
        ) : (
          <p className="text-zinc-400">{t("skills.hint")}</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
