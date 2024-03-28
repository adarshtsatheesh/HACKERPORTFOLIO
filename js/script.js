// menu bar
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function(){
    menu.classList.toggle('active')
}

// Animated Text Hero Section
document.addEventListener('DOMContentLoaded', function(){
    const typed = document.querySelector('.typed');
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  });
  
// Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.animate({
        left: '${posX}px',
        top: '${posY}px'
    }, {duration: 500, fill: "forwards"});
    
});

// skills



var btn = document.getElementById('btn');
var skillDiv = document.querySelector('.skill');
var toolsDiv = document.querySelector('.tools');

function toggleContent(content) {
    if (content === 'skill') {
        skillDiv.style.display = 'block';
        toolsDiv.style.display = 'none';
        btn.style.left = '0';
        document.querySelector('.toggle-btn.active').classList.remove('active');
        document.querySelector('.toggle-btn:nth-child(1)').classList.add('active');
    } else if (content === 'tools') {
        skillDiv.style.display = 'none';
        toolsDiv.style.display = 'block';
        btn.style.left = '110px';
        document.querySelector('.toggle-btn.active').classList.remove('active');
        document.querySelector('.toggle-btn:nth-child(2)').classList.add('active');
    }
}
// Set initial state (Skill active)
toggleContent('skill');