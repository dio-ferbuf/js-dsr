
function perkenalan(texts, ...values){
    let result = '';
    texts.forEach((text, index) => {
        result += `${text} ${values[index] || ''}`;        
    });
    return result;
}
let nama = "Hevin";
let umur = 12;
const str = perkenalan`Nama saya adalah ${nama}. Umur saya${umur}`;
console.log(str);
