const API_KEY="ed9632026de58de8afe721e48bccfc9f";

const url="https://api.openweathermap.org/data/2.5/weather?q=";



const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
 const weather_icon=document.querySelector('.weather-icon');


async function checkWeather(city){
     window.addEventListener('load',()=>checkWeather("Delhi"));

    try{
        const response=await fetch(`${url}${city}&units=metric&appid=${API_KEY}`);

        if(response.status==404){
            document.querySelector('.error').style.display="block";
            document.querySelector('.weather').style.display="none";
        }else{
            document.querySelector('.error').style.display="none";
        }

        const data= await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main == 'Clouds'){
            weather_icon.src="images/clouds.png";
        }
        else if(data.weather[0].main == 'Clear'){
            weather_icon.src="images/clear.png";
        }else if(data.weather[0].main == 'Humidity'){
            weather_icon.src="images/humidity.png";
        }else if(data.weather[0].main == 'Rain'){
            weather_icon.src="images/rain.png";
        }else if(data.weather[0].main == 'Snow'){
            weather_icon.src="images/snow.png";
        }else if(data.weather[0].main == 'Mist'){
            weather_icon.src="images/mist.png";
        }else if(data.weather[0].main == 'Drizzle'){
            weather_icon.src="images/drizzle.png";
        }else if(data.weather[0].main == 'Haze'){
            weather_icon.src="images/haze.png";
        }

        document.querySelector(".weather").style.display="block";


    }catch(err){
        console.log(err)
    }
}

    searchBtn.addEventListener('click',()=>{
        const city=searchBox.value;
        if(!city) return;

        checkWeather(city);
        
    })
        

