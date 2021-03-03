// Adding elements to animate
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const pokemon = document.querySelector('.pokemon img')
const poketitle = document.querySelector('.poketitle')
const pokeinfo = document.querySelector('.pokeinfo')
const buttons = document.querySelector('.buttons')


// Animating section
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${(-xAxis)}deg)`
});

// Mouse in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // Pop out
    pokemon.style.transform = 'translateZ(50px) rotateZ(-10deg)';
    poketitle.style.transform = 'translateZ(50px)';
    pokeinfo.style.transform = 'translateZ(50px)';
    buttons.style.transform = 'translateZ(50px)';
})

// Mouse out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    card.style.transition = 'all 0.5s ease';
    // Pop back
    pokemon.style.transform = 'translateZ(0px) rotateZ(0deg)';
    poketitle.style.transform = 'translateZ(0px)';
    pokeinfo.style.transform = 'translateZ(0px)';
    buttons.style.transform = 'translateZ(0px)';
})
