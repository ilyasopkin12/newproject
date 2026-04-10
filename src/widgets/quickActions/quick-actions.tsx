type QuickActionItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const quickActions: QuickActionItem[] = [
  {
    id: "new-appointment",
    title: "Новая запись",
    description: "Запишитесь к врачу",
    icon: "📅",
  },
  {
    id: "prescriptions",
    title: "Рецепты",
    description: "Мои рецепты",
    icon: "💊",
  },
  {
    id: "analyses",
    title: "Анализы",
    description: "Результаты",
    icon: "📋",
  },
  {
    id: "consultation",
    title: "Консультация",
    description: "Онлайн чат",
    icon: "💬",
  },
];

export function QuickActions() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-4 gap-4">
        {quickActions.map(({ id, icon, title, description }) => (
          <button
            key={id}
            className="rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-blue-300 hover:bg-blue-50 transition"
            type="button"
          >
            <div className="text-2xl mb-2">{icon}</div>
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-xs text-slate-500">{description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
