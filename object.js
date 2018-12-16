// Membuat object
// var mhs = { // object kosong
//     nama : "Sandika Galih", //properti
//     umur : 31, //properti
//     ips : [3.00, 2.50, 3.20], //properti
//     alamat : {
//         jalan : "Jl. abc No. 123",
//         kota : "Bandung",
//         provinsi : "Jawa Barat"
//     }
// };
//

// Membuat Object 2
// Object Literal
// nama = Key
var mhs1 = {
    nama : "Gilda Febriandini",
    nrp : "15753034",
    email : "gildafebriandini123@gmail.com",
    jurusan : "Ekonomi dan Bisnis"
}

var mhs2 = {
    nama : "Fadhilah Indah",
    nrp : "19753032",
    email : "fadhilahindah@gmail.com",
    jurusan : "Akutansi"
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
      mhs.nama = nama;
      mhs.nrp = nrp;
      mhs.email = email;
      mhs.jurusan = jurusan;
      return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', '15753038', 'noda@gmail.com', 'peternakan');

// Constractor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Figo', '1586897', 'figo@gmail.com', 'Perhutanan');
