import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: "Smile",
      title: "Терапевтическая стоматология",
      description: "Лечение кариеса, пульпита, периодонтита с использованием современных материалов",
      price: "от 3 500 ₽"
    },
    {
      icon: "Sparkles",
      title: "Отбеливание зубов",
      description: "Профессиональное отбеливание системой ZOOM 4 для белоснежной улыбки",
      price: "от 15 000 ₽"
    },
    {
      icon: "Shield",
      title: "Имплантация",
      description: "Установка имплантов премиум-класса с пожизненной гарантией",
      price: "от 35 000 ₽"
    },
    {
      icon: "Gem",
      title: "Виниры и коронки",
      description: "Керамические виниры E-max для идеальной улыбки",
      price: "от 25 000 ₽"
    },
    {
      icon: "Heart",
      title: "Детская стоматология",
      description: "Безболезненное лечение зубов для детей в игровой форме",
      price: "от 2 500 ₽"
    },
    {
      icon: "Zap",
      title: "Ортодонтия",
      description: "Исправление прикуса брекетами и элайнерами",
      price: "от 80 000 ₽"
    }
  ];

  const offers = [
    {
      title: "Первичная консультация",
      discount: "БЕСПЛАТНО",
      description: "Осмотр, диагностика и план лечения",
      validUntil: "31 января 2026"
    },
    {
      title: "Профгигиена полости рта",
      discount: "-30%",
      oldPrice: "5 000 ₽",
      newPrice: "3 500 ₽",
      description: "Чистка Air Flow + полировка",
      validUntil: "15 января 2026"
    },
    {
      title: "Отбеливание ZOOM 4",
      discount: "-25%",
      oldPrice: "20 000 ₽",
      newPrice: "15 000 ₽",
      description: "Осветление до 8 тонов за 1 визит",
      validUntil: "31 января 2026"
    }
  ];

  const gallery = [
    {
      before: "https://cdn.poehali.dev/projects/26441696-e07f-4ddb-aaac-c00797814731/files/47fdf589-3e69-4ee4-a280-8101e1d237fc.jpg",
      title: "Отбеливание ZOOM 4"
    },
    {
      before: "https://cdn.poehali.dev/projects/26441696-e07f-4ddb-aaac-c00797814731/files/616c146a-8e8e-4249-81a0-fbf579d7d21e.jpg",
      title: "Установка виниров"
    },
    {
      before: "https://cdn.poehali.dev/projects/26441696-e07f-4ddb-aaac-c00797814731/files/ac128185-9a1e-44d5-a8d5-668fb0c556a0.jpg",
      title: "Комплексная имплантация"
    }
  ];

  const prices = [
    { service: "Консультация стоматолога", price: "Бесплатно" },
    { service: "Лечение кариеса (световая пломба)", price: "3 500 - 5 500 ₽" },
    { service: "Лечение пульпита (1 канал)", price: "5 000 - 7 000 ₽" },
    { service: "Профессиональная чистка зубов", price: "3 500 ₽" },
    { service: "Отбеливание ZOOM 4", price: "15 000 ₽" },
    { service: "Керамический винир E-max", price: "25 000 ₽" },
    { service: "Имплант + коронка (под ключ)", price: "от 45 000 ₽" },
    { service: "Брекет-система (1 челюсть)", price: "от 80 000 ₽" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DentaLux
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О клинике</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Icon name="Phone" size={18} className="mr-2" />
            Записаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
                ⭐ Рейтинг 4.9 на основе 500+ отзывов
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Здоровая улыбка — 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> это просто</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Современная стоматология европейского уровня. Безболезненное лечение, передовые технологии и забота о каждом пациенте.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">специалистов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/26441696-e07f-4ddb-aaac-c00797814731/files/616c146a-8e8e-4249-81a0-fbf579d7d21e.jpg"
                alt="Dental Clinic"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-secondary to-primary text-white">
              🎁 Специальные предложения
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Акции и скидки</h2>
            <p className="text-muted-foreground">Выгодные предложения для новых и постоянных пациентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-secondary to-primary text-white px-6 py-2 rounded-bl-2xl font-bold text-xl">
                  {offer.discount}
                </div>
                <CardContent className="pt-16 pb-6">
                  <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  {offer.oldPrice && (
                    <div className="mb-2">
                      <span className="text-muted-foreground line-through mr-2">{offer.oldPrice}</span>
                      <span className="text-3xl font-bold text-primary">{offer.newPrice}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-muted-foreground mt-4">
                    <Icon name="Clock" size={16} className="mr-1" />
                    Действует до {offer.validUntil}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary">
                    Воспользоваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/26441696-e07f-4ddb-aaac-c00797814731/files/ac128185-9a1e-44d5-a8d5-668fb0c556a0.jpg"
                alt="Our Team"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary">О нас</Badge>
              <h2 className="text-4xl font-bold">Стоматология нового поколения</h2>
              <p className="text-muted-foreground text-lg">
                DentaLux — это современная клиника, где передовые технологии сочетаются с индивидуальным подходом к каждому пациенту.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Сертифицированные специалисты</h3>
                    <p className="text-sm text-muted-foreground">Врачи с опытом от 10 лет и международными сертификатами</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Microscope" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Современное оборудование</h3>
                    <p className="text-sm text-muted-foreground">Новейшее оборудование от ведущих мировых производителей</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="HeartHandshake" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Индивидуальный подход</h3>
                    <p className="text-sm text-muted-foreground">Персональный план лечения для каждого пациента</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр стоматологических услуг</h2>
            <p className="text-muted-foreground">От профилактики до сложных хирургических операций</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
                {activeService === index && (
                  <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Галерея работ</Badge>
            <h2 className="text-4xl font-bold mb-4">Результаты наших пациентов</h2>
            <p className="text-muted-foreground">Реальные истории преображения улыбок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative">
                  <img 
                    src={item.before}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-muted-foreground">Никаких скрытых платежей, все услуги по фиксированным ценам</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-0">
              <div className="divide-y">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{item.service}</span>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать полный прайс-лист
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Запишитесь на прием</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@dentalux.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Онлайн-запись</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Выберите услугу</option>
                      {services.map((s, i) => (
                        <option key={i}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <textarea 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={3}
                      placeholder="Дополнительная информация"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">DentaLux</span>
              </div>
              <p className="text-white/70">Стоматология европейского уровня в Москве</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Терапия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Имплантация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ортодонтия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отбеливание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Врачи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© 2026 DentaLux. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
