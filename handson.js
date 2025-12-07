// Menampilkan judul program di console
console.log("=== Mesin Pencetak Tiket Kebun Binatang Zootopia ===");

// Membuat array berisi data pengunjung secara langsung (hardcode)
// Setiap pengunjung memiliki properti 'nama' dan 'umur'
let pengunjung = [
    {nama: "Judy Hopps", umur: 4},   // Balita
    {nama: "Nick Wilde", umur: 35},  // Dewasa
    {nama: "Flash Sloth", umur: 65}, // Lansia
    {nama: "Gazelle", umur: 10}      // Anak-anak
];

// Menentukan harga tiket normal
let hargaTiket = 50000;

// Looping untuk mencetak tiket satu per satu sesuai jumlah pengunjung
for (let i = 0; i < pengunjung.length; i++) {

    // Mengambil nama pengunjung dari array
    let namaPengunjung = pengunjung[i].nama;
    // Mengambil umur pengunjung dari array
    let umur = pengunjung[i].umur;
    // Variabel untuk menyimpan keterangan harga tiket
    let pesan = "";

    // Percabangan untuk menentukan harga/diskon berdasarkan umur
    if (umur < 5) { 
        pesan = "Gratis! Untuk balita."; // Balita gratis
    } else if (umur <= 12) { 
        pesan = "Diskon 50%! Harga tiket: " + (hargaTiket / 2); // Anak-anak diskon 50%
    } else if (umur >= 60) { 
        pesan = "Diskon 30%! Harga tiket: " + (hargaTiket * 0.7); // Lansia diskon 30%
    } else { 
        pesan = "Harga normal: " + hargaTiket; // Dewasa bayar normal
    }

    // Menampilkan tiket ke console
    console.log("\n=== Tiket Kebun Binatang Zootopia ==="); // Judul tiket
    console.log("Nama Pengunjung :", namaPengunjung);     // Nama pengunjung
    console.log("Umur            :", umur + " tahun");     // Umur pengunjung
    console.log("Keterangan      :", pesan);             // Keterangan harga/diskon
}

// Menampilkan pesan akhir setelah semua tiket dicetak
console.log("\nSemua tiket selesai dicetak!");
