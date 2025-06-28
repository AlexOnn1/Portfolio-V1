## 🇧🇷 Portuguese Version
# Portfólio V1

Este repositório contém o código-fonte do meu portfólio pessoal, desenvolvido para apresentar meus projetos, experiências, habilidades e facilitar o contato profissional. O projeto foi construído do zero utilizando HTML5, CSS3 e JavaScript puro, com foco em responsividade, acessibilidade e uma experiência visual agradável.

## ✨ Visão Geral

O Portfólio V1 é uma aplicação web estática, responsiva e moderna, que reúne:

- **Página inicial de apresentação**
- **Seção "Sobre mim"** com resumo e curiosidades
- **Seção de Experiência** com tecnologias, currículo e histórico profissional
- **Seção de Projetos** com modal detalhado para cada projeto
- **Seção de Contato** com redes sociais e formulário de envio de e-mail via modal

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
- **Font Awesome**: Ícones para enriquecer a interface.
- **Google Fonts**: Fontes Poppins e Roboto para tipografia moderna.

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

## 🚀 Funcionalidades Detalhadas

### Header e Menu

- Menu fixo no topo, com efeito de transição ao rolar a página.
- Menu hamburguer responsivo para dispositivos móveis.
- Navegação suave entre seções com âncoras.

### Seção "Me"

- Apresentação com nome, título e fundo com imagem fixa.
- Animação de seta indicando para rolar a página.

### Seção "About"

- Grid com imagem de perfil, texto descritivo e resumo em ícones.
- Elementos gráficos decorativos (triângulos, bola verde).
- Animação de fade-in ao rolar a página.

### Seção "Experience"

- Fundo com imagem e overlay escuro para contraste.
- Lista de tecnologias conhecidas com ícones.
- Link para download do currículo em PDF.
- Espaço para histórico de experiências profissionais.

### Seção "Projects"

- Grid de projetos com imagem, nome e efeito hover.
- Ao clicar, abre modal com:
  - Título do projeto
  - Imagem em destaque
  - Descrição detalhada
  - Botões para acessar o site e o código-fonte no GitHub
- Dados dos projetos centralizados em um array JS para fácil manutenção.

### Seção "Contact"

- Ícones de redes sociais (LinkedIn, Instagram, GitHub, E-mail).
- Botão de e-mail abre modal com formulário (nome, e-mail, mensagem).
- Integração com [FormSubmit](https://formsubmit.co/) para envio de mensagens.
- Mensagem de agradecimento após envio do formulário.
- Rocket animado para voltar ao topo da página.

### Modais

- Modal de projetos: exibe detalhes do projeto selecionado.
- Modal de e-mail: formulário de contato, bloqueia scroll do fundo.
- Fechamento dos modais por botão ou clique fora do conteúdo.

### Responsividade

- Layout adaptado para desktops, tablets e celulares.
- Ajustes de tamanhos de fontes, espaçamentos e grid conforme a largura da tela.
- Menu hamburguer e colunas empilhadas em telas menores.

### Acessibilidade

- Uso de tags semânticas.
- Contraste de cores adequado.
- Foco visual em botões e links.

## 📦 Como Executar Localmente

1. Clone este repositório:
   ```
   git clone https://github.com/AlexOnn1/Portfólio-V1.git
   ```
2. Abra o arquivo `index.html` no seu navegador preferido.

## 📚 Projetos em Destaque

- **Sieg's Portfolio**: Portfólio completo feito apenas com HTML e CSS.
- **Landing Page**: Projeto de landing page responsiva usando Flexbox e Grid.
- **Huddle Base**: Página baseada em desafio do Frontend Mentor, com foco em responsividade.
- **Shopping Cart**: Sistema de vendas simples, com carrinho, cadastro e histórico, desenvolvido em Python/Streamlit ([veja online](https://sistema-de-vendas.streamlit.app/)).

## 📧 Contato

Fique à vontade para entrar em contato pelo formulário do site ou pelas redes sociais no rodapé.

---

Desenvolvido por Alexsander Albino.

---

## 🌎 English Version

# Portfolio V1

This repository contains the source code for my personal portfolio, developed to showcase my projects, experience, skills, and to facilitate professional contact. The project was built from scratch using HTML5, CSS3, and pure JavaScript, focusing on responsiveness, accessibility, and a pleasant visual experience.

## ✨ Overview

Portfolio V1 is a static, responsive, and modern web application that brings together:

- **Intro presentation page**
- **"About Me" section** with summary and highlights
- **Experience section** with technologies, resume, and work history
- **Projects section** with detailed modal for each project
- **Contact section** with social networks and email form via modal

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
- **Font Awesome**: Icons to enrich the interface.
- **Google Fonts**: Poppins and Roboto fonts for modern typography.

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

## 🚀 Detailed Features

### Header and Menu

- Fixed top menu with transition effect on scroll.
- Responsive hamburger menu for mobile devices.
- Smooth navigation between sections with anchors.

### "Me" Section

- Presentation with name, title, and fixed background image.
- Animated arrow indicating to scroll down.

### "About" Section

- Grid with profile image, descriptive text, and summary icons.
- Decorative graphic elements (triangles, green ball).
- Fade-in animation on scroll.

### "Experience" Section

- Background with image and dark overlay for contrast.
- List of known technologies with icons.
- Link to download resume in PDF.
- Space for professional experience history.

### "Projects" Section

- Project grid with image, name, and hover effect.
- On click, opens modal with:
  - Project title
  - Highlight image
  - Detailed description
  - Buttons to access the site and source code on GitHub
- Project data centralized in a JS array for easy maintenance.

### "Contact" Section

- Social network icons (LinkedIn, Instagram, GitHub, Email).
- Email button opens modal with form (name, email, message).
- Integration with [FormSubmit](https://formsubmit.co/) for message sending.
- Thank you message after form submission.
- Animated rocket to scroll back to the top.

### Modals

- Project modal: shows details of the selected project.
- Email modal: contact form, locks background scroll.
- Modals can be closed by button or clicking outside the content.

### Responsiveness

- Layout adapted for desktops, tablets, and mobile devices.
- Font sizes, spacing, and grid adjustments according to screen width.
- Hamburger menu and stacked columns on smaller screens.

### Accessibility

- Use of semantic tags.
- Adequate color contrast.
- Visual focus on buttons and links.

## 📦 How to Run Locally

1. Clone this repository:
   ```
   git clone https://github.com/AlexOnn1/Portfólio-V1.git
   ```
2. Open the `index.html` file in your preferred browser.

## 📚 Featured Projects

- **Sieg's Portfolio**: Complete portfolio made only with HTML and CSS.
- **Landing Page**: Responsive landing page project using Flexbox and Grid.
- **Huddle Base**: Page based on a Frontend Mentor challenge, focused on responsiveness.
- **Shopping Cart**: Simple sales system with cart, registration, and history, developed in Python/Streamlit ([see online](https://sistema-de-vendas.streamlit.app/)).

## 📧 Contact

Feel free to contact me through the site form or the social networks in the footer.

---

Desenvolvido por Alexsander Albino.
