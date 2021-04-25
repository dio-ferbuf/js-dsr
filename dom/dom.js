// Mendapatkan element dengan id
var element = document.getElementById('link');

// CSS with Javascript
element.innerHTML = 'Dimension Breaker';
element.style.backgroundColor = 'rgb(203, 102, 81)';
element.style.padding = '10px 8px';
element.style.borderRadius = '5px';
element.addEventListener('click', function(event){
    
});
var element2 = document.getElementsByClassName('paragraph');
element2[0].style.backgroundColor = 'rgb(74, 73, 175)';
element2[1].style.backgroundColor = 'rgb(95, 171, 73)';

setInterval(function () {
    element2[0].style.backgroundColor = 'rgb(74, 73, 175)';
    element2[1].style.backgroundColor = 'rgb(95, 171, 73)';
    element2[2].style.backgroundColor = 'rgb(70, 168, 184';
    
    // setTimeout(function ());
})

// Kelola Atribut
// ------------------------
// element.setAtribute(namaAtribut, valueAtribut); menambahkan/merubah atribut
// element.getAtribute(namaAtribut); Mendapatkan atribut
// element.removeAtribute(namaAtribut) Hapus atribut

// Kelola atribut class
// ------------------------
// Gunakan element.classList
// element.classList.add(namaClass); Menambahkan class, nama class bisa lebih dari satu
// element.classList.remove(namaClass); Menghapus class, nama class bisa lebih dari satu
// element.classList.toggle(namaClass); Mengecek apakah element sudah memiliki class tsb? jika blm tambahkan, jika sudah hapus.
// element.classList.item(index); Menampilkan nama class berdasarkan index
// element.classList.contains(namaClass); Apakah ada class yang dimaksud?

// Kelola Node
// ------------------------
// document.createElement(namaElement); Buat Element baru
// document.createTextNode(text); Buat text dari element
// node.appendChild(childBaru); Menambahkan childBaru kedalam parent
// node.insertBefore(elementBaru, elementSebelumnya); Tambahkan element baru sebelum elementSebelumnya
// parentNode.removeChild(oldElement); Hapus element
// parentNode.replaceChild(newChild, oldChild); Mengganti element lama menjadi element baruS

// DOM Traversal (Penulusuran DOM)
// ------------------------
// Mengakses element/node parent nya
// elementt.parentElement.;
// elementt.parentNode.;
// elementt.nextSibling.; setelah elementt (return node)
// elementt.nextElementSibling.; setelah elementt (return element
// elementt.previousSibling.; sebelum elementt (return node))
// elementt.previousElementSibling.; sebelum elementt (return element))

// Menghentikan aksi default
// Misal: element a memiliki aksi default yang dimana saat kita klik element a tsb web akan meangarahkan ke link yg
// dituju, jika kita tak memaskukkan link di href maka ia akan merefresh halaman.
// Untuk menghilangkan aksi default cukup gunakan method preventDefault();
// Example:
// element.addEventListener("click", function (e) {
//     element.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
// });
// Event Bubling, dimana saat kita klik child element, maka parent element juga berjalan event nya
// Jika ingin menghilangkannya gunakan stopPropagation di event childnya bukan yg di parent
// element.addEventListener("click", function (e) {
//     element.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation(); 
// });

