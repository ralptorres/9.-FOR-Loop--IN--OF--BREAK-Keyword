let names = ["Ralp", "Roche", "Raymond", "Raiven", "Goking"];
let search = "roche";
let isFound = false;

for (let i = 0; i < names.length; i++) {
  if (search.toLowerCase() === names[i].toLowerCase()) {
    console.log(`Found ${names[i]}!`);
    isFound = true;
    break;
  }
}

if (!isFound) console.log("Not Found!");

// FOR Loop IN

// for (let i in names) {
//   if (search.toLowerCase() === names[i].toLowerCase()) {
//     console.log(`Found ${names[i]}!`);
//     isFound = true;
//     break;
//   }
// }

// if (!isFound) console.log("Not Found!");

// FOR Loop OF

// for (let people of names) {
//   if (search.toLowerCase() === people.toLowerCase()) {
//     console.log(`Found ${people}!`);
//     isFound = true;
//     break;
//   }
// }

// if (!isFound) console.log("Not Found!");

// Other logic

// for (let i = 0; i < names.length; i++) {
//     if (search.toLowerCase() === names[i].toLowerCase()) {
//       console.log(`Found ${names[i]}!`);
//       break;
//     } else if (i === names.length - 1) {
//       console.log("Not found!");
//     }
//   }
