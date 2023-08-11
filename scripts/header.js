const header = document.querySelector("header");
const hero = document.querySelector(".hero");

const heroOptions = {
    rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('header-scroll');
            } else {
                header.classList.remove('header-scroll');
            }
        })
    }, heroOptions); 

sectionOneObserver.observe(hero);