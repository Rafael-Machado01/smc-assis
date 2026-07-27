import {
  FlowerIcon,
  MaskHappyIcon,
  TentIcon,
  PencilIcon,
  GuitarIcon,
  PersonSimpleRunIcon,
  BarbellIcon,
  BrainIcon,
  PersonSimpleTaiChiIcon,
  HeartbeatIcon,
  PaintBrushIcon,
  ChatCircleTextIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";

export const coursesData = [
  {
    id: 1,
    name: "Ballet",
    spanIcon: FlowerIcon,
    textColor: "text-pink-500 dark:text-pink-400",
    hoverColor: "hover:shadow-pink-500/50 dark:hover:shadow-pink-400/50",
    benefits: [
      {
        title: "Equilíbrio",
        icon: PersonSimpleTaiChiIcon,
        description:
          "O ballet trabalha intensamente a consciência corporal, o alinhamento da coluna e o equilíbrio.",
      },
      {
        title: "Força",
        icon: BarbellIcon,
        description:
          "Apesar de parecer leve, o ballet exige força muscular, principalmente nas pernas, abdômen e costas.",
      },
      {
        title: "Disciplina",
        icon: BrainIcon,
        description:
          "O ballet é uma arte que une disciplina e emoção. Você aprende a se expressar com o corpo.",
      },
    ],
    teachers: [
      {
        name: "Fabiana Alves",
        photo: "/teachers/fabiana.jpg",
      },
      {
        name: "Jéssica Racanelli",
        photo: "/teachers/jessica.jpg",
      },
      {
        name: "Renata Kill",
        photo: "/teachers/renata.jpg",
      },
      {
        name: "Ricardo Orso",
        photo: "/teachers/ricardo.jpg",
      },
      {
        name: "Danilo Alves",
        photo: "/teachers/danilo.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Capoeira",
    spanIcon: PersonSimpleRunIcon,
    textColor: "text-green-500 dark:text-green-400",
    hoverColor: "hover:shadow-green-500/50 dark:hover:shadow-green-400/50",
    benefits: [
      {
        title: "Condicionamento",
        icon: BarbellIcon,
        description:
          "A capoeira desenvolve força, resistência e flexibilidade por meio de movimentos dinâmicos.",
      },
      {
        title: "Coordenação",
        icon: PersonSimpleRunIcon,
        description:
          "Os movimentos trabalham equilíbrio, agilidade e coordenação motora.",
      },
      {
        title: "Cultura",
        icon: BrainIcon,
        description:
          "Muito além da luta, a capoeira preserva a cultura afro-brasileira e incentiva o respeito.",
      },
    ],
    teachers: [
      {
        name: "Marcos Rodrigues",
        photo: "/teachers/marcos.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "Circo",
    spanIcon: TentIcon,
    textColor: "text-red-500 dark:text-red-400",
    hoverColor: "hover:shadow-red-500/50 dark:hover:shadow-red-400/50",
    benefits: [
      {
        title: "Coordenação",
        icon: PersonSimpleTaiChiIcon,
        description:
          "As atividades circenses desenvolvem equilíbrio, coordenação e consciência corporal.",
      },
      {
        title: "Confiança",
        icon: HeartbeatIcon,
        description:
          "Cada desafio vencido fortalece a autoestima e a autoconfiança.",
      },
      {
        title: "Criatividade",
        icon: BrainIcon,
        description:
          "O circo desperta a imaginação e incentiva a expressão artística.",
      },
    ],
    teachers: [
      {
        name: "Luciana Gomes",
        photo: "/teachers/luciana.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Desenho e Pintura",
    spanIcon: PencilIcon,
    textColor: "text-yellow-500 dark:text-yellow-400",
    hoverColor: "hover:shadow-yellow-500/50 dark:hover:shadow-yellow-400/50",
    benefits: [
      {
        title: "Bem-estar",
        icon: HeartbeatIcon,
        description:
          "Desenhar e pintar ajudam a aliviar o estresse e melhorar o foco.",
      },
      {
        title: "Criatividade",
        icon: PaintBrushIcon,
        description:
          "Essas artes desenvolvem a criatividade, o olhar artístico e a atenção aos detalhes.",
      },
      {
        title: "Autoconhecimento",
        icon: BrainIcon,
        description:
          "Cada desenho ou pintura é uma expressão única de quem você é.",
      },
    ],
    teachers: [
      {
        name: "Valéria Scaramboni",
        photo: "/teachers/valeria.jpg",
      },
    ],
  },

  {
    id: 5,
    name: "Teatro",
    spanIcon: MaskHappyIcon,
    textColor: "text-purple-500 dark:text-purple-400",
    hoverColor: "hover:shadow-purple-500/50 dark:hover:shadow-purple-400/50",
    benefits: [
      {
        title: "Comunicação",
        icon: ChatCircleTextIcon,
        description:
          "O teatro ajuda a falar em público com clareza e confiança, melhorando a dicção e a linguagem corporal.",
      },
      {
        title: "Trabalho em Equipe",
        icon: UsersThreeIcon,
        description:
          "Fazer teatro é aprender a ouvir, respeitar e colaborar com outras pessoas.",
      },
      {
        title: "Criatividade",
        icon: BrainIcon,
        description:
          "O teatro estimula a imaginação, o pensamento rápido e a expressividade.",
      },
    ],
    teachers: [
      {
        name: "Ricardo Bagge",
        photo: "/teachers/bagge.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Violão",
    spanIcon: GuitarIcon,
    textColor: "text-orange-500 dark:text-orange-400",
    hoverColor: "hover:shadow-orange-500/50 dark:hover:shadow-orange-400/50",
    benefits: [
      {
        title: "Expressão",
        icon: ChatCircleTextIcon,
        description:
          "Tocar violão é uma forma incrível de expressar sentimentos e emoções.",
      },
      {
        title: "Coordenação",
        icon: GuitarIcon,
        description:
          "O violão trabalha o raciocínio, a memória e a coordenação motora das duas mãos.",
      },
      {
        title: "Bem-estar",
        icon: UsersThreeIcon,
        description:
          "A música aproxima pessoas. Tocar violão em grupo cria conexões e amizades.",
      },
    ],
    teachers: [
      {
        name: "Flavia L'erario",
        photo: "/teachers/flavia.jpg",
      },
      {
        name: "Rafael de Oliveira",
        photo: "/teachers/rafael.jpg",
      },
      {
        name: "Nelson Bernardes",
        photo: "/teachers/nelson.jpg",
      },
    ],
  },
];
