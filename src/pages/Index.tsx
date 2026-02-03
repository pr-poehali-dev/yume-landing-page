import { useState } from 'react';
import Icon from '@/components/ui/icon';
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
    name: `Обручальное кольцо YouMe ${245 + i}`,
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg'
  }));

  const engagementRings = Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Помолвочное кольцо YouMe ${116 + i}`,
    image: 'https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg'
  }));

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between max-w-[1400px]">
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:text-primary transition-colors p-2">
                <Icon name="Menu" size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-card/95 backdrop-blur-xl border-r border-primary/20">
              <div className="flex flex-col h-full">
                <div className="font-accent text-3xl text-primary glow-text mb-8 mt-4">YouMe</div>
                <nav className="flex-1 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-3 px-3 rounded-lg text-sm hover:bg-primary/10 transition-all text-foreground/70 hover:text-primary border border-transparent hover:border-primary/20"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <div className="border-t border-primary/20 pt-6 space-y-4">
                  <a href="tel:+79771016661" className="block text-base font-medium text-primary">
                    +7 977 101 66 61
                  </a>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors">
                      <Icon name="Send" size={20} />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="font-accent text-2xl md:text-3xl text-primary glow-text">YouMe</div>

          <div className="flex items-center gap-4 md:gap-5">
            <button className="hover:text-primary transition-colors">
              <Icon name="Heart" size={22} />
            </button>
            <button className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="ShoppingCart" size={22} />
              <span className="hidden md:inline text-sm">0.00 ₽</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-[90vh] overflow-hidden ocean-gradient">
          <div className="water-surface absolute inset-0"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4 max-w-4xl">
              <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl mb-6 text-primary glow-text float-animation">
                Чувство как ценность
              </h1>
              <p className="text-foreground/80 text-lg md:text-2xl font-elegant mb-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
                Украшения, которые говорят не о нас, а о вас
              </p>
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-all mx-auto ripple-effect border border-primary/40 shimmer-overlay"
              >
                <Icon name="Play" size={36} className="text-primary ml-1" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        <section className="bg-background py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 wave-line"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div 
                className="group cursor-pointer flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-6 flex items-center justify-center shimmer-overlay">
                  <img 
                    src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/c51e78d8-2f53-4ae3-b82c-ea75eeb47e52.jpg"
                    alt="Кольца для помолвки"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
                <h2 className="font-accent text-3xl md:text-4xl text-primary mb-3 group-hover:glow-text transition-all">
                  КОЛЬЦА ДЛЯ ПОМОЛОВКИ
                </h2>
                <p className="text-muted-foreground font-elegant text-base">
                  Момент, застывший навечно
                </p>
              </div>

              <div 
                className="group cursor-pointer flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 p-6 flex items-center justify-center shimmer-overlay">
                  <img 
                    src="https://cdn.poehali.dev/projects/6c5eb5e5-c0d3-496e-8d46-c23a5327458c/files/a428c69f-0dc8-4f58-a30f-a46d35b4c6ab.jpg"
                    alt="Обручальные кольца"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
                <h2 className="font-accent text-3xl md:text-4xl text-primary mb-3 group-hover:glow-text transition-all">
                  ОБРУЧАЛЬНЫЕ КОЛЬЦА
                </h2>
                <p className="text-muted-foreground font-elegant text-base">
                  Символ вечного единства
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/30 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-accent text-2xl md:text-3xl text-foreground">Топ 10 колец для помолвки</h3>
              <button className="text-primary hover:text-accent transition-colors flex items-center gap-2 group">
                <span className="hidden md:inline font-elegant">Перейти в каталог</span>
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
                {engagementRings.map((ring, idx) => (
                  <div 
                    key={ring.id} 
                    className="flex-shrink-0 w-56 md:w-64 fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="glass-card rounded-2xl overflow-hidden p-6 aspect-square flex items-center justify-center">
                        <img 
                          src={ring.image}
                          alt={ring.name}
                          className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/30 hover:scale-110"
                      >
                        <Icon 
                          name="Heart" 
                          size={18} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/90 mt-4 font-elegant text-center">{ring.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === 0 ? 'bg-primary w-8' : 'bg-primary/30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 wave-line"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-accent text-2xl md:text-3xl text-foreground">Топ 10 обручальных колец</h3>
              <button className="text-primary hover:text-accent transition-colors flex items-center gap-2 group">
                <span className="hidden md:inline font-elegant">Перейти в каталог</span>
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
                {weddingRings.map((ring, idx) => (
                  <div 
                    key={ring.id} 
                    className="flex-shrink-0 w-56 md:w-64 fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="glass-card rounded-2xl overflow-hidden p-6 aspect-square flex items-center justify-center">
                        <img 
                          src={ring.image}
                          alt={ring.name}
                          className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <button 
                        onClick={() => toggleFavorite(ring.id)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/30 hover:scale-110"
                      >
                        <Icon 
                          name="Heart" 
                          size={18} 
                          className={favorites.includes(ring.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}
                        />
                      </button>
                    </div>
                    <p className="text-sm text-foreground/90 mt-4 font-elegant text-center">{ring.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === 0 ? 'bg-primary w-8' : 'bg-primary/30'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card/50 backdrop-blur-xl border-t border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
            <div>
              <h4 className="font-accent text-primary mb-5 text-base">Каталог и услуги</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-elegant">
                <li><a href="#" className="hover:text-primary transition-colors">Обручальные кольца</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Для помолвки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Индивидуальный дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гравировка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-accent text-primary mb-5 text-base">Покупателям</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-elegant">
                <li><a href="#" className="hover:text-primary transition-colors">Как заказать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Частые вопросы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Полезно знать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-accent text-primary mb-5 text-base">О компании</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-elegant">
                <li><a href="#" className="hover:text-primary transition-colors">О студии YouMe</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Философия брэнда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-accent text-primary mb-5 text-base">Контакты</h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-elegant">
                <li><a href="tel:+79771016661" className="hover:text-primary transition-colors">+7 977 101 66 61</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Написать в телеграм</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Позвоните мне</a></li>
                <li className="flex gap-4 pt-2">
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Send" size={18} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="MessageCircle" size={18} />
                  </a>
                </li>
                <li className="pt-3 text-xs leading-relaxed opacity-70">
                  г. Москва, Холодильный переулок<br/>
                  д.3, корп.1, стр.2
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground/80 font-elegant">
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a>
            </div>
            <div>© 2026 YouMe® Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
