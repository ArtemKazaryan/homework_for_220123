/* index.js */
import { waitForCompleteClick } from "./helpers.js";

let promise = waitForCompleteClick(); 
promise.then(console.log("Complete clicked")) 

// У вас есть функция waitForCompleteClick, которая завершится, когда пользователь нажмет на кнопку Complete. Обновите код в index.js, чтобы console.log("Complete clicked"); запускался после нажатия на кнопку.