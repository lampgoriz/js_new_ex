let APIkey = 'b576b32c49d545641ea3b96c463ad641';
let lat = 50.433334, lon = 30.516666, part = 'current';

// fetch(`//cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
//     .then(function (response) {return response.json()})
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function () {
//         console.log('error');
//     })

// let getData = async () => {
//     let promise = axios.get(`https://api.openweathermap.org/data/3.0/onecall?
//     lat=${lat}&lon=${lon}&exclude=${part}&appid=${APIkey}`);
//     return promise.then(response => {
//         console.log(response.data);
//         return response
//     })
// }

// let getData = async () => {
//     let promise = axios.get(`https://catfact.ninja/fact`);
//     return promise.then(response => {
//         console.log(response.data.fact);
//         return response.data.fact;
//     })
// }

getData();

//нашел способ менять  кельвины на градусы в api запросе (добавляем к запросу &units=metric). p.s за видео спасибо!