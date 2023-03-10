//Rappel des types de données
/* Rappel des types de données */

let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux

let array = ["Bordeaux", "Montpellier", "Paris"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 25, true, [1, 2], { nom: "Denis" }];

//

let object = {
  pseudo: "Denis",
  age: 33,
  techno: ["JS", "React", "NodeJs"],
  admin: false,
};

// console.log(object.techno[0][1]);
// console.log(object);
// ajouter une valeur a un objet
// object.adress = "22 rue du code";

let data = [
  {
    pseudo: "Denis",
    age: 33,
    techno: ["JS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    techno: ["JS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    techno: ["JS", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

// -----------------------------
//les structures de controle
//------------------------------

if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //valeur si faux
}

//while

let w = 0;

while (w < 10) {
  w++;
  //   console.log("la valeur de w est : " + w);
}

//do while

let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// les boucles for

for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age}ans</li>`;
}

//on déclare d'abord la valeur de i / jusqu'où on boucle / incrémenter i
for (i = 0; i < data.length; i++) {
  //   console.log(data[i].techno[0]);
  //   document.body.innerHTML += `<li>Je m'appelle ${data[i].pseudo} et j'ai été bouclé avec une boucle for</li>`;
}

//Switch
document.body.addEventListener("click", (e) => {
  //   document.body.innerHTML += `<li>Vous avez cliqué sur ${e.target.id}</li>`;

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// ----------------
//  Méthodes String
// ----------------

let string2 = "Javascript est un langage orienté objet";

console.log(typeof string2);
console.log(eval("1" + 2)); // 12
console.log(parseInt("1") + 2); // 3
console.log(isNaN(string2)); // true
console.log(string2.length); // 39
console.log(string2[string2.length - 1]); // t
console.log(string2.indexOf("t")); // 9

let newString = string2.slice(10); // est un langage orienté objet
newString = string2.slice(4, 25); // script est un langage
console.log(newString);

console.log(string2.split(" ")); // ["javascript", "est", "un", "langage", "orienté", "objet"]

console.log(string2.toLowerCase()); // Javascript est un langage orienté objet
console.log(string2.toUpperCase()); // JAVASCRIPT EST UN LANGAGE ORIENTÉ OBJET

console.log(string2.replace("Javascript", "PHP")); // PHP est un langage orienté objet

//-----------------
// Méthodes Numbers
//-----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

console.log(number2.toFixed(1)); // 42.1
console.log(parseInt("43"));
console.log(parseInt(numberString)); // 42 il prend le premier int
console.log(parseFloat(numberString)); // 42.12

// Math

console.log(Math.PI); // 3.14159265358979
console.log(Math.round(4.6)); // 5 arrondi au plus proche
console.log(Math.floor(4.8)); // 4 arrondi entier inférieur
console.log(Math.ceil(4.1)); // 5 arrondi entier supérieur
console.log(Math.pow(2, 4)); // 16 2eme valeur est la puissance

console.log(Math.random()); // nb aléatoire entre 0 et 1
console.log(Math.floor(Math.random() * 51)); // nb aléatoire entre 0 et 50

//---------------
//Méthodes Arrays
//---------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
//ou let newArray = [...array3,...array4] spread operator

console.log(newArray);

console.log(newArray.join("@@")); // Javascript@@Php@@Python@@Ruby@@Solidity

console.log(newArray.slice(3)); // ["Ruby", "Solidity"]
console.log(newArray.slice(2, 4)); // ["Python", "Ruby"]
console.log(newArray.indexOf("Python")); // 2

newArray.forEach((language) => {
  console.log(language);
});
// Javascript
// php
// Python
// Ruby
// Python

console.log(array3.every((language) => language === "Php")); // false  cherche si la valeur est présente dans chacune des itérations
console.log(array3.some((language) => language === "Php")); // true cherche si la valeur est présente dans une des itérations

// let shift = array3.shift(); // retire le 1er élément du tableau. Le tableau garde les autres valeurs
// console.log(shift); // Javascript
console.log(array3); // ["php", "Python"]

// console.log(array3.pop()); //récupère et retire le dernier élément du tableau

const restArray = array3.splice(1, 1, "C++"); // remplace dans le tableau initial l'index donnée par la nouvelle valeur. L'ancienne valeur est stockée dans la constante
console.log(restArray); // ["php"]
console.log(array3); // ["Javascript", "C++", "Python"]

// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];

// prendre toutes les données du tableau et les additionner ensemble
console.log(arrayNumber.reduce((x, y) => x + y));

console.log(arrayNumber.push(17));
console.log(arrayNumber);

// FILTER, SORT, MAP   filtrer/ trier / lister(foreach)

console.log(arrayNumber.filter((number) => number > 10)); // filtre tous les nombres supérieurs à 10 et les met dans un tableau
console.log(arrayNumber.sort()); // classe dans l'ordre croissant en commençant par le 1er index, puis le second etc
console.log(arrayNumber.sort((a, b) => a - b)); // trie les nombres dans l'ordre croissant

arrayNumber.map((number) => (document.body.innerHTML += ``));
//meilleure présentation du map
document.body.innerHTML += arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join("................");
