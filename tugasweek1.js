// Variabel dan Tipe Data
var nama1 = "Judy Hopps";   // string
var nama2 = "Nick Wilde";   // string

var jarakJudy = 3;          // number (km per hari)
var jarakNick = 2;          // number (km per hari)

var hariLatihan = 5;        // number

// Operator: Hitung total jarak
var totalJudy = jarakJudy * hariLatihan;
var totalNick = jarakNick * hariLatihan;

console.log("=== LATIHAN PENJAGA ZOOTOPIA ===\n");
console.log("Jarak lari per hari:");
console.log(nama1 + ": " + jarakJudy + " km");
console.log(nama2 + ": " + jarakNick + " km\n");

// Looping: laporan harian
for (var i = 1; i <= hariLatihan; i++) {
    console.log("Hari " + i + ":");
    console.log("- " + nama1 + " lari " + jarakJudy + " km");
    console.log("- " + nama2 + " lari " + jarakNick + " km\n");
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(nama1 + ": " + totalJudy + " km");
console.log(nama2 + ": " + totalNick + " km");
