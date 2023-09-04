const menuItems = document.querySelectorAll('a');
const scrollSpySections = document.querySelectorAll('.section');

let currentSectionIndex = 0;

const scrollToSection = (index) => {
    const section = scrollSpySections[index];
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

menuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        currentSectionIndex = index;
        scrollToSection(currentSectionIndex);
    });
});

window.addEventListener('scroll', () => {
    scrollSpySections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            currentSectionIndex = index;
        }
    });
});

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentSectionIndex++;
    } else if (e.deltaY < 0) {
        currentSectionIndex--;
    }
    if (currentSectionIndex < 0) {
        currentSectionIndex = 0;
    } else if (currentSectionIndex >= scrollSpySections.length) {
        currentSectionIndex = scrollSpySections.length - 1;
    }
    scrollToSection(currentSectionIndex);
});
