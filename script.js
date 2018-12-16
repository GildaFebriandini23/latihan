function Angka() {

    var a = prompt('Masukkan Angka : ');
    if (a != null){
        if(a%2 === 0){
            alert(a+ ' Adalah angka Genap ');
            var a = confirm('Mau coba lagi gak ??? ');
            if(a) {
                Angka();
            }else {
                alert('Terimakasih...');
            }

        }else{
            alert(a+ ' Adalah angka Ganjil ');
            var a = confirm('Mau coba lagi gak ??? ');
            if(a){
                Angka();
            }else {
                alert('Terimakasih...');
            }
        }
    } else{
        alert('Terimakasih...');
    }

}
