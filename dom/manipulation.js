// Kelola Node
// ------------------------
// document.createElement(namaElement); Buat Element baru
// document.createTextNode(text); Buat text dari element
// node.appendChild(childBaru); Menambahkan childBaru kedalam parent
// node.insertBefore(elementBaru, elementSebelumnya); Tambahkan element baru sebelum elementSebelumnya
// parentNode.removeChild(oldElement); Hapus element
// parentNode.replaceChild(newChild, oldChild); Mengganti element lama menjadi element baruS

// Menambahkan element P
let newP = document.createElement('p');
let txtNewP = document.createTextNode("New Paragraf");

newP.appendChild(txtNewP);

// Menambahkan element p sebelum paragraf 2
// Ambil element parentnya
let sectionA = document.getElementById('a');
// Ambil child dari sectionA yang paragraf 2
let p2 = sectionA.querySelector('p:nth-of-type(2)');
// Tambahkan element p barunya
sectionA.insertBefore(newP, p2);
