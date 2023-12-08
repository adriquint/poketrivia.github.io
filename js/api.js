"use strict";

const watingSkills = document.getElementById("wating-skills") //usé
const skillsDescription = document.querySelector("#skills-description")
const pokeName = document.querySelector('#data-poke-name'); //si
const pokeId = document.querySelector('#data-poke-id'); //si
const pokeTypes = document.querySelector('#data-poke-types');
const pokeStats = document.querySelector('#data-poke-stats');

const dominio = `https://pokeapi.co`

const buscarPokemon = async() => {
   const url = `${dominio}/api/v2/pokemon/${numero+1}`;
   const resp = await fetch(url);      

   if(resp.ok) {
      console.log("-----Fetch-----")
      const datos = await resp.json();
      console.log(datos)
      const stats = datos.stats
      console.log(stats)
      const types = datos.types
      console.log(types)

      skillsDescription.removeAttribute("style")
      watingSkills.textContent ="";
      pokeName.innerHTML = datos.name;
      pokeId.innerHTML = "N° " + datos.id
      
      let accumulatorType = '';
      types.forEach(element => {
         accumulatorType+=
               `<div>
                    ${element.type.name}
               </div>`
               console.log(element.type.name)
         }
      );
      pokeTypes.innerHTML = accumulatorType;
        
      let accumulatorStat ='';
      stats.forEach(element => {
         accumulatorStat+=
               `<div class= 'atributos'>
                     <div>${element.stat.name}</div
                     <div>${element.base_stat}</div>
               </div>`
        }
      );
      pokeStats.innerHTML = accumulatorStat;

   } else {                                
      alert("Falló la petición");
   }
}