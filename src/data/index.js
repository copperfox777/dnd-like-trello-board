const data = [
  {
    id: 1,
    columnId: "order",
    title: "Установка плит под фундамент 3",
    content: "Содержимое карточки",
  },
  {
    id: 2,
    columnId: "order",
    title: "Земельные работы по подготовке площадки 1",
    content: "Текстовое содержимое ",
  },
  {
    id: 4,
    columnId: "progress",
    title: "Земельные работы по подготовке площадки 3",
    content: "Текстовое содержимое ",
  },
  {
    id: 5,
    columnId: "review",
    title: "Установка плит под фундамент 1",
    content: "Содержимое карточки",
  },
  {
    id: 6,
    columnId: "done",
    title: "Установка плит под фундамент 2",
    content: "Содержимое карточки",
  },
];

const columns = [
  {
    id: "order",
    name: "Наряды",
    icon: "⭕️",
    color: "#EB5A46",
  },
  {
    id: "progress",
    name: "В работе",
    icon: "🔆️",
    color: "#00C2E0",
  },
  {
    id: "review",
    name: "Приёмка",
    icon: "📝",
    color: "#C377E0",
  },
  {
    id: "done",
    name: "Завершено",
    icon: "✅",
    color: "#3981DE",
  },
];

export { data, columns };
