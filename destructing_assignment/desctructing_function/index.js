const pelajar = [
    '1WED78', 'Nazla Dio Hevin', 13
];
function perkenalan([id, nama, umur]){
    return `Halo aku ber-id${id}, saya bernama ${nama}, saya berumur ${umur}`
}
// console.log(perkenalan(pelajar));

// Array dalam Array
const employee = [
    'DW233', 'Nazla Dio Hevin'
    [12, 14, 15]
];
// Error kalau kasus seperti ini
// function a1([id, nama, nilai: [uas, un, us]]) {
//     return `id: ${id}, uas ${uas}`;
// }
// console.log(a1(employee));

const  empl = {
    nama: 'Nazla Dio ',
    jurusan: 'T. Informatika',
    nilai: [
        90, 87, 65
    ]
};

function checkEmpl({nama, jurusan = 'S. Informatika', nilai: [uas, un, tryout]}) {
    return `${nama} nilai un: ${un}`;
}
console.log(checkEmpl(empl));
// Bisa dilihat lebih lanjut di vidio