// let a =fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=e1942513ab3b4eb3add53b08a06d45d4")
// a.json
// console.log(a);
// https://api.weatherapi.com/v1/history.json?key=2a9d4ec9538442959fc122840240206&q=karachi&dt=2024-06-01&end=2024-06-05


    async function getdata(){
        try{
        let promise =await fetch("https://api.weatherapi.com/v1/forecast.json?key=2a9d4ec9538442959fc122840240206&q=karachi&days=7")
        let data = promise.json()
        return data
        } catch(error){
            console.log(error)
        }

    }
    console.log(getdata()); 