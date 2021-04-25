// Untuk Array
// const employes = ['8D3R', 'Nazla Dio Hevin', '19'];
// const [id, name, age] = employes;

// Untuk object
// const pelajar = {
//     no_induk: '3456',
//     name: "Fajar",
//     age: 12
// };
// Di object nama nya harus sama
// const {no_induk, name, age} = pelajar;

// Jika Ingin beda, maka begini
// const {no_induk: no, name:nama, age: umur} = pelajar;

// Jika ingin mempersingkat, bisa begini
// Note: harus dibungkus dengan () kurung
// ({no_induk, name, age} = {
//     no_induk: '3456',
//     name: "Fajar",
//     age: 12
// })

// Kalau di suatu array data nya terus bertambah, maka
// const people = ['Angga', 'Aku', 12, 34, 'P'];
// const [name1, ...values] = people;

// Jika kamu ingin salah satu data array tdk dideklrasaikan
const people = ['Angga', 'Aku', 12, 34, 'P'];
const [name1,,age,,,] = people;