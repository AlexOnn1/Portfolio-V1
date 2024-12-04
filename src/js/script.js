window.addEventListener('scroll', function() {
    var menu = document.querySelector('.container-menu');
    if (window.scrollY > 350) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }

    var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            var position = section.getBoundingClientRect();
            if(position.top < window.innerHeight - 100) {
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
        {title: "Sieg's Portfolio",
            image: "./src/images/tela-sieg.png",
            description: "My first big project, here we have a portfolio project with Sieg's work, with 3 pages showing his Work, Studies and a whole page about him. I only used HTML5 and CSS3 in the development as I hadn't studied JavaScript yet, so it was a great opportunity to test my knowledge, I was very satisfied with the project and so was Sieg.",
            siteLink: "https://alexonn1.github.io/Sieg/",
            githubLink: "https://github.com/AlexOnn1/Sieg"
        },
        {title: "Landing Page",
            image: "./src/images/tela-landing-page.png",
            description: "A project that I made to finish the HTML5 and CSS3 advanced module from the DevQuest course, in this landing page I used all the concepts of Flexbox and Grid that I learned in the module. Honestly I'm proud with the result, I think I've advanced a lot in my coding knowledge ",
            siteLink: "https://alexonn1.github.io/landing-page-com-grid/",
            githubLink: "https://github.com/AlexOnn1/landing-page-com-grid"
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
