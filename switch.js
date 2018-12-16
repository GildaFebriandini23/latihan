var item = prompt('masukkan nama makanan atau minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)'
);

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('anda memilih makanan/minuman SEHAT');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('anda memilih makanan/minuman TIDAK SEHAT');
        break;
    default:
        alert('makanan/minuman tidak ada');
        break;

}