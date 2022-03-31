let currentSlide = 0;
let slides = [];
function createElement(tag, id = void 0, className = void 0) {
    const ele = document.createElement(tag);
    id && (ele.id = id);
    className && (ele.className = className);
    return ele;
  }

  const container = createElement('div', 'menu-container'),
    buttonLeft = createElement('button', 'left'),
    buttonRight = createElement('button', 'right'),
    help = createElement('button', 'help');

    buttonLeft.textContent = '←';
    buttonRight.textContent = '→';
    help.textContent = '?';

    document.body.appendChild(container).append(buttonLeft, buttonRight, help);
    buttonLeft.addEventListener('click', e => {
        if (!e.button) {
            if(currentSlide != 0) {
                currentSlide--;
            }
        }
    });

    buttonRight.addEventListener('click', e => {
        if (!e.button) {
            if(currentSlide != slides.length - 1) {
                currentSlide++;
            }
        }
  });

const s = p5 => {
    let assets;
    p5.setup = function() {
        assets = {
            puzzlePiece: p5.loadImage('puzzlepiece.svg'),
        };
        slides = [
            {
                title: 'My Name',
                bgTint: '#303030',
                mainImg: p5.loadImage('oh-henry.svg'),
            },
            {
                title: 'My Name',
                bgTint: '#303030',
                mainImg: p5.loadImage('puzzlePiece.svg'),
            },
        ];
        p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.75);
        p5.angleMode(p5.DEGREES);
        p5.imageMode(p5.CENTER);
        window.addEventListener('resize', function() {p5.width = p5.windowWidth; p5.height = p5.windowHeight * 0.75;}, false);
        p5.frameRate(60);
    };
    p5.displaySlides = function(slide) {
        p5.push();
        p5.tint(slides[slide].bgTint);
        p5.translate(p5.width / 2, p5.height / 2);
        p5.rotate(p5.cos(p5.frameCount * 2) * 5);
        p5.image(assets.puzzlePiece, 0, 0, (p5.width + p5.height) / 6, (p5.width + p5.height) / 6);
        p5.rotate(-p5.cos(p5.frameCount * 10) * 10);
        p5.noTint();
        p5.rotate(p5.sin(p5.frameCount * 10) * 10);
        p5.image(slides[slide].mainImg, 0, 0, (p5.width + p5.height) / 3, (p5.width + p5.height) / 3)
        p5.pop();
    }
    p5.draw = function() {
        p5.clear();
        p5.displaySlides(currentSlide);
    }
};
new p5(s);