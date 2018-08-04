import css from '../css/estilos.css';
import {firstMessage, delayedMessage} from './message.js'
import platziImg from '../img/platzi.png'
import data from './teachers.json'
import renderToDOM from './render-to-DOM.js'

console.log(data)

data.teachers.forEach((teacher) => {
    const element = document.createElement('li')
    element. textContent = teacher.name
    renderToDOM(element)
})

// console.log(`Hola mundo!, desde Webpack`)
document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')
document.body.append(img)
console.log('Hola mundo!, desde Webpack en un webpack.config')
