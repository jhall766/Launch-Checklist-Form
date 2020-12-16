// Write your JavaScript code here!
window.addEventListener('load', (e) =>{

   window.addEventListener('submit', (e) =>{
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementsByName("copilotName");
      let fuelLevel = document.getElementsByName("fuelLevel");
      let cargoMass = document.getElementsByName("cargoMass");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let shouldLaunch =true;
   
      let alert = ''
      let stop = 0
      //Validating all values are filled out
      
      if(pilotName.value === ""){
         alert = ("Pilot Name is required");
      }
      if(copilotName[0].value === ""){
         alert = (alert + "\nCo-Pilot Name is required");
      }
      if(fuelLevel[0].value === ""){
         alert = (alert + "\nFuel Level is required");
      }
      if(cargoMass[0].value === ""){
         alert = (alert + "\nCargo Mass is required");
      }
      //validating the Fuel Level and CargoMass are Numbers
      if(fuelLevel[0].value !== "" && isNaN(fuelLevel[0].value)) {
         alert = (alert + "\nPlease Enter a Number for Fuel Level")
      }
      if(cargoMass[0].value !== "" && isNaN(cargoMass[0].value)) {
         alert = (alert + "\nPlease Enter a Number for Cargo Mass")
      }
      if(alert !== ""){
         window.alert(alert);
      }
    
      //modifying the Faulty Items List
      pilotStatus.innerHTML = `${pilotName.value} Ready`
      copilotStatus.innerHTML = `${copilotName[0].value} Ready`

      const isValid = (value) =>{
         if((!isNaN(value)) && value !== ''){
            return true
         }
         return false
      };

      console.log(isValid(fuelLevel[0].value))
      //Check if Fuel Level is above 10k
      if(fuelLevel[0].value < 10000 && isValid(fuelLevel[0].value)){
         fuelStatus.innerHTML = `Fuel Level is too low, needs to be above 10,000L`
         shouldLaunch = false;         
      }
      

      //check if Cargo Mass is too Much
      if(cargoMass[0].value > 10000 && isValid(cargoMass[0].value)){
         cargoStatus.innerHTML = `Cargo Mass is ${cargoMass[0].value}kg LOSE SOME WEIGHT!`
         shouldLaunch = false;         

      }

      //checking if the Ship Should Launch
      let launchStatusCheck = document.getElementById("launchStatusCheck")
      if(!shouldLaunch && isValid(fuelLevel[0].value) && isValid(cargoMass[0].value)){
        faultyItems.style.visibility = 'visible'
         launchStatus.innerHTML = 'Do not Launch'
         launchStatusCheck.style.backgroundColor = 'red'
      }
      if (shouldLaunch && isValid(fuelLevel[0].value) && isValid(cargoMass[0].value)){
         launchStatus.innerHTML = 'Clear to Launch'
         launchStatusCheck.style.backgroundColor = 'Green'
         faultyItems.style.visibility = 'hidden'
      }
      e.preventDefault()
   });
   
   const dice = () =>{
      return Math.floor(Math.random() * Math.floor(6));
   }

 const fetchPlanetinfo = async (i) =>{
 const res = await fetch('https://handlers.education.launchcode.org/static/planets.json')
const data = await res.json();
   return data[i]
}
const data = fetchPlanetinfo(dice()).then(function(response){

let missionTarget = document.getElementById("missionTarget");
// // This block of code shows how to format the HTML once you fetch some planetary JSON!
missionTarget.innerHTML = `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${response.name}</li>
   <li>Diameter: ${response.diamete}</li>
   <li>Star: ${response.star}</li>
   <li>Distance from Earth: ${response.distance}</li>
   <li>Number of Moons: ${response.moons}</li>
</ol>
<img src="${response.image}">"`
});



});