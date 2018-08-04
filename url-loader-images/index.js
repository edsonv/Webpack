import css from './estilos.css';
import {firstMessage, delayedMessage} from './message.js'
import platziImg from './platzi.png'

// console.log(`Hola mundo!, desde Webpack`)
document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')
document.body.append(img)
console.log('Hola mundo!, desde Webpack en un webpack.config')
