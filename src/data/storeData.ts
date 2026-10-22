export interface ProductItem {
  id: string;
  category: 'iluminacao' | 'materiais' | 'servicos';
  title: string;
  shortDesc: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description: string;
  originalWidth: number;
  originalHeight: number;
  aspectHint: string;
  googleMapsUrl: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FacilityGroup {
  category: string;
  title: string;
  iconName: string;
  items: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const STORE_INFO = {
  name: 'JKL Iluminação & Materiais Elétricos',
  shortName: 'JKL Iluminação',
  tagline: 'Loja de Iluminação',
  heroImpact: 'Iluminação decorativa e técnica | Materiais elétricos para sua obra ou reforma | Instalações e serviços elétricos',
  address: 'Av. Gov. Walter Jobim, 799 - Patronato, Santa Maria - RS, 97020-355',
  phoneFormatted: '(55) 3029-0070',
  phoneRaw: '555530290070',
  whatsappUrl: 'https://wa.me/555530290070',
  instagramUrl: 'https://www.instagram.com/jkliluminacao/',
  googleReviewsCount: 45,
  googleRating: 5.0,
  scheduleWeekday: 'Seg a Sex: 08:00–12:00 e 14:00–18:00',
  scheduleSaturday: 'Sábado: 08:00–12:00',
  scheduleSunday: 'Domingo: Fechado',
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    url: '/photos/gal-1.jpg',
    title: 'Showroom de Iluminação Decorativa & Lustres',
    description: 'Espaço com pendentes modernos, arandelas e iluminação em temperatura quente e neutra.',
    originalWidth: 4160,
    originalHeight: 3120,
    aspectHint: 'Paisagem (4:3)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhA4pnnDV81lkG39uLbEsWXI!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TsLN6m6TR-x-QTPSZbRq_ZRqTIpOaSd72G-t4iluLcVuytc5a8Fma3K_xca9fXLnDmHErJYxhdKHomxugJpxmTHGnXh6WESHRqB9Tzj-voMcgm_EbsF_VBQ-YjqwBqUS6RoSCYJJIS675I%3Dw203-h152-k-no!7i4160!8i3120!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-2',
    url: '/photos/gal-2.jpg',
    title: 'Painéis e Perfis de LED em Exposição',
    description: 'Mostruário ativo para conferir intensidade de lúmens, tonalidades de cor e acabamentos.',
    originalWidth: 2340,
    originalHeight: 4160,
    aspectHint: 'Retrato (9:16)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBABZ7qZcYmjphEIeIAzPG2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9TADTxfJXN2aAK0qDeO3sVoPcw1Hmy8wO8HIlufdMlBoc6_ur1BOtMsdvhrz30yC84PVlAhAcyAOC8DTQLKghQMc2E3vMMISLLTHXXqHSu0ApgdNORDru4UjroOpzek7s9t2Qv241kJG1RL%3Dw203-h360-k-no!7i2340!8i4160!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-3',
    url: '/photos/gal-3.jpg',
    title: 'Corredores de Materiais Elétricos & Proteção',
    description: 'Variedade em disjuntores, tomadas, interruptores modulares e cabos elétricos normatizados.',
    originalWidth: 2268,
    originalHeight: 4032,
    aspectHint: 'Retrato (9:16)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhDVSBf25HEXD-IZkLrY9-LW!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9Rv9ZZuIlzTqkb-ODLBw00itPrAAHisPyXrRSws-1r2y6o8RAdYQk7h-n1FQg5ODDARxiU954cVfSSp2B5vWBVvKo1UwWfmziRJXz688sWaFFXTalp_Puz6uK5dfeoQ43XtDrgnc4Ns8qM%3Dw203-h360-k-no!7i2268!8i4032!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-4',
    url: '/photos/gal-4.jpg',
    title: 'Ambiente de Atendimento Consultivo',
    description: 'Bancadas dedicadas para avaliação de projetos luminotécnicos e orçamentos de engenharia.',
    originalWidth: 3024,
    originalHeight: 4032,
    aspectHint: 'Retrato (3:4)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgID726rDJg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9T4XKasp9YTo9K3FX72Y9WHhGi_juBnm2ouakd2yv8KUgCEAZRBobWHIJ9NxI1SvqtmZYu_eHeXJGDp12T4UP5TBllZ7a7suIbQ90S4zhM1RRxghVi2AUcaIATQH6BzKmtn_4Rv%3Dw203-h270-k-no!7i3024!8i4032!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-5',
    url: '/photos/gal-5.jpg',
    title: 'Estoque e Pronta Entrega de Componentes',
    description: 'Ampla disponibilidade para retirada imediata ou entrega no mesmo dia para sua obra.',
    originalWidth: 4160,
    originalHeight: 3120,
    aspectHint: 'Paisagem (4:3)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhD9XFO4xTeXuME7c2d19Vzd!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QEA97IktvnuwsMwnE9Vn66oiwrYZ8iod84VxRk5vDE0H_HOMBTGR9lhokx2TsAMYO_TnLMdFhtYyKQuqvUOfnKTjhZrm3XNS7wPQinC1GukHG1qLxVjiCgBhGARbplV5X2W8UJgRqnh4hI%3Dw203-h152-k-no!7i4160!8i3120!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-6',
    url: '/photos/gal-6.jpg',
    title: 'Iluminação Técnica, Comercial & Industrial',
    description: 'Refletores, trilhos eletrificados, spots direcionáveis e soluções para comércios e galpões.',
    originalWidth: 4160,
    originalHeight: 3120,
    aspectHint: 'Paisagem (4:3)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCjufPrPWi53HDXyKrvr8XN!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9SYwIzapEve6uqp4ubn50WJH8NT_zEQWECFbCMLF-2P5fzcFTmSCTj57fVF-QGESl5pXOCRf7TTWtAgcEUeVGg7PKiKq2lJpdbTxF2BloxqJDOEfinYQLg2U0dHQbmF3b3kozFhgy3l_Sgy%3Dw203-h152-k-no!7i4160!8i3120!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-7',
    url: '/photos/gal-7.jpg',
    title: 'Expositores de Automação & Lâmpadas Inteligentes',
    description: 'Sistemas inteligentes integráveis a assistentes virtuais e controle por smartphone.',
    originalWidth: 3024,
    originalHeight: 4032,
    aspectHint: 'Retrato (3:4)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhADyc5UFglHrWfbGukAAzL0!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9QaeiAL7v6GlIBMQm_SZjIezlzpLG5SQlR0fqTi7AxcfzFunIaoVnJU7gnia7cmivupTSsLkacnSsG9jmRfHiMA3gp9NrW7mmQFVxNZwHaZDcW9S0ii0kcICUUEe0IwD0zEeoF7ocFzXeaL%3Dw203-h270-k-no!7i3024!8i4032!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
  {
    id: 'gal-8',
    url: '/photos/gal-8.jpg',
    title: 'Fachada e Acesso Amplo na Walter Jobim',
    description: 'Fácil localização no bairro Patronato com estacionamento próprio coberto e descoberto.',
    originalWidth: 1280,
    originalHeight: 719,
    aspectHint: 'Panorâmica (16:9)',
    googleMapsUrl: 'https://www.google.com.br/maps/place/JKL+Ilumina%C3%A7%C3%A3o/@-29.7009152,-53.8297369,3a,87.4y,90t/data=!3m8!1e2!3m6!1sCIABIhADydER4RoTjmfbGhgAAc9g!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FANWiy9RHY_U3lROyifEm-YCPPbgbhL20X4evgSc-u2mBr1zgl-nIxJeTPYQvbcljRFmgFbPqep-aLCwfqDamWgvRDN4HSb3Ct-YqGxEpwRt3m_K0s5JUwOcan7oqMFBJfdl5fUv34_3qEGhAxmMi%3Dw203-h114-k-no!7i1280!8i719!4m16!1m8!3m7!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!2zSktMIElsdW1pbmHDp8Ojbw!8m2!3d-29.7009976!4d-53.8299864!10e1!16s%2Fg%2F11g1ltzd2r!3m6!1s0x9503cdd3e698f521:0xa1219ea2a4f05be8!8m2!3d-29.7009976!4d-53.8299864!10e5!16s%2Fg%2F11g1ltzd2r?entry=ttu',
  },
];

export const PRODUCTS_SERVICES_DATA: ProductItem[] = [
  // Iluminação
  {
    id: 'prod-paineis-led',
    category: 'iluminacao',
    title: 'Painéis e Plafons de LED',
    shortDesc: 'Modelos de embutir e sobrepor em diversos formatos (quadrados, redondos e retangulares) com alta eficiência luminosa.',
    features: ['Temperaturas 3000K, 4000K e 6500K', 'Driver isolado antichoque', 'Borda ultra fina e acabamento minimalista'],
    badge: 'Mais Vendido',
    popular: true,
  },
  {
    id: 'prod-fitas-led',
    category: 'iluminacao',
    title: 'Fitas de LED & Tecnologia COB',
    shortDesc: 'Fitas de alta densidade sem pontos visíveis, ideais para marcenaria, sancas de gesso, rodapés e espelhos.',
    features: ['Modelos 12V e 24V com fontes slim', 'Alto IRC (IRC > 90) para fidelidade de cores', 'Opções RGBW e dimerizáveis'],
    badge: 'Destaque Arquitetura',
    popular: true,
  },
  {
    id: 'prod-perfis-led',
    category: 'iluminacao',
    title: 'Perfis de Alumínio para LED',
    shortDesc: 'Perfis lineares de embutir no gesso, sobrepor e cantoneiras com difusores leitosos para iluminação contínua contornada.',
    features: ['Dissipação térmica de alto rendimento', 'Cortes sob medida para seu projeto', 'Acabamentos preto, branco e alumínio anodizado'],
  },
  {
    id: 'prod-lampadas-especiais',
    category: 'iluminacao',
    title: 'Lâmpadas Decorativas & Técnicas',
    shortDesc: 'Linha completa com lâmpadas bulbo, filamento vintage âmbar, dicroicas, PAR20, AR70, AR111 e tubulares LED.',
    features: ['Economia de até 85% de energia', 'Vida útil de até 25.000 horas', 'Alta durabilidade comprovada'],
  },
  {
    id: 'prod-automacao',
    category: 'iluminacao',
    title: 'Iluminação Inteligente & Automação',
    shortDesc: 'Controle de cenas, dimerização e acionamento por aplicativo de celular ou comandos de voz.',
    features: ['Módulos Wi-Fi e Zigbee', 'Integração com Alexa e Google Home', 'Criação de rotinas e economia de consumo'],
    badge: 'Inovação',
  },
  {
    id: 'prod-decorativa',
    category: 'iluminacao',
    title: 'Luminárias, Pendentes & Arandelas',
    shortDesc: 'Peças de design contemporâneo para salas de jantar, quartos, lavabos e áreas gourmet.',
    features: ['Design assinado e industrial moderno', 'Materiais resistentes e vidros soprados', 'Combinações personalizadas para sua casa'],
  },

  // Materiais Elétricos
  {
    id: 'mat-fios-cabos',
    category: 'materiais',
    title: 'Fios e Cabos Normatizados',
    shortDesc: 'Cabos flexíveis e de potência com 100% cobre puro e certificação INMETRO de antichama.',
    features: ['Bitolas de 1,5mm² até 35mm²', 'Condutores de cobre eletrolítico', 'Resistência térmica com máxima segurança'],
    popular: true,
  },
  {
    id: 'mat-disjuntores-protecao',
    category: 'materiais',
    title: 'Disjuntores, DPS & DRs',
    shortDesc: 'Componentes de proteção elétrica contra sobrecarga, curto-circuito, surtos atmosféricos e choques elétricos.',
    features: ['Padrão DIN com marcas líderes', 'Dispositivos DR de alta sensibilidade (30mA)', 'DPS classe II para descargas'],
    badge: 'Segurança Obrigatória',
    popular: true,
  },
  {
    id: 'mat-quadros-distribuicao',
    category: 'materiais',
    title: 'Quadros de Distribuição & Barramentos',
    shortDesc: 'Quadros embutir e sobrepor para até 36 módulos, com barramentos pente fase/neutro/terra.',
    features: ['Porta fumê ou branca com trava', 'Espaço otimizado para organização de circuitos', 'Grau de proteção adequado à sua edificação'],
  },
  {
    id: 'mat-tomadas-interruptores',
    category: 'materiais',
    title: 'Tomadas e Interruptores Modulares',
    shortDesc: 'Coleções modernas em acabamento fosco, preto, titânio e branco com módulos de USB-C e rede.',
    features: ['Módulos intercambiáveis e fáceis de limpar', 'Tomadas de 10A e 20A', 'Design ultrafino rente à parede'],
    popular: true,
  },
  {
    id: 'mat-eletrodutos',
    category: 'materiais',
    title: 'Eletrodutos, Caixas & Conectores',
    shortDesc: 'Toda a infraestrutura embutida e aparente (estilo industrial), conduletes, conduítes corrugados e fitas isolantes.',
    features: ['Conduítes reforçados antichama', 'Conectores automáticos rápidos tipo WAGO', 'Linha completa para infraestrutura predial'],
  },

  // Serviços
  {
    id: 'serv-instalacao-baixa-media',
    category: 'servicos',
    title: 'Instalações Elétricas Prediais & Comerciais',
    shortDesc: 'Execução de projetos elétricos completos em baixa e média tensão conforme as normas NBR 5410.',
    features: ['Passagem de fiação e montagem de quadros', 'Balanceamento de cargas e testes de isolamento', 'Equipe técnica certificada com NR-10'],
    badge: 'Serviço Especializado',
    popular: true,
  },
  {
    id: 'serv-luminotecnico',
    category: 'servicos',
    title: 'Instalação de Perfis & Sistemas de LED',
    shortDesc: 'Mão de obra com precisão para instalação de perfis no gesso, fitas de LED sem emendas visíveis e fontes.',
    features: ['Acabamento milimétrico em marcenaria e forros', 'Dimensionamento exato de fontes e voltagem', 'Garantia de iluminação homogênea e sem flicker'],
    popular: true,
  },
  {
    id: 'serv-manutencao',
    category: 'servicos',
    title: 'Manutenções Preventivas & Corretivas',
    shortDesc: 'Diagnóstico de sobreaquecimento, troca de disjuntores que desarmam, correção de fugas de corrente e curto.',
    features: ['Termografia de quadros elétricos', 'Inspeção rápida para condomínios e empresas', 'Atendimento com pontualidade'],
  },
  {
    id: 'serv-adequacao-padrao',
    category: 'servicos',
    title: 'Adequação de Padrão de Entrada',
    shortDesc: 'Adequação e aumento de carga junto à concessionária de energia para residências, clínicas e comércios.',
    features: ['Troca de ramal de entrada', 'Instalação de caixas de medição homologadas', 'Orientação documental e técnica'],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Eng. Guilherme Dornelles',
    role: 'Engenheiro Civil & Construtor',
    rating: 5,
    date: 'Há 2 semanas',
    comment: 'Compro todos os materiais elétricos das minhas obras na JKL. O atendimento do balcão é técnico, entendem exatamente o que está no projeto e os preços são muito competitivos. A entrega rápida em Santa Maria salva o cronograma!',
    verified: true,
  },
  {
    id: 'test-2',
    author: 'Mariana Vasconcellos',
    role: 'Arquiteta & Designer de Interiores',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'O showroom deles no Patronato é excelente para levar os clientes e escolher fitas de LED e perfis. Conseguimos testar as temperaturas de cor ao vivo. Os perfis de LED ficaram impecáveis no apartamento da minha cliente.',
    verified: true,
  },
  {
    id: 'test-3',
    author: 'Rodrigo B. Peixoto',
    role: 'Proprietário Residencial (Reforma no Bairro Dores)',
    rating: 5,
    date: 'Há 3 semanas',
    comment: 'Fui muito bem orientado sobre quais disjuntores e fiação usar na reforma da cozinha e ar condicionado. Além disso comprei os pendentes da sala que deram um visual incrível na casa. Nota 10 em cordialidade e conhecimento.',
    verified: true,
  },
  {
    id: 'test-4',
    author: 'Luciano Silveira',
    role: 'Eletricista Instalador Autônomo',
    rating: 5,
    date: 'Há 2 meses',
    comment: 'Parceria de anos! Os caras têm produtos de primeira linha, fios 100% cobre homologados e nunca deixam faltar material. Facilidade total no estacionamento gratuito na frente da loja.',
    verified: true,
  },
  {
    id: 'test-5',
    author: 'Juliana Martini',
    role: 'Empresária (Comércio em Santa Maria)',
    rating: 5,
    date: 'Há 1 mês',
    comment: 'Fizemos a troca de toda a iluminação da loja por painéis de LED da JKL. Reduziu nossa conta de luz no primeiro mês e a loja ficou com uma visibilidade excelente para as vitrines.',
    verified: true,
  },
];

export const FACILITIES_DATA: FacilityGroup[] = [
  {
    category: 'Acessibilidade',
    title: 'Acessibilidade Total',
    iconName: 'Accessibility',
    items: [
      { name: 'Entrada com Acessibilidade', description: 'Rampa de acesso suave e portas amplas preparadas para cadeiras de rodas e carrinhos.' },
      { name: 'Estacionamento Acessível', description: 'Vagas sinalizadas e reservadas com fácil manobra e acesso direto à entrada da loja.' },
    ],
  },
  {
    category: 'Opções de Serviço',
    title: 'Opções de Compra & Entrega',
    iconName: 'Truck',
    items: [
      { name: 'Entrega Expressa', description: 'Logística própria para canteiros de obras e residências em Santa Maria e região.' },
      { name: 'Retirada na Loja', description: 'Seu pedido separado previamente para agilizar o tempo do seu dia.' },
      { name: 'Compras Presenciais', description: 'Showroom completo e consultoria técnica individual com especialistas.' },
      { name: 'Entrega no Mesmo Dia', description: 'Atendimento ágil para materiais urgentes que não podem paralisar sua equipe.', highlight: true },
    ],
  },
  {
    category: 'Planejamento',
    title: 'Planejamento e Orçamentos',
    iconName: 'CalendarCheck',
    items: [
      { name: 'Visita Rápida', description: 'Levantamento de necessidades no local da obra para cotação precisa de materiais e serviços elétricos.' },
      { name: 'Consultoria de Projeto', description: 'Auxílio na interpretação de projetos luminotécnicos e quadros de carga.' },
    ],
  },
  {
    category: 'Reciclagem & Sustentabilidade',
    title: 'Compromisso com o Meio Ambiente',
    iconName: 'Recycle',
    items: [
      { name: 'Reciclagem de Lâmpadas', description: 'Ponto de coleta e descarte responsável para lâmpadas usadas, prevenindo contaminação ambiental.', highlight: true },
      { name: 'Produtos de Baixo Consumo', description: 'Tecnologia LED que reduz a pegada de carbono e o consumo de eletricidade.' },
    ],
  },
  {
    category: 'Pagamentos',
    title: 'Formas de Pagamento Modernas',
    iconName: 'CreditCard',
    items: [
      { name: 'Cartão de Crédito', description: 'Condições especiais e parcelamento facilitado para obras e reformas.' },
      { name: 'Cartão de Débito & Pix', description: 'Transações instantâneas com desconto e confirmação imediata.' },
      { name: 'Pagamento por Aproximação (NFC)', description: 'Aceitamos Apple Pay, Google Pay, carteiras digitais e smartwatches.' },
    ],
  },
  {
    category: 'Estacionamento',
    title: 'Estacionamento Completo e Gratuito',
    iconName: 'Car',
    items: [
      { name: 'Estacionamento Coberto Gratuito', description: 'Proteção contra sol e chuva para você carregar suas compras com conforto.' },
      { name: 'Estacionamento Descoberto Gratuito', description: 'Vagas amplas com fácil manobra para caminhonetes e utilitários.' },
      { name: 'Estacionamento Gratuito na Rua', description: 'Vagas livres na Av. Gov. Walter Jobim bem em frente ao estabelecimento.' },
      { name: 'Estacionamento no Local', description: 'Pátio próprio seguro e fechado para clientes em atendimento.' },
    ],
  },
];
