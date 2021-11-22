const portfolio = document.querySelector('#sub-portfolio');
const sub = document.querySelector('#portfolio');

portfolio.addEventListener('click', (e) => {
    sub.style.display = "block";
    console.log(e)
})

const icon = document.querySelector('.icon');
const span = document.querySelector('span');

icon.on('click', () => {
    span.toggleClass("cancel")
})

