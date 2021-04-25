$(document).ready(function () {
    $('#hidden').click(function (e) { 
        $('h1').hide();  
    });
    $('.btn-show').click(function (e) { 
        $('h1').show();  
    });
    $('.btn-change').click(function (e) { 
        $('h1').css('color', 'lightblue');
        e.preventDefault();
        
    });   
 });

//  Ambil value dari element
console.log($('h1').text());

// Ambil value dari element beserta dengan element nya
console.log($('h1').html());
// Ambil value dari element-element form (input, textarea, select, dll)
// Untuk element select, checkbox, dll. Value nya didapat dari atribut value nya
$('.btn-get-name').click(function (e) { 
    const name = $('#txt').val();
    console.log(name);
    e.preventDefault();    
});
// Mengambil value dari checkbox dibutuhkan pseudoclass :checked
// Contoh
// $('.checkbox:checked').val();

// Method Append dan Method Prepend
// Append: menambahkan element baru di bagian belakang (Didalam parent)
// Prepend: menambahkan element baru di bagian depan (Didalam parent)

// Method after dan Method before
// after: menambahkan element baru di bagian belakang (Diluar parent/setelah parent)
// before: menambahkan element baru di bagian depan (Diluar parent/sebelum parent)

// Mengambil Lebar dan Tinggi element bisa memakai method width() dan height() jquery

// Animasi
// Animasi show dan hide
// Bisa pake method show(ms) dan hide(ms)
// Atau method gabungan show dan hide yaitu toggle(ms)

// Animasi fade
// Memakai 2 method: fadeIn(ms) dan fadeOut(ms). Parameter bisa pakai slow atau fast
// Atau method gabungan fadeIn dan fadeOut yaitu fadeToggle

// Animasi slide
// Memakai 2 method: slideUp(ms) dan slideDown(ms)
// Atau method gabungan slideUp dan slideDown yaitu slideToggle