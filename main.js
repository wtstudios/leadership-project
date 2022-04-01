let currentSlide = 0;
let slides = [];
function createElement(tag, id = void 0, className = void 0) {
    const ele = document.createElement(tag);
    id && (ele.id = id);
    className && (ele.className = className);
    return ele;
  }

const s = p5 => {
    let assets;
    p5.setup = function() {
        assets = {
            puzzlePiece: p5.loadImage('puzzlepiece.svg'),
        };
        slides = [
            {
                title: 'My Name',
                mainImg: p5.loadImage('oh-henry.svg'),
            },
            {
                title: 'My Origin',
                mainImg: p5.loadImage('bcflag.svg'),
            },
            {
                title: 'My Communication Style',
                mainImg: p5.loadImage('caution.svg'),
            },
            {
                title: 'A global issue I care about',
                mainImg: p5.loadImage('covid.svg'),
            },
            {
                title: 'A hobby or passion',
                mainImg: p5.loadImage('programmingClue.svg'),
            },
            {
                title: 'A person who inspires me',
                mainImg: p5.loadImage('inspiring.svg'),
            },
            {
                title: '3 Big Questions',
                mainImg: p5.loadImage('3q.svg'),
            },
        ];
        let cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.75);
        cnv.position(0, 0, 'fixed');
        p5.angleMode(p5.DEGREES);
        p5.imageMode(p5.CENTER);
        window.addEventListener('resize', function() {p5.width = p5.windowWidth; p5.height = p5.windowHeight * 0.75;}, false);
        p5.frameRate(60);
    };
    p5.displaySlides = function(slide) {
        p5.push();
        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate(p5.sin(p5.frameCount * 4) * 2);
        p5.image(slides[slide].mainImg, 0, 0, (p5.width + p5.height) / 3, (p5.width + p5.height) / 3)
        p5.pop();
    }
    p5.draw = function() {
        p5.clear();
        p5.displaySlides(currentSlide);
    }
};
new p5(s);

const container = createElement('div', 'menu-container'),
buttonLeft = createElement('button', 'left'),
buttonRight = createElement('button', 'right'),
help = createElement('button', 'help'),
title = createElement('h1', 'title');
buttonLeft.textContent = '←';
buttonRight.textContent = '→';
title.textContent = 'My Name';
title.style.position.y = 100000;
help.textContent = '?';
document.body.appendChild(container).append(buttonLeft, buttonRight, help, title);
buttonLeft.addEventListener('click', e => {
    if (!e.button) {
        if(currentSlide != 0) {
            currentSlide--;
            title.textContent = slides[currentSlide].title;
        }
    }
});

buttonRight.addEventListener('click', e => {
    if (!e.button) {
        if(currentSlide != slides.length - 1) {
            currentSlide++;
            title.textContent = slides[currentSlide].title;
        }
    }
});
