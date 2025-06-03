import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  image: string;
  rating: number;
  category: string;
  players: string;
}

const GameCard = ({
  title,
  image,
  rating,
  category,
  players,
}: GameCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {category}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Icon
                name="Star"
                size={14}
                className="text-yellow-400 fill-current"
              />
              <span>{rating}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{players}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
