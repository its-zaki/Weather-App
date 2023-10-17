const input = document.querySelector("#search");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const div = document.querySelector("#div-2");
div.style.display = "none"

form.addEventListener("submit", function show(e) {
    e.preventDefault();
    div.innerHTML =""
    if(input.value === ""){
        alert("Enter Any City")
        div.style.display = "none"
  }
  else{
  axios.get(`https://api.weatherapi.com/v1/current.json?key=9bd9bf4f66ae4776970212709231710&q=${input.value}`)
    .then((res) => {
      console.log(res.data);
      div.style.display = "block"
      div.innerHTML += `<div id="items">
      <div id="one">
      <h3 class="head-three">${res.data.location.name}
          <br><span class="para">${res.data.location.localtime}</span>
      </h3>
      <img class="img" src="${res.data.current.condition.icon}"
      " alt="weather icon">
  </div>
  <div id="two">
      <h1 class="temp">${res.data.current.temp_c} <sup class="deg">°</sup>C</h1>
      <h3 class="head-three feel">Feels Like ${res.data.current.feelslike_c}<sup class="deg">°</sup>C</h3>
  </div></div>`

    })
    .catch((error) => {
      console.log(error);
      
    });
}
input.value = ""
});
