"use strict";

// Массив мспользуемых чисел
let letters = "0123456789ABCDEF";

// Определение Hex цвета


// Создание цвета
function makeHexColor(){
    let color = '#';
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

let block = document.querySelector('.block')
let btn = document.querySelector('.button')
let text = document.querySelector('.text')

btn.onclick = function(){
    let clr = makeHexColor()
    block.style.backgroundColor = `${clr}`
    block.style.width = '100%'
    block.style.height = '100%'
    text.innerHTML = `Цвет: ${clr}`
}
makeHexColor()
block.style.backgroundColor = `${makeHexColor()}`
block.style.width = '100%'
block.style.height = '100%'
text.innerHTML = `Цвет: ${makeHexColor()}`

