import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Игры</span>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск игр..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Популярные
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Новые
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Категории
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
