import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { useForm } from 'react-hook-form';

interface RSVPFormData {
  name: string;
  email: string;
  attendance: 'yes' | 'no' | '';
  guests: number;
  dietary: string;
}

interface WishFormData {
  name: string;
  message: string;
}

export default function Index() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [wishes, setWishes] = useState<WishFormData[]>([]);

  const rsvpForm = useForm<RSVPFormData>({
    defaultValues: {
      name: '',
      email: '',
      attendance: '',
      guests: 1,
      dietary: ''
    }
  });

  const wishForm = useForm<WishFormData>({
    defaultValues: {
      name: '',
      message: ''
    }
  });

  const onRsvpSubmit = (data: RSVPFormData) => {
    console.log('RSVP:', data);
    setRsvpSubmitted(true);
  };

  const onWishSubmit = (data: WishFormData) => {
    setWishes([...wishes, data]);
    wishForm.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-cream via-wedding-beige to-wedding-ivory">
      {/* Hero Section */}
      <section className="wedding-hero min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/5486cc59-7c59-4d39-b7b3-d6647ba6c7e8.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-light tracking-wider">
                Владислав
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 h-px bg-white/50"></div>
                <Icon name="Heart" size={32} className="text-white/80" />
                <div className="w-16 h-px bg-white/50"></div>
              </div>
              <h1 className="text-7xl md:text-9xl font-light tracking-wider">
                Надежда
              </h1>
            </div>
            
            <div className="space-y-4">
              <div className="text-xl md:text-2xl font-light tracking-wide elegant-text text-white/90">
                приглашают вас разделить радость
              </div>
              <div className="text-3xl md:text-4xl font-medium tracking-wider">
                15 августа 2024
              </div>
              <div className="text-lg md:text-xl font-light tracking-wide elegant-text text-white/80">
                в день, когда два сердца станут одним
              </div>
            </div>

            <Button 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg font-light tracking-wide"
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Программа торжества
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding Program */}
      <section id="program" className="wedding-section bg-wedding-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
              Программа дня
            </h2>
            <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest flex items-center gap-3">
                  <Icon name="Church" size={24} />
                  Церемония
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="text-wedding-sage" />
                  <span className="text-lg">14:00 - 15:00</span>
                </div>
                <p className="elegant-text text-base leading-relaxed">
                  Торжественная церемония бракосочетания в окружении самых близких людей. 
                  Момент, когда мы скажем друг другу "Да" навсегда.
                </p>
              </CardContent>
            </Card>

            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest flex items-center gap-3">
                  <Icon name="Camera" size={24} />
                  Фотосессия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="text-wedding-sage" />
                  <span className="text-lg">15:00 - 16:30</span>
                </div>
                <p className="elegant-text text-base leading-relaxed">
                  Запечатлеем самые важные моменты этого дня. Групповые и индивидуальные 
                  фотографии в живописных локациях.
                </p>
              </CardContent>
            </Card>

            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest flex items-center gap-3">
                  <Icon name="Utensils" size={24} />
                  Банкет
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="text-wedding-sage" />
                  <span className="text-lg">17:00 - 23:00</span>
                </div>
                <p className="elegant-text text-base leading-relaxed">
                  Праздничный ужин с изысканными блюдами, тостами и незабываемой атмосферой. 
                  Время для душевных разговоров и веселья.
                </p>
              </CardContent>
            </Card>

            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest flex items-center gap-3">
                  <Icon name="Music" size={24} />
                  Танцы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="text-wedding-sage" />
                  <span className="text-lg">20:00 - 02:00</span>
                </div>
                <p className="elegant-text text-base leading-relaxed">
                  Танцевальная программа с живой музыкой и DJ. Первый танец молодоженов 
                  и зажигательная вечеринка до утра.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="wedding-section bg-wedding-beige">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
              Подтверждение присутствия
            </h2>
            <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full mb-6"></div>
            <p className="elegant-text text-lg text-wedding-forest/80">
              Пожалуйста, подтвердите ваше присутствие до 1 августа
            </p>
          </div>

          <Card className="wedding-card">
            {!rsvpSubmitted ? (
              <Form {...rsvpForm}>
                <form onSubmit={rsvpForm.handleSubmit(onRsvpSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={rsvpForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wedding-forest">Ваше имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Имя Фамилия" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={rsvpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wedding-forest">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={rsvpForm.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-wedding-forest">Буду присутствовать</FormLabel>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant={field.value === 'yes' ? 'default' : 'outline'}
                            onClick={() => field.onChange('yes')}
                            className="flex-1"
                          >
                            Да, приду
                          </Button>
                          <Button
                            type="button"
                            variant={field.value === 'no' ? 'default' : 'outline'}
                            onClick={() => field.onChange('no')}
                            className="flex-1"
                          >
                            К сожалению, не смогу
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {rsvpForm.watch('attendance') === 'yes' && (
                    <>
                      <FormField
                        control={rsvpForm.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-wedding-forest">Количество гостей</FormLabel>
                            <FormControl>
                              <Input type="number" min="1" max="4" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={rsvpForm.control}
                        name="dietary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-wedding-forest">Особенности питания</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Вегетарианство, аллергии и другие пожелания..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  <Button type="submit" className="w-full bg-wedding-sage hover:bg-wedding-forest text-white">
                    Отправить подтверждение
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="text-wedding-sage mx-auto mb-4" />
                <h3 className="text-2xl font-medium text-wedding-forest mb-2">Спасибо!</h3>
                <p className="elegant-text text-wedding-forest/80">
                  Ваше подтверждение получено. Ждем вас на нашем празднике!
                </p>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Venue Information */}
      <section className="wedding-section bg-wedding-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
              Место проведения
            </h2>
            <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  Ресторан "Лесная сказка"
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="elegant-text text-base">
                  ул. Парковая, 15<br />
                  г. Москва, 123456
                </p>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={18} className="text-wedding-sage" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Car" size={18} className="text-wedding-sage" />
                    <span>Парковка для гостей</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Train" size={18} className="text-wedding-sage" />
                    <span>5 минут от м. Парк культуры</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>

            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest">
                  Карта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="bg-cover bg-center bg-no-repeat rounded-lg h-64 flex items-center justify-center relative"
                  style={{
                    backgroundImage: 'url(/img/3cb8c50b-a0b6-4386-ba8c-61d6ba939710.jpg)'
                  }}
                >
                  <div className="absolute inset-0 bg-wedding-forest/20 rounded-lg"></div>
                  <div className="relative z-10 text-center text-white">
                    <Icon name="Map" size={48} className="mx-auto mb-2" />
                    <p className="elegant-text">Интерактивная карта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift Information */}
      <section className="wedding-section bg-wedding-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
            Список желаний
          </h2>
          <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full mb-8"></div>

          <Card className="wedding-card">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div 
                    className="w-24 h-24 mx-auto mb-4 bg-cover bg-center bg-no-repeat rounded-full"
                    style={{
                      backgroundImage: 'url(/img/ef4c0ca3-c501-4636-9e62-cbd16171c542.jpg)'
                    }}
                  ></div>
                  <h3 className="text-2xl font-medium text-wedding-forest mb-4">
                    Ваше присутствие - лучший подарок!
                  </h3>
                  <p className="elegant-text text-lg text-wedding-forest/80 leading-relaxed">
                    Но если вы все же хотите порадовать нас подарком, мы будем благодарны за любую помощь 
                    в создании нашего семейного гнездышка или незабываемого свадебного путешествия.
                  </p>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="text-xl font-medium text-wedding-forest mb-3">
                      Для дома
                    </h4>
                    <div className="space-y-2 text-sm elegant-text">
                      <p>• Постельное белье премиум класса</p>
                      <p>• Кухонная техника</p>
                      <p>• Предметы декора</p>
                      <p>• Комнатные растения</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-medium text-wedding-forest mb-3">
                      Для путешествий
                    </h4>
                    <div className="space-y-2 text-sm elegant-text">
                      <p>• Чемоданы и сумки</p>
                      <p>• Аксессуары для фото</p>
                      <p>• Путеводители</p>
                      <p>• Сертификаты отелей</p>
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-wedding-sage hover:bg-wedding-forest text-white px-8">
                      Посмотреть полный список
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Список желаний</DialogTitle>
                      <DialogDescription>
                        Детальный список наших пожеланий
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Спасибо за желание порадовать нас! Мы создали подробный список на специальной платформе.
                      </p>
                      <Button className="w-full" onClick={() => window.open('https://example.com', '_blank')}>
                        Открыть список желаний
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="wedding-section bg-wedding-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
              Наша история
            </h2>
            <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full mb-6"></div>
            <p className="elegant-text text-lg text-wedding-forest/80">
              Моменты, которые привели нас к этому дню
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-wedding-sage/20 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-wedding-sage/30 to-wedding-forest/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon name="Image" size={32} className="text-white/60" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-wedding-sage text-wedding-forest hover:bg-wedding-sage hover:text-white">
              Посмотреть все фото
            </Button>
          </div>
        </div>
      </section>

      {/* Guest Wishes */}
      <section className="wedding-section bg-wedding-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light text-wedding-forest mb-4">
              Пожелания
            </h2>
            <div className="w-24 h-1 bg-wedding-sage mx-auto rounded-full mb-6"></div>
            <p className="elegant-text text-lg text-wedding-forest/80">
              Поделитесь своими теплыми словами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="wedding-card">
              <CardHeader>
                <CardTitle className="text-2xl text-wedding-forest">
                  Оставить пожелание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...wishForm}>
                  <form onSubmit={wishForm.handleSubmit(onWishSubmit)} className="space-y-4">
                    <FormField
                      control={wishForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wedding-forest">Ваше имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Имя" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={wishForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-wedding-forest">Пожелание</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ваши теплые слова и пожелания молодоженам..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-wedding-sage hover:bg-wedding-forest text-white">
                      Отправить пожелание
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-wedding-forest mb-4">
                Пожелания гостей
              </h3>
              
              {wishes.length === 0 ? (
                <Card className="wedding-card">
                  <CardContent className="pt-6 text-center">
                    <Icon name="Heart" size={32} className="text-wedding-sage mx-auto mb-2" />
                    <p className="elegant-text text-wedding-forest/60">
                      Станьте первым, кто оставит пожелание!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {wishes.map((wish, index) => (
                    <Card key={index} className="wedding-card">
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          <Icon name="Quote" size={18} className="text-wedding-sage mt-1 flex-shrink-0" />
                          <div>
                            <p className="elegant-text text-sm leading-relaxed mb-2">
                              {wish.message}
                            </p>
                            <Badge variant="secondary" className="text-xs">
                              {wish.name}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-forest text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-light mb-2">
                Владислав & Надежда
              </h3>
              <p className="elegant-text text-white/80 text-lg">
                15 августа 2024
              </p>
            </div>
            
            <div className="flex justify-center space-x-8 text-white/60">
              <Icon name="Heart" size={24} />
              <Icon name="Rings" size={24} />
              <Icon name="Heart" size={24} />
            </div>
            
            <div className="space-y-2 text-white/70">
              <p className="elegant-text text-sm">
                Создано с любовью для наших дорогих гостей
              </p>
              <p className="elegant-text text-xs">
                По всем вопросам: +7 (999) 123-45-67
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}