const yesBtn =document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function
() {
    alert('Sabia que ibas a decir que si UwU')
});

const noBtm =document.querySelector('#noBtn');

noBtm.addEventListener('mouseover',function
() {
    const ramdomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtm.style.setProperty('top',randomY+'%');
    noBtm.style.setProperty('left',ramdomX+'%');
    noBtm.style.setProperty('tansform',`traslate(-${ramdomX}%,-${ramdomY}%)`);
})