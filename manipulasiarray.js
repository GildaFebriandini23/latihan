//Manipulasi Array

//1. Menambah isi array
//var arr = [];
//arr[0] = "Gilda";
//arr[1] = "Cantik";
//arr[2] = "Sekali";

//console.log(arr);

//2. Menghapus isi aray
//var arr = ["Gilda", "Cantik", "Sekali"];
//arr[1] = undefined;
//console.log(arr);


//3. Menampilkan isi array;
//var arr = ["Gilda", "Cantik", "Sekali", "Massa"];

//for(var i = 0; i < arr.length; i++){
  //  console.log('Mahasisiwa Ke-' + (i+1) + ' : ' + arr[i]);
//}

//Method pada array
//var arr = ['Gilda', 'Cantik', 'Banget'];
//1. Join
//console.log(arr.join(' - '));

//2. Push & pop
//arr.push('Gilda', 'Fitri');

//arr.pop();
//arr.pop();


//3. unsift dan shift
//arr.unshift('Figo');
//
//arr.shift();
//console.log(arr.join(' - '));

//var arr = ['Gilda', 'Cantik', 'Banget'];
//4. splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
//arr.splice(2, 0, 'Figo', 'Dila');

// arr.splice(1, 2, 'Figo', 'Dila');
// console.log(arr.join(' - '));

// 5. slice
// slice( awal, akhir)
//
// var arr = ['Gilda', 'Lilis', 'Ruslan', 'Dila', 'Figo'];
//
// var arr2 = arr.slice(1, 3);
// console.log(arr.join( ' - '));
// console.log(arr2.join( ' - '));

// 6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Gilda', 'Febriandini', 'Dila'];
// for( var i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }
// var cetak = function(e){}
// angka.forEach(function (e) {
//     console.log(e);
// });

//atau

// var cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// nama.forEach(function(e, i){
//     console.log('Mahasiswa Ke- ' + (i+1) + ' adalah : ' + e);
// });

// 7. Map
// var angka = [1,2,3,4,5,6,7];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

//8. Sort
// var angka = [1,2,3,4,9,8,7,15,10,20,30];
// angka.sort(function (a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter
// var angka = [1,2,3,,10,20,4,6,7,5];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
//
// });
// console.log(angka2.join(' - '));

//10. find
var angka = [1,2,3,10,20,4,6,7,5];
var angka2 = angka.find(function (x) {
     return x > 5;

 });
console.log(angka2);










