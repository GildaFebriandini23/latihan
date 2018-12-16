//Menghitung Luas Dua Buah Kubus

function jumlahVolumeKubus(a, b){
    var total;
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeKubus(8, 3));
alert(jumlahVolumeKubus(10,15))