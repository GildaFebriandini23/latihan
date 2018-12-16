var angka = prompt('Masukkan angka :');

if (angka % 2 === 0){
    alert(angka + ' adalah Genap ');
}
else if (angka % 2 === 1){
    alert(angka + ' adalah Ganjil');
} else {
    alert('yang anda masukkan bukan angka');
}