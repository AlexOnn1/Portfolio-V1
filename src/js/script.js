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