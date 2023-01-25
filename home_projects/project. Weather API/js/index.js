/* index.js */
import {getWeather} from "./weather.js";

const citiesDropdown = document.querySelector("#cities-dropdown");

citiesDropdown.addEventListener("change", () => {
  if (citiesDropdown.value) {
     getWeather(citiesDropdown.value);
  }
});



// Следующий `[endpoint](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/amsterdam.json)` возвращает погоду для `Amsterdam`. [Этот](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/berlin.json) возвращает погоду для `Berlin`.

// Это не сегодняшняя погода, а данные по погоде в определенный день. Структура данных точно такая же, как и на сайте [Weatherstack.com](https://weatherstack.com/).

// В поле `<select>` пользователь может выбрать `Amsterdam` или `Berlin`. Завершите функцию `getWeather`, чтобы она сделала корректный `fetch` запрос и вызвала функцию `showTemperature` с температурой, которая пришла из **API**.

// Позанимайтесь отладкой кода, перейдите во вкладку `Network`, выберите низкую скорость интернета `Slow 3G` и посмотрите, за какое время отправляется запрос. Вы увидите, что отображение результата погоды происходит с небольшой задержкой.