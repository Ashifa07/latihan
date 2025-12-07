// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const choices = ["batu", "kertas", "gunting"];

// function getBotChoice() {
//     return choices[Math.floor(Math.random() * choices.length)];
// }

// function getResult(player, bot) {
//     if (player === bot) return "DRAW";
//     if (
//         (player === "batu" && bot === "gunting") ||
//         (player === "kertas" && bot === "batu") ||
//         (player === "gunting" && bot === "kertas")
//     ) return "KAMU MENANG";

//     return "KAMU KALAH";
// }

// rl.question("Pilih (batu/kertas/gunting): ", answer => {
//     const player = answer.toLowerCase();
//     if (!choices.includes(player)) {
//         console.log("Pilihan salah!");
//         rl.close();
//         return;
//     }

//     const bot = getBotChoice();
//     console.log("Bot:", bot);
//     console.log(getResult(player, bot));
//     rl.close();
// })

// String
// const firstName = 'Ronaldo'; // petik tunggal
// const lastName = 'Wati'; // petik ganda
// const hari = "jum'at"; // petik tunggal di dalam petik ganda

// console.log(firstName, lastName, hari);

// Number
// const bulatPositif = 10;
// const bulatNegatif = -10;
// const desimalPositif = 4.5;
// const desimalNegatif = -4.5;
// console.log(bulatPositif,bulatNegatif, desimalPositif, desimalNegatif );

// Boolean
// const sudahMakan = true;
// const sudahNgopi = false;
// console.log(sudahMakan, sudahNgopi)

// NULL
// let mahasiswa = null;
// console.log(mahasiswa); // null

// mahasiswa = {
//   nama: 'Ashifa',
//   jurusan: 'Informatika',
// };
// console.log(mahasiswa); // {nama: "Ashifa", jurusan: "Informatika"}

// array
// var products = ["Flash disk", "SDD", "Monitor"];
// console.log(products[1]);

// FORLOOP
// for(let i = 1; i < 11; i++) {
//   console.log(`Angka: ${i}`)
// }

// let i = 1;
// while (i < 11) {
//   console.log(`Angka: ${i}`)
//   i++
// }


// let i = 1;
// do {
//   console.log(`Angka: ${i}`)
//   i++
// } while (i < 11)

// var title = "Belajar Pemrograman Javascript";
// console.log(title);

// const cat = new Object({ name: 'Chiko' })
// console.log(cat)
