import GameCard from "./GameCard";

const games = [
  {
    title: "Космические войны",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&h=300&fit=crop",
    rating: 4.8,
    category: "Аркада",
    players: "1.2K",
  },
  {
    title: "Магический квест",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
    rating: 4.6,
    category: "RPG",
    players: "856",
  },
  {
    title: "Гонки по городу",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    rating: 4.7,
    category: "Гонки",
    players: "2.1K",
  },
  {
    title: "Головоломка 3D",
    image:
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
    rating: 4.5,
    category: "Головоломка",
    players: "634",
  },
  {
    title: "Футбольный менеджер",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    rating: 4.9,
    category: "Спорт",
    players: "3.4K",
  },
  {
    title: "Пиксельный мир",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    rating: 4.4,
    category: "Аркада",
    players: "987",
  },
  {
    title: "Стратегия королевств",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    rating: 4.6,
    category: "Стратегия",
    players: "1.7K",
  },
  {
    title: "Космический симулятор",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    rating: 4.8,
    category: "Симулятор",
    players: "1.1K",
  },
];

const GameGrid = () => {
  return (
    <div className="flex-1">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Популярные игры
        </h2>
        <p className="text-gray-600">Самые играемые игры этой недели</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
