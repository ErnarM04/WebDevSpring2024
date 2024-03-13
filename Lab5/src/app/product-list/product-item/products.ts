export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  likeCount: number;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 13',
    price: 290000,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    rating: 5,
    category: 'Phones',
    likeCount: 100
  },
  {
    id: 2,
    name: 'IPhone 14',
    price: 325000,
    description: 'Дисплей iPhone 14 имеет закругленные углы, которые повторяют красивый изогнутый дизайн, и эти углы находятся в пределах стандартного прямоугольника. При измерении стандартной прямоугольной формы экран имеет размер 6,06 дюйма по диагонали (фактическая площадь обзора меньше).',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    rating: 5,
    category: 'Phones',
    likeCount: 100
  },
  {
    id: 3,
    name: 'IPhone 15 Pro Max',
    price: 620000,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    rating: 5,
    category: 'Phones',
    likeCount: 100
  },
  {
    id: 4,
    name: 'IPhone 15',
    price: 374000,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    rating: 5,
    category: 'Phones',
    likeCount: 100
  },
  {
    id: 5,
    name: 'Samsung Galaxy A54',
    price: 169000,
    description: 'С ёмким аккумулятором 5000 мАч (типичное значение) у вас хватит времени на то, что по-настоящему важно. Искусственный интеллект оптимизирует энергопотребление для увеличения продолжительности работы, а супербыстрая**** зарядка поможет быстро зарядить устройство. ',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000',
    rating: 5,
    category: 'Phones',
    likeCount: 100
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13',
    price: 408990,
    description: 'Маленький чип. Грандиозный прорыв\n' +
      'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likeCount: 100
  },
  {
    id: 7,
    name: 'Chuwi HeroBook Pro 14.1',
    price: 119990,
    description: 'Диагональ экрана: 14.1 дюйм\n' +
      'Процессор: Intel Celeron N4020\n' +
      'Видеокарта: Intel UHD Graphics 600\n' +
      'Размер оперативной памяти: 8.0 Гб\n' +
      'Тип жесткого диска: SSD\n' +
      'Общий объем накопителей: 256.0 Гб',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/hed/64321380974622.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000',
    rating: 4.5,
    category: 'Laptops',
    likeCount: 100
  },
  {
    id: 8,
    name: 'ASUS Vivobook 16 X1605ZA',
    price: 259990,
    description: 'Диагональ экрана: 16.0 дюйм\n' +
      'Процессор: Intel Core i5-12500H\n' +
      'Видеокарта: Intel Iris Xe Graphics\n' +
      'Размер оперативной памяти: 8.0 Гб\n' +
      'Тип жесткого диска: SSD\n' +
      'Общий объем накопителей: 512.0 Гб',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likeCount: 100
  },
  {
    id: 9,
    name: 'ASUS TUF Gaming F15',
    price: 428989,
    description: 'Ноутбук TUF Gaming F15, работающий на базе операционной системы Windows 10 Pro, представляет собой особо надежную геймерскую платформу, которая поможет вам добиться победы в любой игре. В его аппаратную конфигурацию могут входить процессор Intel Core i7 десятого поколения и видеокарта GeForce GTX 1660 Ti, которые гарантируют высокую скорость и плавное изображение на IPS-дисплее с частотой обновления до 144 Гц. Несмотря на более компактный корпус по сравнению с предыдущими моделями серии, TUF Gaming F15 наделен аккумулятором увеличенной емкости (90 Вт·ч), что означает длительное время автономной работы.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likeCount: 100
  },
  {
    id: 10,
    name: 'Apple MacBook Air 13',
    price: 407739,
    description: '13-дюймовый MacBook Air 2020 года с процессором M1 с момента выхода стал сенсацией. Невероятно тонкий (всего 41 мм в самом тонком месте) и лёгкий (1,29 кг), он работает совершенно бесшумно, а для зарядки компьютера достаточно адаптер мощностью 30 Вт. Переход Apple на собственные процессоры стал, без преувеличения, одной из главных сенсаций 2020 года. Первыми серийными компьютерами, стали MacBook Pro, MacBook Air и Mac mini, представленные осенью 2020.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000',
    rating: 5,
    category: 'Laptops',
    likeCount: 100
  },
  {
    id: 11,
    name: 'KompTrust Comfort Game RTX',
    price: 305451,
    description: 'Полный игровой комплект KompTrust Comfort Game RTX построенный на базе процессора Intel® Core™ I5 10400f и видеокарты RTX 2060 SUPER, который справится с любыми соревновательными играми! Видеокарта: NVIDIA GeForce RTX 2060 SUPER | Процессор: Intel® Core™ I5 10400f | Материнская плата: Gigabyte H410 ',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/he3/he1/81461966143518.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/komptrust-comfort-game-rtx-chernyi-111077990/?c=750000000',
    rating: 5,
    category: 'PCs',
    likeCount: 100
  },
  {
    id: 12,
    name: 'PIXEL 13',
    price: 300000,
    description: 'Установленная ОС: Win 10\n' +
      'Процессор: Intel Core i5-10400F\n' +
      'Размер оперативной памяти: 16.0 Гб\n' +
      'Объем SSD: 512.0 Гб\n' +
      'Видеопроцессор: NVIDIA GeForce RTX 3060\n' +
      'Форм-фактор корпуса: Midi-Tower',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000',
    rating: 5,
    category: 'PCs',
    likeCount: 100
  },
  {
    id: 13,
    name: 'KompTrust Pro game',
    price: 251865,
    description: 'Установленная ОС: Win 11 Pro\n' +
      'Процессор: Intel Core i5 10400f\n' +
      'Размер оперативной памяти: 32.0 Гб\n' +
      'Объем SSD: 512.0 Гб\n' +
      'Видеопроцессор: NVIDIA GeForce GTX 1660 Super\n' +
      'Форм-фактор корпуса: Micro-Tower',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h34/81178097844254.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000',
    rating: 5,
    category: 'PCs',
    likeCount: 100
  },
  {
    id: 14,
    name: 'Empire Computers Gaming PRO 61',
    price: 352986,
    description: 'Установленная ОС: Win 10\n' +
      'Процессор: Intel Core i5 12400F\n' +
      'Размер оперативной памяти: 16.0 Гб\n' +
      'Объем SSD: 512.0 Гб\n' +
      'Видеопроцессор: NVIDIA GeForce RTX 3060 Ti\n' +
      'Форм-фактор корпуса: Midi-Tower',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h5f/67193131040798.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/empire-computers-gaming-pro-61-chernyi-108176506/?c=750000000',
    rating: 5,
    category: 'PCs',
    likeCount: 100
  },
  {
    id: 15,
    name: 'Wintek Arrow',
    price: 164664,
    description: 'ПК Wintek Arrow представлен в форм-факторе Mid-Tower и имеет классическую черную расцветку корпуса. Лаконичный дизайн и оптимальная производительность делают данную модель подходящей для любого геймера. Процессор в компьютере представлен 4-ядерной моделью Intel Core i5 7400 с трехуровневым кэшем и тактовой частотой 3000 МГц. Для быстродействия при работе в многозадачном режиме имеется 8 ГБ оперативной памяти.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hd1/63945680158750.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/wintek-arrow-chernyi-100723795/?c=750000000',
    rating: 5,
    category: 'PCs',
    likeCount: 100
  },
  {
    id: 16,
    name: 'Sony PlayStation 5',
    price: 247892,
    description: 'С Sony PlayStation 5 вы ощутите истинную силу игры\n' +
      'Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000',
    rating: 5,
    category: 'Consoles',
    likeCount: 100
  },
  {
    id: 17,
    name: 'Sony PlayStation5 Slim',
    price: 260524,
    description: 'С Sony PlayStation 5 вы ощутите истинную силу игры\n' +
      'Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    rating: 5,
    category: 'Consoles',
    likeCount: 100
  },
  {
    id: 18,
    name: 'Xbox Series X',
    price: 249990,
    description: 'Игры, созданные с использованием набора для разработки Xbox Series X|S, демонстрируют значительное сокращение времени загрузки и потрясающие визуальные эффекты с частотой до 120 кадров в секунду.\n' +
      'С помощью Smart Delivery вы можете купить поддерживаемую игру один раз, после чего вам всегда будет доступна ее лучшая версия для любой консоли, на которой вы играете.',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000',
    rating: 5,
    category: 'Consoles',
    likeCount: 100
  },
  {
    id: 19,
    name: 'Valve Steam Deck',
    price: 355000,
    description: 'Тип: портативная\n' +
      'Объем SSD: 512.0 Гб\n' +
      'Поддержка UHD (4K): Да\n' +
      'Тип носителя для игр: micro SD',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h24/84616717107230.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000',
    rating: 5,
    category: 'Consoles',
    likeCount: 100
  },
  {
    id: 20,
    name: 'Nintendo Switch OLED',
    price: 151987,
    description: 'NINTENDO ПРЕДСТАВЛЯЕТ КОНСОЛЬ NINTENDO SWITCH (OLED-МОДЕЛЬ) С КРАСОЧНЫМ 7-ДЮЙМОВЫМ OLED-ЭКРАНОМ! При практически одинаковых размерах с Nintendo Switch консоль Nintendo Switch (OLED-модель) отличается более крупным 7-дюймовым OLED-экраном с глубокими цветами и высоким контрастом. Nintendo Switch (OLED-модель) также включает широкую регулируемую опору для настольного режима, новую док-станцию с портом LAN для стабильной игры онлайн, 64 ГБ внутренней памяти и встроенные динамики с улучшенным звуком для настольного и портативного режимов. Как и в случае с Nintendo Switch, консоль Nintendo Switch (OLED-модель) позволяет играть на ТВ, а также делиться отделяемыми контроллерами Joy-Con для совместной игры. ',
    photo: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-krasnyi-sinii-102984631/?c=750000000',
    rating: 151987,
    category: 'Consoles',
    likeCount: 100
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
