window.addEventListener('scroll', function () {
    var menu = document.querySelector('.container-menu');
    if (window.scrollY > 270) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }

    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        var position = section.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalLinkSite = document.getElementById('modal-link-site');
    const modalLinkGitHub = document.getElementById('modal-link-github');
    const closeModal = document.querySelector('.close-modal');

    const projectButtons = document.querySelectorAll('.project');

    const projectData = [
        {
            title: "Sieg's Portfolio",
            image: "./src/images/tela-sieg.png",
            description: "My first big project, here we have a portfolio project with Sieg's work, with 3 pages showing his Work, Studies and a whole page about him. I only used HTML5 and CSS3 in the development as I hadn't studied JavaScript yet, so it was a great opportunity to test my knowledge, I was very satisfied with the project and so was Sieg.",
            siteLink: "https://alexonn1.github.io/Sieg/",
            githubLink: "https://github.com/AlexOnn1/Sieg"
        },
        {
            title: "Landing Page",
            image: "./src/images/tela-landing-page.png",
            description: "A project that I made to finish the HTML5 and CSS3 advanced module from the DevQuest course, in this landing page I used all the concepts of Flexbox and Grid that I learned in the module. Honestly I'm proud with the result, I think I've advanced a lot in my coding knowledge ",
            siteLink: "https://alexonn1.github.io/landing-page-com-grid/",
            githubLink: "https://github.com/AlexOnn1/landing-page-com-grid"
        },
        {
            title: "Huddle Base",
            image: "./src/images/tela-huddle.png",
            description: "In this project, I developed a responsive landing page based on the Frontend Mentor challenge. The focus was on creating a pixel-perfect design that adapts seamlessly to different screen sizes. This project allowed me to refine my HTML and CSS skills while implementing best practices for accessibility and responsiveness. ",
            siteLink: "https://alexonn1.github.io/projeto-huddle-base/",
            githubLink: "https://github.com/AlexOnn1/projeto-huddle-base"
        }
    ];

    projectButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const data = projectData[index];
            modalTitle.textContent = data.title;
            modalImage.src = data.image;
            modalDescription.textContent = data.description;
            modalLinkSite.href = data.siteLink;
            modalLinkGitHub.href = data.githubLink;

            modal.style.display = 'flex';
            document.body.classList.add('body-no-scroll');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('body-no-scroll');
        }
    });
});


// Seletores
const emailButton = document.querySelector('.email-button');
const emailModal = document.getElementById('email-modal');
const closeEmailModal = document.querySelector('.close-email-modal');
const emailFormContainer = document.getElementById('email-form-container');
const thankYouMessage = document.getElementById('thank-you-message');
const emailForm = document.getElementById('email-form');

// Função para abrir o modal
function openEmailModal() {
    emailModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloqueia o scroll
}

// Função para fechar o modal
function closeEmailModalFunc() {
    emailModal.style.display = 'none';
    document.body.style.overflow = ''; // Libera o scroll
}

// Função para mostrar a mensagem de agradecimento
function showThankYouMessage() {
    // Esconde o formulário
    emailFormContainer.style.display = 'none';
    // Exibe a mensagem de agradecimento
    thankYouMessage.style.display = 'block';
}

// Função para resetar o modal ao ser fechado
function resetModal() {
    // Volta o formulário à visibilidade
    emailFormContainer.style.display = 'block';
    // Esconde a mensagem de agradecimento
    thankYouMessage.style.display = 'none';
}

// Eventos de abrir e fechar o modal
emailButton.addEventListener('click', (e) => {
    e.preventDefault();
    openEmailModal();
});

closeEmailModal.addEventListener('click', () => {
    closeEmailModalFunc();
    resetModal(); // Resetar o modal ao fechar
});

// Fecha o modal ao clicar fora do conteúdo
emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
        closeEmailModalFunc();
        resetModal(); // Resetar o modal ao fechar
    }
});

// Adiciona comportamento para enviar o formulário
emailForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio imediato do formulário para manipulação

    // Envia o formulário após um pequeno delay
    setTimeout(() => {
        emailForm.submit(); // Submete o formulário para o URL
    }, 200); // Aguarda 200ms antes de submeter

    // Mostra a mensagem de agradecimento após o envio
    showThankYouMessage();
});
