// task. Погода

// Функция willItRain получает строку JSON от фиктивного API погоды. Завершите функцию, чтобы она возвращала значение true, когда прогноз погоды показывает, что пойдет дождь и false в остальных случаях.

// /**
//  * @param {string} weatherApiResponse
//  */
// const willItRain = weatherApiResponse => {
// 	// my code
//     const itRain = JSON.parse(weatherApiResponse);
//     if (itRain.now.rainExpected === true) {
//         return console.log(true)
//     }
//     return console.log(false)
// }


// // Sample usage - do not modify
// willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}'); // true
// willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}'); // false




// ### task. Отправка сообщения

// Функция `prepareStatus` вызывается перед отправкой статуса пользователя в социальной сети.
// Завершите функцию, чтобы она возвращала строку содержащую `userId`, `status` и `location`, из объекта `data`.

// /**
//  * @param {string} status
//  * @param {string} location
//  */
// const prepareStatus = (status, location) => {
//     const userId = 42;
//     const data = {
//       userId,
//       status,
//       location
//     };
//       // my code
//       const string = JSON.stringify(data)
//       return console.log(string)
//   }
  
//   // Sample usage - do not modify
//   prepareStatus("My first post!", "Amsterdam"); 
//   // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
  
//   prepareStatus("Hello World!", "Berlin"); 
//   // '{"userId":42,"status":"Hello World!","location":"Berlin"}'



// ### task. Получение уведомления

// Завершите функцию, чтобы она сделала `fetch` запрос к [**API**](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json) и вернула результат.

// Вы должны увидеть `Promise` в консоли.

// const checkForNewNotifications = () => {
// 	// my code
//     const text = fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json");
//     return console.log(text);
// }

// // Sample usage - do not modify
// const result = checkForNewNotifications(); // Promise{<pending>}





// ### task. **Получение уведомления**

// Завершите функцию, чтобы она делала `fetch` запрос к **[API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json)**, преобразовывала ответ в формат **JSON** и возвращала результат.

// const checkForNewNotifications = () => {
// 	// my code
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//         .then(response => console.log(response.json()));
// }

// // Sample usage - do not modify
// checkForNewNotifications();


// fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// });



// ### task. Вывод в консоли
// Запустите код и посмотрите на вывод в консоли.

// const init = () => {
//     console.log("A");
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//         .then(response => response.json())
//         .then(data => {
//           console.log("B");
//           console.log(data);
//         })
//         console.log("C");
//   }
  
//   // Sample usage - do not modify
//   init();



//   ### task. Получение уведомлений

// Завершите функцию, чтобы она делала `fetch` запрос к [API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json), преобразовывала ответ в формат **JSON** и записывала полученные `data` в консоль.

// const checkForNewNotifications = () => {
// 	// my code
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//     .then(response => response.json())
//         .then(data => {
//           console.log(data);
//         })      
//   }

// // Sample usage - do not modify
// checkForNewNotifications();


// const checkForNewNotifications = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // visualize it then realize it's an array of objects
//         data.forEach(user => {
//           console.log(user.email);
//         });
//       });
//   }
  
  
//   // Sample usage - do not modify
//   const result = checkForNewNotifications();


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // visualize it then realize that it's an object
//     console.log(data.title);
//   });



// ### task. Показать новые уведомления

// Завершите функцию, чтобы она извлекла данные из **[API](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json)**, а затем вызвала функцию `showNewNotifications` с количеством непрочитанных уведомлений.

// const checkForNewNotifications = () => {
// 	// my code
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//       .then(response => response.json())
//       .then(data => {
//         showNewNotifications(data.count)
//         // console.log(data); // visualize it then realize that it's an object
//         // console.log(data.count);
//   });
// }


// // do NOT modify this function
// function showNewNotifications(count) {
//   console.log(`You have ${count} new notifications. Would you like to read them?`);
// }


// // Sample usage - do not modify
// checkForNewNotifications(); // You have 3 new notifications. Would you like to read them?


// ### task. **Получить завершенные главы**

// Представим, что вы пишете компонент `sidebar` с названиями глав из книги для отображения их в браузере. Списки глав находятся по `[endpoint](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json)`. Напишите `fetch` запрос и выведите массив объектов тех глав, которые являются `isCompleted`.


// const getChapters = () => {
// 	// my code    
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
//       .then(response => response.json())
//       .then(data => {
//         const getCompletedArray = [];
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].isCompleted) {
//                 getCompletedArray.push(data[i])
//             };
//         }
//         console.log(getCompletedArray);
//         return getCompletedArray     
//   });
// }

// // do NOT modify this function
// function displayCompletedChapters(chapters) {
//   console.log("Received", chapters);
// }

// // Sample usage - do not modify
// getChapters();

// Результат должен быть следующим:
// [
// 	{"id":1,"isCompleted":true,"title":"Basic Functions"}, 
// 	{"id":2,"isCompleted":true,"title":"Strings"}, 
// 	{"id":4,"isCompleted":true,"title":"Variables"}
// ]




// ### task. **Показать новые уведомления**

// Задача аналогична предыдущей, за исключением добавления обработки сетевых ошибок. Завершите функцию, чтобы она получала данные по `[endpoint](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json)`, затем вызывала функцию `showNewNotifications` для отображения количества непрочитанных уведомлений. После этого обработайте сетевые ошибки, записав их в консоль с помощью `console.error()`.

// const checkForNewNotifications = () => {
// 	// my code
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.count)
//         showNewNotifications(data.count)
//       })
//       .catch(error => {
//             console.error(error);
//             console.log("You're not connected")
//       });
// }


// // do NOT modify this function
// function showNewNotifications(count) {
//   console.log(`You have ${count} new notifications. Would you like to read them?`);
// }


// // Sample usage - do not modify
// checkForNewNotifications(); // You have 3 new notifications. Would you like to read them?




// ### task. **Получить завершенные главы**

// Вам дано решение задачи, которую мы делали [ранее](https://www.notion.so/JSON-b1be5acbce5c4c2fa1ca5cb1db29c2a6).

// Вас просят обработать сетевые ошибки. Кроме того, это достаточно загруженный `endpoint`, поэтому иногда он ломается (возвращает код ошибки). Обработайте ошибки **API** так же, как вы обрабатываете сетевые ошибки.

// const getChapters = () => {
//     fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data); // visualize it
//       const completedChapters = data.filter(chapter => chapter.isCompleted);
//       displayCompletedChapters(completedChapters);
//     })
//     .catch(error => {
//         console.error(error);
//         console.log("You're not connected")
//     });
//   }
  
//   // do NOT modify this function
//   function displayCompletedChapters(chapters) {
//     console.log("Received", chapters);
//   }
  
//   // Sample usage - do not modify
//   getChapters();