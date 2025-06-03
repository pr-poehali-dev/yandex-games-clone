import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const categories = [
  { name: "Аркады", icon: "Zap", count: 150 },
  { name: "Головоломки", icon: "Brain", count: 85 },
  { name: "Стратегии", icon: "Target", count: 42 },
  { name: "Спорт", icon: "Trophy", count: 38 },
  { name: "Гонки", icon: "Car", count: 29 },
  { name: "RPG", icon: "Sword", count: 21 },
];

const CategorySidebar = () => {
  return (
    <div className="w-64 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Категории</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className="w-full justify-between hover:bg-blue-50 hover:text-blue-600"
            >
              <div className="flex items-center space-x-2">
                <Icon name={category.icon as any} size={16} />
                <span>{category.name}</span>
              </div>
              <span className="text-xs text-gray-500">{category.count}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Популярные теги</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Мультиплеер",
              "2D",
              "3D",
              "Пиксель-арт",
              "Казуальные",
              "Хардкор",
            ].map((tag) => (
              <Button key={tag} variant="outline" size="sm" className="text-xs">
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategorySidebar;
