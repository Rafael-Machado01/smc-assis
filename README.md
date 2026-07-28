<div align="center">

# SMC Assis - AssisTáArte

### Landing Page da Secretaria Municipal de Cultura de Assis
### **[Acesse o Projeto](https://smc-assis.vercel.app/)**
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[Componentes](#componentes) | [Tecnologias](#tecnologias) | [Arquitetura](#arquitetura) | [Habilidades Demonstradas](#habilidades-demonstradas) | [Como Rodar](#como-rodar)

</div>

---

## Sobre o Projeto

Landing page institucional para a **AssisTáArte / Semearte**, escola de arte e cultura vinculada à Secretaria Municipal de Cultura do município de Assis-SP. O projeto apresenta os cursos oferecidos (Ballet, Capoeira, Circo, Desenho e Pintura, Teatro e Violão), seus benefícios, professores e depoimentos de alunos.

---

## Tecnologias

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | Next.js (App Router) | 16.2.10 |
| Linguagem | TypeScript | ^5 |
| UI Library | React | 19.2.4 |
| Estilização | Tailwind CSS | v4 |
| Ícones | Phosphor Icons | ^2.1.10 |
| Tema | next-themes (Dark/Light) | ^0.4.6 |
| Compilador | React Compiler (experimental) | 1.0.0 |
| Gerenciador | pnpm | - |
| Linter | ESLint 9 (flat config) | ^9 |
| Formatter | Prettier | ^3.9.5 |
| Git Hooks | Husky + lint-staged | ^9 / ^17.1.0 |

---

## Arquitetura

```
src/app/
├── components/          # 12 componentes React
│   ├── Header.tsx       # Navbar fixa com toggle dark mode
│   ├── Footer.tsx       # Rodapé com links e contato
│   ├── Mission.tsx      # Seção missão + estatísticas
│   ├── Carrousel.tsx    # Carrossel de cursos
│   ├── CarrouselCard.tsx
│   ├── CarrouselButton.tsx
│   ├── History.tsx      # Seção história da escola
│   ├── Depoiment.tsx    # Seção depoimentos
│   ├── DepoimentCard.tsx
│   ├── CoursePage.tsx   # Página dinâmica de curso
│   ├── Benefits.tsx     # Benefícios do curso
│   └── Teachers.tsx     # Professores do curso
├── constants/           # Dados centralizados (8 arquivos)
│   ├── courses-data.ts
│   ├── carrousel-data.ts
│   ├── depoiment-data.ts
│   ├── mission-data-stats.ts
│   ├── header-menu-links.ts
│   ├── footer-contacts.ts
│   ├── footer-social-links.ts
│   └── styles/tailwind.ts
├── course/[id]/page.tsx # Rota dinâmica
├── page.tsx             # Página inicial
├── layout.tsx           # Layout raiz
└── globals.css          # Estilos globais + variante dark
```

### Hierarquia de Componentes

```
layout.tsx (Header + Footer)
├── page.tsx (Home)
│   ├── Mission.tsx
│   ├── Carrousel.tsx
│   │   ├── CarrouselButton.tsx
│   │   └── CarrouselCard.tsx
│   ├── History.tsx
│   └── Depoiment.tsx
│       └── DepoimentCard.tsx
└── course/[id]/page.tsx
    └── CoursePage.tsx
        ├── Benefits.tsx
        └── Teachers.tsx
```

---

## Habilidades Demonstradas

### 1. Renderização Dinâmica com `.map()`

O projeto utiliza **8 chamadas distintas de `.map()`** para renderizar listas de dados de forma declarativa. Exemplo em `CarrouselCard.tsx`:

```tsx
{carrouselData.map((data) => {
  const CIcon = data.icon;
  return (
    <div key={data.curse}>
      <Image src={data.urlImage} alt={data.alt} />
      <h2><CIcon size={32} weight="fill" />{data.curse}</h2>
      <p>{data.description}</p>
      <Link href={data.urlButton}>Acessar</Link>
    </div>
  );
})}
```

Também há uso de **`.map()` aninhado** em `Benefits.tsx` e `Teachers.tsx`, onde o primeiro nível itera sobre os cursos filtrados e o segundo nível renderiza benefícios/professores de cada curso:

```tsx
{newArray.map((data) => (
  <section key={data.id}>
    {data.benefits.map((benefit) => (
      <div key={benefit.title}>
        <benefit.icon size={30} />
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    ))}
  </section>
))}
```

---

### 2. Rotas Dinâmicas com `[id]`

O projeto implementa rotas dinâmicas do Next.js App Router em `src/app/course/[id]/page.tsx`:

```
/course/1  → Ballet
/course/2  → Capoeira
/course/3  → Circo
/course/4  → Desenho e Pintura
/course/5  → Teatro
/course/6  → Violão
```

O parâmetro `id` é extraído via `useParams()` e utilizado para filtrar os dados do curso:

```tsx
const params = useParams();
const id = Number(params.id);
```

Esse `id` é então passado como prop para `<Benefits id={id} />` e `<Teachers id={id} />`, que filtram `coursesData` para exibir apenas o conteúdo do curso selecionado. Os cards do carrossel na página inicial já possuem links para essas rotas dinâmicas.

---

### 3. Arquitetura de Dados com Constantes

Todos os dados do projeto estão centralizados em **8 arquivos de constantes** dentro de `src/app/constants/`, seguindo o princípio de separação de dados e apresentação:

| Arquivo | Responsabilidade |
|---------|-----------------|
| `courses-data.ts` | Cursos, benefícios e professores |
| `carrousel-data.ts` | Itens do carrossel |
| `depoiment-data.ts` | Depoimentos de alunos |
| `mission-data-stats.ts` | Estatísticas da instituição |
| `header-menu-links.ts` | Links de navegação |
| `footer-contacts.ts` | Informações de contato |
| `footer-social-links.ts` | Links de redes sociais |
| `styles/tailwind.ts` | Classes Tailwind reutilizáveis |

Isso permite **adicionar, editar ou remover conteúdo sem alterar componentes**. Para adicionar um novo curso, basta inserir um objeto em `courses-data.ts`:

```ts
{
  id: 7,
  name: "Novo Curso",
  spanIcon: NewIcon,
  textColor: "text-blue-500",
  benefits: [ /* ... */ ],
  teachers: [ /* ... */ ],
}
```

As classes de estilo também são exportadas como constantes via `tailwind.ts`, garantindo consistência visual entre componentes:

```ts
export const tailwindStyles = {
  spanSection: "text-sm font-semibold uppercase tracking-widest",
  titleSection: "text-4xl font-bold",
  hoverHeaderLinks: "hover:text-blue-500 transition-colors duration-300",
  // ...
};
```

---

### 4. Dark Mode com `next-themes`

Implementação completa de tema escuro/claro usando `next-themes`:

- `ThemeProvider` envolve toda a aplicação no `layout.tsx`
- Toggle manual no `Header.tsx` com ícones Sun/Moon
- Variante `dark:` do Tailwind utilizada em todos os componentes
- Configuração customizada no `globals.css`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

---

### 5. GitHub e Controle de Versão

#### Estrutura de Branches

O projeto segue um modelo de branches com `main` para código estável e `dev` para desenvolvimento ativo:

```
main ──●─── (código estável)
        \
         dev ──●──●──●──●──●──●──● (desenvolvimento)
```

#### Pull Requests

Utilização de Pull Requests no GitHub para revisão e integração de código. O commit `44bb289 close pr#2` evidencia o uso de PRs como parte do fluxo de trabalho.

#### Boas Práticas de Git

- **Commits descritivos** descrevendo o que foi implementado (`component header full`, `benefit component`, `courses page`)
- **Mensagens de commit em inglês** seguindo convenção de commits simples
- **Merge commits** para integração de branches

---

### 6. Qualidade de Código

O projeto conta com um pipeline completo de qualidade de código local:

| Ferramenta | Configuração | Função |
|-----------|-------------|--------|
| **Husky** | `.husky/pre-commit` | Executa hooks antes do commit |
| **lint-staged** | Integrado ao Husky | Roda linters apenas nos arquivos staged |
| **ESLint** | `eslint.config.mjs` (flat config) | Análise estática de código |
| **Prettier** | `.prettierrc` | Formatação automática de código |
| **EditorConfig** | `.editorconfig` | Consistência entre editores |
| **TypeScript** | `tsconfig.json` | Tipagem estática |

O fluxo é: `git commit` → Husky dispara lint-staged → ESLint + Prettier rodam nos arquivos → commit realizado apenas se passar.

---

### 7. Componentes Server e Client

O projeto demonstra o padrão do React 19 com separação clara entre Server Components e Client Components:

- **Server Components** (padrão): `CarrouselCard.tsx`, `DepoimentCard.tsx`, `History.tsx`, `layout.tsx`, `page.tsx` — renderização no servidor, melhor SEO e performance
- **Client Components** (`"use client"`): `Header.tsx`, `Footer.tsx`, `Carrousel.tsx`, `Mission.tsx`, `CoursePage.tsx`, `Benefits.tsx`, `Teachers.tsx`, `Depoiment.tsx` — interatividade com hooks (`useState`, `useParams`, `useTheme`, `usePathname`)

---

### 8. React Compiler (Experimental)

O projeto habilita o **React Compiler** (anteriormente React Forget) via `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

Essa feature experimental do React 19 automatiza a otimização de re-renderizações, eliminando a necessidade manual de `useMemo`, `useCallback` e `React.memo`.

---

## Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Rafael-Machado01/smc-assis.git

# Entrar no diretório
cd smc-assis

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos Disponíveis

| Comando | Descrição |
|---------|----------|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Iniciar em produção |
| `pnpm lint` | Rodar ESLint |

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Projeto desenvolvido com foco em boas práticas de desenvolvimento frontend, arquitetura limpa e organização profissional do repositório.**

</div>
