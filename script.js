const jedi = [`Luke`];


//PUSh
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

//UNSHIFT
jedi.unshift("Yoda");
console.log(jedi);

//INDEX

console.log(jedi[1]);

//REMOVE
jedi.splice(2,2)
console.log(jedi);

jedi.shift("Yoda");// console.log(jedi.slice(1))

//2a 2b 2c
const sithLords = ["Darth Vader","Darth Sideous","Darth Maul"];// square for arrays
const imperialOfficers =["Grand Moff Tarkin","Orson Krennick"];
const starWarsvillans = sithLords.concat(imperialOfficers);
console.log(starWarsvillans);

console.log(starWarsvillans.slice(0,2,));
//3a 
const droids = [
    {
     astromech: `R2D2`,
     protocol: `C-3PO`,
     assasin:  `IG-88`
}
]

console.log(droids);

console.log(droids.protocol);

droids[assasin] = `IG-11`;

console.log(`Darth Vader`[6]);

console.log(sithlords.slice(-4,-3));

const starWarsmovies = [

{
episodeOne: `The Phantom Menace`,
episodeTwo: `Attack of the Clones`,
episodeThree: `Revenge of the Sith`
},

{
       
episodeFour: `A New Hope`,
episodeFive:`Attack of the Clones`,
episodeSix: `Revenge of the Sith`

},
{
episodeFive: `The Force Awakens`,
episodeSix: `The Last Jedi`,
episodeSeven: `The Rise of Skywalker`


},

]






starWarsmovies.splice(1,0 `Solo , Rouge One`);
console.log(starWarsmovies);
