## 🇧🇷 Portuguese Version
# Portfólio V1

Este repositório contém o código-fonte do meu portfólio pessoal, desenvolvido para apresentar meus projetos, experiências, habilidades e facilitar o contato profissional. O projeto foi construído do zero utilizando HTML5, CSS3 e JavaScript puro, com foco em responsividade, acessibilidade e uma experiência visual agradável.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Como Executar Localmente](#como-executar-localmente)
- [Projetos em Destaque](#projetos-em-destaque)
- [Contato](#contato)
- [English Version](#english-version)

---

## ✨ Visão Geral

O Portfólio V1 é uma aplicação web estática, responsiva e moderna, que reúne:

- **Página inicial de apresentação**
- **Seção "Sobre mim"** com resumo e curiosidades
- **Seção de Experiência** com tecnologias, currículo e histórico profissional
- **Seção de Projetos** com modal detalhado para cada projeto
- **Seção de Contato** com redes sociais e formulário de envio de e-mail via modal

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica, uso de tags apropriadas para SEO e acessibilidade.
- **CSS3**: 
  - Layouts com Flexbox e Grid.
  - Animações e transições suaves.
  - Gradientes, transparências e efeitos visuais.
  - Responsividade com media queries para diferentes tamanhos de tela.
  - Organização modular dos estilos em múltiplos arquivos (`reset.css`, `style.css`, `responsive.css`, `menu.css`).
- **JavaScript**:
  - Manipulação do DOM para animações de scroll e exibição de seções.
  - Controle de modais para detalhes de projetos e envio de e-mail.
  - Dados dos projetos organizados em array de objetos.
  - Bloqueio e liberação de scroll ao abrir/fechar modais.
  - Manipulação de formulários e integração com serviços externos.
- **Font Awesome**: Ícones para enriquecer a interface.
- **Google Fonts**: Fontes Poppins e Roboto para tipografia moderna.
- **FormSubmit**: Integração para envio de mensagens do formulário de contato.

---

## 📄 Estrutura de Pastas

```
Portfólio-V1/
│
├── index.html
├── README.md
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   ├── responsive.css
│   │   ├── menu.css
│   │   └── fontawesome.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── ... (imagens do site e projetos)
│   └── archives/
│       └── ... (currículo em PDF)
└── ...
```

---

## 🚀 Funcionalidades Detalhadas

### Header e Menu

- Menu fixo no topo, com efeito de transição ao rolar a página (alteração de cor e padding).
- Menu hamburguer responsivo para dispositivos móveis, controlado por checkbox e CSS.
- Navegação suave entre seções com âncoras.
- Destaque visual no hover dos itens do menu.

### Seção "Me"

- Apresentação com nome, título e fundo com imagem fixa.
- Animação de seta indicando para rolar a página (keyframes CSS).
- Uso de fontes grandes e destaque visual para o nome.

### Seção "About"

- Grid com imagem de perfil, texto descritivo e resumo em ícones.
- Elementos gráficos decorativos (triângulos, bola verde) para enriquecer o visual.
- Animação de fade-in ao rolar a página (classe `.visible` adicionada via JS).
- Texto sobre mim detalhado, com informações pessoais e profissionais.
- Resumo em ícones com títulos e descrições.

### Seção "Experience"

- Fundo com imagem e overlay escuro para contraste e leitura.
- Lista de tecnologias conhecidas com ícones do Font Awesome.
- Título estilizado e destacado.
- Link para download do currículo em PDF, com botão estilizado.
- Espaço para histórico de experiências profissionais (com placeholder visual).

### Seção "Projects"

- Grid de projetos com imagem, nome e efeito hover (fade-in de overlay).
- Cada projeto é um botão que abre um modal detalhado.
- Modal exibe:
  - Título do projeto
  - Imagem em destaque
  - Descrição detalhada (vinda de um array JS)
  - Botões para acessar o site e o código-fonte no GitHub
- Dados dos projetos centralizados em um array JS para fácil manutenção e escalabilidade.
- Modal pode ser fechado por botão ou clique fora do conteúdo.
- Bloqueio de scroll do body ao abrir modal.

### Seção "Contact"

- Ícones de redes sociais (LinkedIn, Instagram, GitHub, E-mail) com hover animado.
- Botão de e-mail abre modal com formulário (nome, e-mail, mensagem).
- Integração com [FormSubmit](https://formsubmit.co/) para envio de mensagens sem backend.
- Mensagem de agradecimento após envio do formulário.
- Rocket animado para voltar ao topo da página (com animação CSS).
- Copyright.

### Modais

- Modal de projetos: exibe detalhes do projeto selecionado, com transição suave.
- Modal de e-mail: formulário de contato, bloqueia scroll do fundo, pode ser fechado por botão ou clique fora.
- Reset do estado do modal ao fechar (formulário volta a aparecer, mensagem de agradecimento some).

### Responsividade

- Layout adaptado para desktops, tablets e celulares.
- Ajustes de tamanhos de fontes, espaçamentos e grid conforme a largura da tela.
- Menu hamburguer e colunas empilhadas em telas menores.
- Imagens e grids adaptáveis.
- Testado em diferentes breakpoints (400px, 768px, 1024px).

### Acessibilidade

- Uso de tags semânticas (`header`, `main`, `section`, `footer`).
- Contraste de cores adequado para leitura.
- Foco visual em botões e links.
- Textos alternativos em imagens.
- Navegação por teclado nos modais.

### Organização e Boas Práticas

- Separação de responsabilidades: CSS modularizado, JS separado.
- Comentários explicativos no código.
- Nomes de classes e IDs claros e descritivos.
- Uso de variáveis CSS para cores e fontes (em arquivos apropriados).
- Estrutura de arquivos limpa e organizada.
- Utilização de fontes externas otimizadas (Google Fonts).

### Extras

- Utilização de gradientes e efeitos visuais para tornar o design mais harmônico.
- Efeitos de hover e transições suaves em botões, cards e ícones.
- Utilização de `box-shadow` e `border-radius` para dar profundidade e suavidade aos elementos.
- Utilização de `backdrop-filter` para efeitos de blur em modais.
- Utilização de `setTimeout` para feedback visual ao enviar formulário.

---

## 📦 Como Executar Localmente

1. Clone este repositório:
   ```
   git clone https://github.com/AlexOnn1/Portfólio-V1.git
   ```
2. Abra o arquivo `index.html` no seu navegador preferido.

---

## 📚 Projetos em Destaque

- **Sieg's Portfolio**: Portfólio completo feito apenas com HTML e CSS.
- **Landing Page**: Projeto de landing page responsiva usando Flexbox e Grid.
- **Huddle Base**: Página baseada em desafio do Frontend Mentor, com foco em responsividade.
- **Shopping Cart**: Sistema de vendas simples, com carrinho, cadastro e histórico, desenvolvido em Python/Streamlit ([veja online](https://sistema-de-vendas.streamlit.app/)).

---

## 📧 Contato

Fique à vontade para entrar em contato pelo formulário do site ou pelas redes sociais no rodapé.

---

Desenvolvido por Alexsander Albino.

---

## 🌎 English Version

# Portfolio V1

This repository contains the source code for my personal portfolio, developed to showcase my projects, experience, skills, and to facilitate professional contact. The project was built from scratch using HTML5, CSS3, and pure JavaScript, focusing on responsiveness, accessibility, and a pleasant visual experience.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Detailed Features](#detailed-features)
- [How to Run Locally](#how-to-run-locally)
- [Featured Projects](#featured-projects)
- [Contact](#contact)

---

## ✨ Overview

Portfolio V1 is a static, responsive, and modern web application that brings together:

- **Intro presentation page**
- **"About Me" section** with summary and highlights
- **Experience section** with technologies, resume, and work history
- **Projects section** with detailed modal for each project
- **Contact section** with social networks and email form via modal

---

## 🛠️ Technologies Used

- **HTML5**: Semantic structure, proper tags for SEO and accessibility.
- **CSS3**:
  - Layouts with Flexbox and Grid.
  - Smooth animations and transitions.
  - Gradients, transparencies, and visual effects.
  - Responsiveness with media queries for different screen sizes.
  - Modular organization of styles in multiple files (`reset.css`, `style.css`, `responsive.css`, `menu.css`).
- **JavaScript**:
  - DOM manipulation for scroll animations and section display.
  - Modal control for project details and email sending.
  - Project data organized in an array of objects.
  - Scroll lock and release when opening/closing modals.
  - Form handling and integration with external services.
- **Font Awesome**: Icons to enrich the interface.
- **Google Fonts**: Poppins and Roboto fonts for modern typography.
- **FormSubmit**: Integration for sending messages from the contact form.

---

## 📄 Folder Structure

```
Portfólio-V1/
│
├── index.html
├── README.md
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── style.css
│   │   ├── responsive.css
│   │   ├── menu.css
│   │   └── fontawesome.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── ... (site and project images)
│   └── archives/
│       └── ... (resume PDF)
└── ...
```

---

## 🚀 Detailed Features

### Header and Menu

- Fixed top menu with transition effect on scroll (color and padding change).
- Responsive hamburger menu for mobile devices, controlled by checkbox and CSS.
- Smooth navigation between sections with anchors.
- Visual highlight on menu item hover.

### "Me" Section

- Presentation with name, title, and fixed background image.
- Animated arrow indicating to scroll down (CSS keyframes).
- Large font and visual highlight for the name.

### "About" Section

- Grid with profile image, descriptive text, and summary icons.
- Decorative graphic elements (triangles, green ball) for visual enrichment.
- Fade-in animation on scroll (`.visible` class added via JS).
- Detailed about-me text, with personal and professional information.
- Summary in icons with titles and descriptions.

### "Experience" Section

- Background with image and dark overlay for contrast and readability.
- List of known technologies with Font Awesome icons.
- Stylized and highlighted title.
- Link to download resume in PDF, with styled button.
- Space for professional experience history (with visual placeholder).

### "Projects" Section

- Project grid with image, name, and hover effect (fade-in overlay).
- Each project is a button that opens a detailed modal.
- Modal displays:
  - Project title
  - Highlight image
  - Detailed description (from a JS array)
  - Buttons to access the site and source code on GitHub
- Project data centralized in a JS array for easy maintenance and scalability.
- Modal can be closed by button or clicking outside the content.
- Body scroll lock when modal is open.

### "Contact" Section

- Social network icons (LinkedIn, Instagram, GitHub, Email) with animated hover.
- Email button opens modal with form (name, email, message).
- Integration with [FormSubmit](https://formsubmit.co/) for sending messages without backend.
- Thank you message after form submission.
- Animated rocket to scroll back to the top (with CSS animation).
- Copyright.

### Modals

- Project modal: shows details of the selected project, with smooth transition.
- Email modal: contact form, locks background scroll, can be closed by button or clicking outside.
- Reset modal state on close (form reappears, thank you message hides).

### Responsiveness

- Layout adapted for desktops, tablets, and mobile devices.
- Font sizes, spacing, and grid adjustments according to screen width.
- Hamburger menu and stacked columns on smaller screens.
- Adaptive images and grids.
- Tested on different breakpoints (400px, 768px, 1024px).

### Accessibility

- Use of semantic tags (`header`, `main`, `section`, `footer`).
- Adequate color contrast for readability.
- Visual focus on buttons and links.
- Alternative texts on images.
- Keyboard navigation in modals.

### Organization and Best Practices

- Separation of concerns: modular CSS, separate JS.
- Explanatory comments in the code.
- Clear and descriptive class and ID names.
- Use of CSS variables for colors and fonts (in appropriate files).
- Clean and organized file structure.
- Optimized external fonts (Google Fonts).

### Extras

- Use of gradients and visual effects for a more harmonious design.
- Hover effects and smooth transitions on buttons, cards, and icons.
- Use of `box-shadow` and `border-radius` for depth and smoothness.
- Use of `backdrop-filter` for blur effects in modals.
- Use of `setTimeout` for visual feedback when submitting forms.

---

## 📦 How to Run Locally

1. Clone this repository:
   ```
   git clone https://github.com/AlexOnn1/Portfólio-V1.git
   ```
2. Open the `index.html` file in your preferred browser.

---

## 📚 Featured Projects

- **Sieg's Portfolio**: Complete portfolio made only with HTML and CSS.
- **Landing Page**: Responsive landing page project using Flexbox and Grid.
- **Huddle Base**: Page based on a Frontend Mentor challenge, focused on responsiveness.
- **Shopping Cart**: Simple sales system with cart, registration, and history, developed in Python/Streamlit ([see online](https://sistema-de-vendas.streamlit.app/)).

---

## 📧 Contact

Feel free to contact me through the site form or the social networks in the footer.

---

Developed by Alexsander Albino.
