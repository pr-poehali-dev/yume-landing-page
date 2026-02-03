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
    name: `Обручальное кольцо YouMe ${i + 1}`,
    price: '45 000 ₽',
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg'
  }));

  const engagementRings = Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Помолвочное кольцо YouMe ${i + 1}`,
    price: '85 000 ₽',
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg'
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between max-w-[1400px]">
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:opacity-70 transition-opacity p-2">
                <Icon name="Menu" size={24} className="text-foreground/60" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex flex-col h-full">
                <div className="font-accent text-3xl text-foreground/90 mb-8 mt-4">YouMe</div>
                <nav className="flex-1 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-3 px-2 rounded-md text-sm hover:bg-accent transition-colors text-foreground/70 hover:text-foreground"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <div className="border-t border-border pt-6 space-y-3">
                  <a href="tel:+79771016661" className="block text-base font-medium text-foreground/80">
                    +7 977 101 66 61
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="hover:opacity-70 transition-opacity text-foreground/60">
                      <Icon name="Send" size={20} />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity text-foreground/60">
                      <Icon name="MessageCircle" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="font-accent text-xl md:text-2xl text-foreground/80 tracking-wide">YouMe</div>

          <div className="flex items-center gap-3 md:gap-5">
            <button className="hover:opacity-70 transition-opacity text-foreground/60">
              <Icon name="Heart" size={22} />
            </button>
            <button className="hover:opacity-70 transition-opacity flex items-center gap-2 text-foreground/60">
              <Icon name="ShoppingCart" size={22} />
              <span className="hidden md:inline text-sm">0.00 ₽</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[70vh] md:h-[85vh] overflow-hidden hero-gradient pt-16">
          <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/64b80758-1e36-42a3-a8fc-5c12bc33363d.jpg')] bg-cover bg-center opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group">
              <Icon name="Play" size={40} className="text-white/90 ml-1 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-[1100px]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="group cursor-pointer flex items-center gap-6 hover:opacity-80 transition-opacity">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg"
                    alt="Кольца для помолвки"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="font-accent text-2xl md:text-3xl text-primary uppercase tracking-wide">
                  КОЛЬЦА ДЛЯ ПОМОЛОВКИ
                </h2>
              </div>

              <div className="group cursor-pointer flex items-center gap-6 hover:opacity-80 transition-opacity">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg"
                    alt="Обручальные кольца"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="font-accent text-2xl md:text-3xl text-primary uppercase tracking-wide">
                  ОБРУЧАЛЬНЫЕ КОЛЬЦА
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-foreground/80">Топ 10 колец для помолвки</h3>
            
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
                {engagementRings.map((ring, idx) => (
                  <div 
                    key={ring.id} 
                    className="flex-shrink-0 w-48 md:w-56 snap-start"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="bg-white rounded-lg overflow-hidden mb-3 card-hover shadow-sm">
                        <div className="aspect-square p-4">
                          <img 
                            src={ring.image}
                            alt={ring.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Heart" 
                          size={16} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/80 mb-1">{ring.name}</p>
                  </div>
                ))}
                
                <div className="flex-shrink-0 w-48 md:w-56 flex items-center justify-center snap-start">
                  <button className="h-full min-h-[200px] w-full rounded-lg border border-dashed border-muted-foreground/30 hover:border-primary hover:bg-accent/30 transition-all flex flex-col items-center justify-center gap-3">
                    <Icon name="ArrowRight" size={28} className="text-primary" />
                    <span className="text-sm text-foreground/70">Перейти в каталог</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-foreground/80">Топ 10 обручальных колец</h3>
            
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide snap-x snap-mandatory">
                {weddingRings.map((ring, idx) => (
                  <div 
                    key={ring.id} 
                    className="flex-shrink-0 w-48 md:w-56 snap-start"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="bg-card rounded-lg overflow-hidden mb-3 card-hover shadow-sm">
                        <div className="aspect-square p-4">
                          <img 
                            src={ring.image}
                            alt={ring.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Heart" 
                          size={16} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/80 mb-1">{ring.name}</p>
                  </div>
                ))}
                
                <div className="flex-shrink-0 w-48 md:w-56 flex items-center justify-center snap-start">
                  <button className="h-full min-h-[200px] w-full rounded-lg border border-dashed border-muted-foreground/30 hover:border-primary hover:bg-accent/30 transition-all flex flex-col items-center justify-center gap-3">
                    <Icon name="ArrowRight" size={28} className="text-primary" />
                    <span className="text-sm text-foreground/70">Перейти в каталог</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <h4 className="font-medium mb-4 text-foreground/80 text-sm">Каталог и услуги</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Обручальные кольца</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для помолвки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Индивидуальный дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гравировка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-foreground/80 text-sm">Покупателям</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Как заказать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Полезно знать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-foreground/80 text-sm">О компании</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О студии YouMe</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Философия брэнда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-foreground/80 text-sm">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="tel:+79771016661" className="hover:text-primary transition-colors">+7 977 101 66 61</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Написать в телеграм</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Позвоните мне</a></li>
                <li className="flex gap-3 pt-1">
                  <a href="#" className="hover:opacity-70 transition-opacity text-foreground/50">
                    <Icon name="Send" size={18} />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity text-foreground/50">
                    <Icon name="MessageCircle" size={18} />
                  </a>
                </li>
                <li className="pt-2 text-xs leading-relaxed text-muted-foreground/80">
                  г. Москва, Холодильный переулок<br/>
                  д.3, корп.1, стр.2
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
            <div className="text-muted-foreground/70">© 2026 YouMe®  Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
