// var employeeData = {
//     name : "Nazla Dio Hevin",
//     age : 18,
//     ips : [3.30, 3.45, 3.9],
//     addresse : {
//         hamlet : "Srijaya",
//         village : "Pucangmiliran",
//         subDistrict : "Tulung",
//         district : "Klaten",        
//     }
// };


console.log("name: " + employeeData.name); 
console.log("hamlet addresse: " + employeeData.addresse.hamlet);
console.log("age: " + employeeData["age"]); 
console.log("ips: " + employeeData.ips[1]);

// Pembuatan Object ada beberapa cara:
// 1. Object Literal
var mahasiswa = {
    nama: "Nazla Dio Hevin",
    umur: 18,
    ips: [3.30, 4.20],
    addresse : {
        hamlet : "Srijaya",
        village : "Pucangmiliran",
        subDistrict : "Tulung",
        district : "Klaten",        
    },
    makan: function() {
        console.log("Makan ayam");
    }
}
// 2. Function Declaration
function MahasiswaA() {
    let mahasiswa = {};
    mahasiswa.nama = "Nazla Dio Hevin";
    mahasiswa.umur = 18;
    mahasiswa.ips = [3.30, 4.20];
    mahasiswa.addresse = {
        hamlet : "Srijaya",
        village : "Pucangmiliran",
        subDistrict : "Tulung",
        district : "Klaten",        
    };
    mahasiswa.makan = function() {
        console.log("Makan ayam");
    }
    return mahasiswa;
}

// 3. Constructor function
function MahasiswaB() {    
    this.nama = "Nazla Dio Hevin";
    this.umur = 18;
    this.ips = [3.30, 4.20];
    this.addresse = {
        hamlet : "Srijaya",
        village : "Pucangmiliran",
        subDistrict : "Tulung",
        district : "Klaten",        
    };
    this.makan = function() {
        console.log("Makan ayam");
    }    
}
var mahasiswaB1 = new MahasiswaB();

// 4. Object.create()
