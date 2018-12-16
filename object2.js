// this
// var a = 10;
// console.log(this.a);


// cara 1 = function declaration
// function halo() {
//      console.log(this);
//      console.log('halo');
//  }
//  this.halo(); //cara memenggilnya

//cara 2 = object literal
// this mengembalikan object yang bersangkutan

// var obj = {a : 10, nama : 'Sandhika'};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();//cara menggilnya

// cara 3 = contructor
// this mengembalikan object yang baru dibuat
function Halo() {
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo(); //cara menggilnya
var obj2 = new Halo();


















// membuat object

// cara 1 = function declaration
// function halo() {
//     console.log('halo');
// }
// halo(); //cara memenggilnya

// cara 2 = object literal
// var obj = {};
// obj.halo = function () {
//     console.log('halo');
// }
// obj.halo();//cara menggilnya

// cara 3 = contructor
// function Halo() {
//     console.log('halo');
// }
//
// new Halo(); //cara menggilnya


