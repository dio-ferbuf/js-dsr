var h1Elemment = document.getElementsByTagName("h1");
h1Elemment[0].style.textAlign = 'center';
h1Elemment[0].style.fontFamily = 'arial';
h1Elemment[0].style.color = 'rgba(20, 39, 119, 0.85)';


var bgColor = document.getElementById('bg-color');

bgColor.addEventListener('change', (_) => {
    document.body.style.backgroundColor = bgColor.value;
});

var textColor = document.getElementById("txt-color");
textColor.addEventListener('change', function () {
    var paragraps = document.getElementsByTagName('p');
    paragraps[0].style.color = textColor.value;
    paragraps[1].style.color = textColor.value;
    paragraps[2].style.color = textColor.value;
    paragraps[3].style.color = textColor.value;
});

var createHR = document.createElement('hr');
document.body.appendChild
