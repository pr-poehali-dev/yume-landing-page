import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const menuItems = [
    'Примеры работ',
    'Индивидуальный дизайн',
    'Часто задаваемые вопросы',
    'Философия брэнда',
    'Производство',
    'База знаний',
    'Гарантия',
    'Контакты',
    'Отзывы',
    'О нас'
  ];

  const weddingRings = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Обручальное кольцо ${i + 1}`,
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg'
  }));

  const engagementRings = Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Кольцо для помолвки ${i + 1}`,
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg'
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:opacity-70 transition-opacity">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 animate-slide-in-left">
              <div className="flex flex-col h-full">
                <div className="font-accent text-3xl mb-8 mt-4">YouMe</div>
                <nav className="flex-1 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-3 px-2 rounded-lg hover:bg-accent transition-colors text-foreground/80 hover:text-foreground"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <div className="border-t border-border pt-6 space-y-3">
                  <a href="tel:+79771016661" className="block text-lg font-medium">
                    +7 977 101 66 61
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <Icon name="Send" size={20} />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <Icon name="MessageCircle" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="font-accent text-2xl md:text-3xl">YouMe</div>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="Search" size={20} />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="ShoppingCart" size={20} />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="Heart" size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="h-[60vh] md:h-[70vh] bg-gradient-to-b from-accent/20 to-background flex items-center justify-center">
          <div className="text-center px-4 animate-fade-in">
            <h1 className="font-accent text-4xl md:text-6xl mb-4 text-foreground">
              Чувство как ценность
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Украшения, которые говорят не о нас, а о вас
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer h-80 md:h-96">
              <img 
                src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg"
                alt="Обручальные кольца"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <h2 className="font-accent text-3xl md:text-4xl text-white">
                  Обручальные кольца
                </h2>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer h-80 md:h-96">
              <img 
                src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg"
                alt="Кольца для помолвки"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <h2 className="font-accent text-3xl md:text-4xl text-white">
                  Кольца для помолвки
                </h2>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-accent text-2xl md:text-3xl">Топ 10 обручальных колец</h3>
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
            <div className="relative overflow-x-auto pb-4">
              <div className="flex gap-4 md:gap-6">
                {weddingRings.map((ring) => (
                  <div key={ring.id} className="flex-shrink-0 w-48 md:w-56 animate-scale-in">
                    <div className="relative group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-card mb-3 hover-lift">
                        <img 
                          src={ring.image}
                          alt={ring.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                      >
                        <Icon 
                          name="Heart" 
                          size={18} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/80">{ring.name}</p>
                  </div>
                ))}
                <div className="flex-shrink-0 w-48 md:w-56 flex items-center justify-center">
                  <Button variant="outline" className="h-full min-h-[200px] w-full rounded-xl border-2 border-dashed hover:border-primary hover:bg-accent/50 transition-all">
                    <div className="text-center">
                      <Icon name="Grid3x3" size={32} className="mx-auto mb-2 text-muted-foreground" />
                      <span className="text-sm">См. все кольца<br/>в каталоге</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-accent text-2xl md:text-3xl">Топ 10 колец для помолвки</h3>
              <Button variant="ghost" className="hidden md:flex items-center gap-2">
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
            <div className="relative overflow-x-auto pb-4">
              <div className="flex gap-4 md:gap-6">
                {engagementRings.map((ring) => (
                  <div key={ring.id} className="flex-shrink-0 w-48 md:w-56 animate-scale-in">
                    <div className="relative group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-card mb-3 hover-lift">
                        <img 
                          src={ring.image}
                          alt={ring.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                      >
                        <Icon 
                          name="Heart" 
                          size={18} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/80">{ring.name}</p>
                  </div>
                ))}
                <div className="flex-shrink-0 w-48 md:w-56 flex items-center justify-center">
                  <Button variant="outline" className="h-full min-h-[200px] w-full rounded-xl border-2 border-dashed hover:border-primary hover:bg-accent/50 transition-all">
                    <div className="text-center">
                      <Icon name="Grid3x3" size={32} className="mx-auto mb-2 text-muted-foreground" />
                      <span className="text-sm">См. все кольца<br/>в каталоге</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Каталог и услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Обручальные кольца</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Для помолвки</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Индивидуальный дизайн</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гравировка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Как заказать</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Полезно знать</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О студии YouMe</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Философия брэнда</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="tel:+79771016661" className="hover:text-foreground transition-colors">+7 977 101 66 61</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Написать в телеграм</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Позвоните мне</a></li>
                <li className="flex gap-3 pt-2">
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <Icon name="Send" size={18} />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <Icon name="MessageCircle" size={18} />
                  </a>
                </li>
                <li className="pt-2 text-xs">
                  г. Москва, Холодильный переулок<br/>
                  д.3, корп.1, стр.2
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-foreground transition-colors">Пользовательское соглашение</a>
            </div>
            <div>© 2026 YouMe® Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
