import css from '../css/estilos.css';
import {firstMessage, delayedMessage} from './message.js'
import platziImg from '../img/platzi.png'
import platziVid from '../vid/que-es-core.mp4'

// console.log(`Hola mundo!, desde Webpack`)
document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', '50px')
img.setAttribute('height', '50px')
document.body.append(img)

const video = document.createElement('video')
video.setAttribute('src', platziVid)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)

console.log('Hola mundo!, desde Webpack en un webpack.config')
