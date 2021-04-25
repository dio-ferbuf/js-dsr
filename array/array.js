var countries = ["Indonesia", "Malaysia", "Singapura", "Swiss"];

// for each
document.writeln('<br/>');
for (value in countries) {
    document.writeln(countries[value]);
}

// for each dalam bentuk methodnya array
document.writeln('<br/>');
countries.forEach(function (country, index) {
    if (index == (countries.length - 1)) {
        document.writeln(`${country}`);
    } else {
        document.writeln(`${country}, `);
    }
});

// atau bisa juga seperti ni
document.writeln('<br/>');
countries.forEach((country, index) => {
    if (index == (countries.length - 1)) {
        document.writeln(`${country}`);
    } else {
        document.writeln(`${country}, `);
    }
});
document.write("<br/>");
var name = "Again \n";
document.writeln(name.repeat(10));

// Menambahkan data ke array bisa pakemethod
countries.push('Arab Saudi');
document.write("<br/>");
document.write("push: "+countries.join(', '));

// Menghapus data aray
// Menghapus data terakhit array
countries.pop();
document.write("<br/>");
document.write("pop: "+countries.join(', '));

// Menghapus data terdepan array
countries.shift();
document.write("<br/>");
document.write("shift: "+countries.join(', '));

// Menghapus data pada index tertentu
countries.splice(1, 1); // (<index yg akan dihapus>, <total data yg akan dihapus>)
document.write("<br/>");
document.write("splice untuk mengapus data: "+countries.join(', '));

// Menambahkan data pada index tertentu
countries.splice(1, 0, "Maroko");
document.write("<br/>");
document.write("splice untuk menambah data: "+countries.join(', '));

// Menyaring data pada dari array
var numbers = [12, 34, 54, 21, 99, 101, 123, 2];
var filteredArray = numbers.filter((item) => {
    return item % 2 == 0;
});
document.write("<br/>");
document.write("filter: "+filteredArray.join(', '));

//  Mengecek apakah suatu data ada di dalam array atau tidak.
var names = ['Eko', 'Wahyu', 'Erina', 'Rosario', 'Albertus', 'Eko Satyo'];
var checkName = names.includes('Eko', 1);
document.write("<br/>");
document.write("includes:"+checkName);

// Mengurutkan data
document.write("<br/>")
document.write("sort: "+names.sort().join(", "));

//  Reverse Sort data
document.write("<br/>");
document.write("reversesort: "+names.sort().reverse().join(', '));

// Mengubah array menjadi String
document.write("<br/>");
var joinNames = names.join(' '); // join(<separator>) separator: pemisah antar index array
document.write("Join: "+ joinNames);

// Menambahkan data pada index ke-0 array
names.unshift('Laras', 'Satya');
document.write("<br/>");
document.write("unshift: "+ names);

// Memisahkan nilai sesui parameter yang ditentukan
var vegetables = ["Cucumber", "Tomato", "Chili", "Onion", "Garlic"];
var sliceVegetables = vegetables.slice(1, 4); // <start> ngikut, <end> tidak ngikut
document.write("<br/>");
document.write("slice: "+ sliceVegetables.join(', '));

// Mencari nilai yang cocok tapi hanya satu nilai saja yang dikembalikan
var vegetable = vegetables.find(function (value) {
    return value.startsWith('C');
});
document.write("<br/>");
document.write("find: "+ vegetable);