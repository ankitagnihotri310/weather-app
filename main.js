const api={
    key:"77b4d58ef6c57aebc2171bc37ca71674",
    baseurl:"http://api.openweathermap.org/data/2.5/"

}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then (weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name},${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText= dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>C</span>`;
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `${weather.main.temp_min}C / ${weather.main.temp_max}C`;



}
function dateBuilder(d){
    let months = ['Janauary','February','March','April','May','June','July','August','September','October', 
    'November', 'December'	];
    let days = ['Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday ', 'Sunday'];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}
























