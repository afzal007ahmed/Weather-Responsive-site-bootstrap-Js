const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6484e6bdfmsh10496159871666dp1ad53ejsn6573e8751929',
		'X-RapidAPI-Host': 'weather-api-by-any-city.p.rapidapi.com'
	}
};
const getData = (city) => {
place.innerHTML = city.toUpperCase() ;
fetch(`https://weather-api-by-any-city.p.rapidapi.com/weather/${city}`, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)

   if( response.current== undefined ){
        temp.innerHTML = '--';
        min_temp.innerHTML = '--';
        max_temp.innerHTML = '--';
        humidity.innerHTML = '--';
        feels_like.innerHTML = '--';
        cloud_pct.innerHTML = '--';
        wind_speed.innerHTML ='--';
        wind_degrees.innerHTML = '--';
        sunset.innerHTML = '--';
        temp1.innerHTML = '--';
        hum1.innerHTML = '--';
        wind1.innerHTML = '--';
        temp2.innerHTML = '--';
        hum2.innerHTML = '--';
        wind2.innerHTML = '--';
        temp3.innerHTML = '--';
        hum3.innerHTML = '--';
        wind3.innerHTML = '--';
        temp4.innerHTML = '--';
        hum4.innerHTML = '--';
        wind4.innerHTML = '--';
        temp5.innerHTML = '--';
        hum5.innerHTML = '--';
        wind5.innerHTML = '--';
        temp6.innerHTML = '--';
        hum6.innerHTML ='--';
        wind6.innerHTML = '--';
        
        return;
    } 
    else{
     temp.innerHTML = response.current.temp_c;
     min_temp.innerHTML = response.current.temp_f;
     max_temp.innerHTML = response.current.uv;
     humidity.innerHTML = response.current.humidity;
     feels_like.innerHTML = response.current.feelslike_c;
     cloud_pct.innerHTML = response.current.feelslike_f;
     wind_speed.innerHTML = response.current.wind_kph;
     wind_degrees.innerHTML = response.current.wind_degree;
     sunset.innerHTML = response.current.vis_km;
     staticdata("New York");
     staticdata("Delhi");
     staticdata("Los Angeles");
     staticdata("Venice");
     staticdata("Kolkata");
     staticdata("Paris");
    }

    }

    )
	.catch(err => console.error(err));
}

const staticdata = ( value ) => {
    fetch(`https://weather-api-by-any-city.p.rapidapi.com/weather/${value}`, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        if( value == 'New York'){
        temp1.innerHTML = response.current.temp_c;
        hum1.innerHTML = response.current.humidity;
        wind1.innerHTML = response.current.wind_degree;
        }
        if( value == "Delhi"){
            temp2.innerHTML = response.current.temp_c;
            hum2.innerHTML = response.current.humidity;
            wind2.innerHTML = response.current.wind_degree;
      }
      if( value == "Los Angeles"){
        temp3.innerHTML = response.current.temp_c;
        hum3.innerHTML = response.current.humidity;
        wind3.innerHTML = response.current.wind_degree;
        }
         if( value == "Venice"){
            temp4.innerHTML = response.current.temp_c;
            hum4.innerHTML = response.current.humidity;
            wind4.innerHTML = response.current.wind_degree;
        }
        if( value == "Kolkata"){
            temp5.innerHTML = response.current.temp_c;
        hum5.innerHTML = response.current.humidity;
        wind5.innerHTML = response.current.wind_degree;
            }
            if( value == "Paris"){
                temp6.innerHTML = response.current.temp_c;
                hum6.innerHTML = response.current.humidity;
                wind6.innerHTML = response.current.wind_degree;
                }
    })
	.catch(err => console.error(err));
}




search.addEventListener( "click" , (e) =>{
    e.preventDefault() ;
    getData( boxnew.value ) ;
}
)
one.addEventListener("click" , (e) => {
    e.preventDefault();
    getData("Delhi");
})
two.addEventListener("click" , (e) => {
    e.preventDefault();
    getData("Mumbai");
})
three.addEventListener("click" , (e) => {
    e.preventDefault();
    getData("Bengaluru");
})
four.addEventListener("click" , (e) => {
    e.preventDefault();
    getData("Amritsar");
})
boxnew.addEventListener( "keyup" , (e) => {
    e.preventDefault();
    getData( boxnew.value ) ;
})