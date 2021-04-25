
// Vanila JS
fetch('http://www.omdbapi.com/?apikey=ca1b43e&s=cinta')
    .then(response => response.json())    
    .then(response => {
        const movies = response.Search;
        movies.forEach(movie => {
            console.log(movie.Title);
        });
    })    
    .catch(error => console.log('Error Bro'));

// JQUERY
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=ca1b43e7&s=cinta",
//     success: function (response) {
//         console.log(response.Search);
//     }
// });

// PENTING!!!!
// Di elememnt html ada atribut bernama data-. Dimana atribut tsb bisa kita custom namanya
// Misalkan: data-duration, data-movieid, dll (format: data-namaData)
// Jika kita ingin mengambil atribut data- tsb maka kita bisa pake:
// ---------
// Vanila JS
// Misal data-duration yang diambil maka
// (element.dataset.namaData) <-- format
// element.dataset.duration
// ---------
// JQUERY
// Misal data-imdbid yang diambil maka
// $(selector).data('namaData');
// $(selector).data('imdbid');

