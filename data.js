const nama = "adi pratama jaya";
let usia = 11;

let namaData = document.getElementById('adipratamajaya');

namaData.innerText = "Adi pratama jaya";

function tampilkanUmur() {
// 2 < balita
// 2 > 10 bocah
//10 > 17 remaja
// 17 > 25 dEWASA
// 25 > orang tua

let syaratUsia = [
    "Maaf umur 2 sampai 10 tahun di larang masuk trima kasih","Selamat datang di pendaftaran ini kami ucapkan trima kasih telah mendaftar"
]

if(usia <=2){
    console.log(syaratUsia[0])
}else if (usia >2 && usia <= 10) {
    console.log(syaratUsia[0])
} else if (usia >=10 && usia <= 17){
    console.log(syaratUsia[1])
}
else {
    console.log("entahlah");
}

}

tampilkanUmur();

console.log(`nama ${nama}`)