    // let a =fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=e1942513ab3b4eb3add53b08a06d45d4")
    // a.json
    // console.log(a);
    // https://api.weatherapi.com/v1/history.json?key=2a9d4ec9538442959fc122840240206&q=karachi&dt=2024-06-01&end=2024-06-05

    const input = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const form = document.querySelector("#form")
    const country = document.querySelector("#country")

    const body = document.querySelector("#body")
    const forcast = document.querySelector("#forcast")
    const forquery = document.querySelector("#forquery")
    const load = document.querySelector("#loading")
    const cityTemp = document.querySelector("#cityTemp")

    const pressure = document.querySelector("#pressure")
    const sunrise = document.querySelector("#sunrise")
    const sunset = document.querySelector("#sunsit")
    const temp = document.querySelector("#temp")

    const city = document.querySelector("#city")
    const date = document.querySelector("#date")
    const time = document.querySelector("#time")
    const cond = document.querySelector("#cond")
    const img = document.querySelector("#condImg")
    
    
    
    const tempquery = document.querySelector("#tempquery")
    const cityquery = document.querySelector("#cityquery")
    const condquery = document.querySelector("#condquery")
    const datequery = document.querySelector("#datequery")
    const imgquery = document.querySelector("#imgquery")
    

    const day1 = document.querySelector("#day1")
    const day2 = document.querySelector("#day2")
    const day3 = document.querySelector("#day3")
    

    const day1min = document.querySelector("#day1-1")
    const day1max = document.querySelector("#day1-2")
    const day2min = document.querySelector("#day2-1")
    const day2max = document.querySelector("#day2-2")
    const day3min = document.querySelector("#day3-1")
    const day3max = document.querySelector("#day3-2")
    


    const errordiv = document.querySelector("#errordiv")


//     document.addEventListener("DOmContentLoaded" , async () => {

    
        
//         let promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a9d4ec9538442959fc122840240206&q=karachi&days=7`)
//         return await promise.json()
        
        
        
        
//     console.log(defaultcity()); 
//     let a = defaultcity()
    
//     let Celcius = temp.innerHTML = `${a.current.temp_c}`
//     let floor = Math.floor(Celcius)
//     temp.innerHTML = floor + "°C"

//     pressure.innerHTML = `Air-Pressure: ${result.current.wind_kph} kph`
//     sunrise.innerHTML = `Sunrise: ${result.forecast.forecastday[0].astro.sunrise}`
//     sunset.innerHTML = `Sunset: ${result.forecast.forecastday[0].astro.sunset}`

//     city.innerHTML = `${result.location.name}`
//     date.innerHTML = `${result.location.localtime.split(' ')[0]}`
//     time.innerHTML = `${result.location.localtime.split(' ')[1]}`
//     // cond.innerHTML = `${result.current.condition.text}`
//     country.innerHTML = `${result.location.country}`


//     condquery.innerHTML = `${result.current.condition.text}`
//     cityquery.innerHTML = `${result.location.name}`
//     tempquery.innerHTML = floor + "°C"
//     datequery.innerHTML = `${result.location.localtime.split(' ')[0]}`


    
    
//     const days = [day1 ,day2 ,day3 ,day4 ,day5 ,day6, day7 ]
//     const daysMin = [day1min, day2min, day3min, day4min, day5min, day6min, day7min]
//     const daysMax = [day1max, day2max, day3max, day4max, day5max, day6max, day7max]
    
//     result.forecast.forecastday.forEach((forecastDay, index) => {
//         daysMin[index].innerHTML = `Min <br>${Math.floor(forecastDay.day.mintemp_c)}°C`
//         daysMax[index].innerHTML = `Max <br>${Math.floor(forecastDay.day.maxtemp_c)}°C`
//         days[index].innerHTML = `${forecastDay.date}`
//     })
// })



    












    

    async function getdata(cityName){
        try{
            load.innerHTML = `Loading...`;
            load.style.display = "block";
            body.style.display = "none";
            errordiv.style.display = "none"
            country.innerHTML = "Country Name"


        // let cityName = "karachi"
            
        // let promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2a9d4ec9538442959fc122840240206&q=${cityName}&days=7`)
        let promise =
          await fetch(`https://api.weatherapi.com/v1/forecast.json?key=84ea4837f2924ab7bad114838240807&q=${cityName}&days=7`);
            
            
        if (!promise.ok) {
            throw new Error(`City not found`)
        }

        let data =await promise.json()
            return data

        }catch (error) {
            throw error;
        } finally {
            load.style.display = "none";


    }
        // console.log(getdata()); 
}



    form.addEventListener("submit" , async (event) =>{
        event.preventDefault()    
        let value = input.value.trim()
        if(value !== ""){
        try{
                // load.innerHTML = `loading`;
                // body.style.display = "none";

                
            let result = await getdata(value)
            console.log(result);

            let Celcius = temp.innerHTML = `${result.current.temp_c}`
            let floor = Math.floor(Celcius)
            temp.innerHTML = floor + "°C"

            pressure.innerHTML = `Air-Pressure: ${result.current.wind_kph} kph`
            sunrise.innerHTML = `Sunrise: ${result.forecast.forecastday[0].astro.sunrise}`
            sunset.innerHTML = `Sunset: ${result.forecast.forecastday[0].astro.sunset}`

            city.innerHTML = `${result.location.name}`
            date.innerHTML = `${result.location.localtime.split(' ')[0]}`
            time.innerHTML = `${result.location.localtime.split(' ')[1]}`
            cond.innerHTML = `${result.current.condition.text}`
            img.src = `${result.current.condition.icon}`
            country.innerHTML = `${result.location.country}`


    
            condquery.innerHTML = `${result.current.condition.text}`
            imgquery.src = `${result.current.condition.icon}`
            cityquery.innerHTML = `${result.location.name}`
            tempquery.innerHTML = floor + "°C"
            datequery.innerHTML = `${result.location.localtime.split(' ')[0]}`


            
            
            const days = [day1 ,day2 ,day3 ]
            const daysMin = [day1min, day2min, day3min ]
            const daysMax = [day1max, day2max, day3max ]
            
            result.forecast.forecastday.forEach((forecastDay, index) => {
                daysMin[index].innerHTML = `Min <br>${Math.floor(forecastDay.day.mintemp_c)}°C`
                daysMax[index].innerHTML = `Max <br>${Math.floor(forecastDay.day.maxtemp_c)}°C`
                days[index].innerHTML = `${forecastDay.date}`
            })

            input.value = ""
            body.style.display = "block";
            
            }catch(error){
                errordiv.innerHTML = `<p>City Not Found</p>`;
                errordiv.style.display = "block";
                console.log(error);
                // country.innerHTML = "Country Name"
            // input.value = ""

        }
        
        }else{
            alert("please enter a city name")
        }
    })  
