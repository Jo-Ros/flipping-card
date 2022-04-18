// Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizesBtns = document.querySelectorAll('.sizes button');

// Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 17;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 17;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // Popout
    sneaker.style.transform = "translateZ(200px) rotateZ(-15deg)";
    title.style.transform = "translateZ(125px)";
    description.style.transform = "translateZ(80px)";
    sizes.style.transform = "translateZ(40px)";
})

// Animate out 
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";

    // PopBack
    sneaker.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})

// Active State on Size Btns
sizesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        const selectedSize = e.target;
        selectedSize.classList.toggle('active');
    })
})