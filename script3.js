function Nilai() {

    var n = prompt('masukkan jumlah user : ');

    if (n != null){
        var nilai = 0;
        var  mutu = "";
            for (var i=1; i<=n; i++){
                var u = parseInt(prompt('Masukkan nilai user '+ i + ":"));
                console.log("Perulangan Ke "+ i + "=" + u);
                nilai += u;
            }
            var hasil = nilai / n ;
            if (hasil >= 80){
                mutu = "A";
            } else if (hasil >=65 && hasil<80){
                mutu = "B";
            } else{
                mutu = "C";
            }

            alert('Nilai anda adalah ' + hasil + ' nilai mutu anda adalah ' + mutu);
            var t = confirm('Mau coba lagi gak ??? ');
            if (t != true){
                alert('Terimakasih');
            }

    } else {
        var tanya = confirm('Apakah anda ingin keluar ??');
    }

    if (tanya != true){
        Nilai();
    } else {
        alert('Terimakasih sudah mencobaa....');
    }
}
