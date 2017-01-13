var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
var random_images_array = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png", "img8.png", "img9.png", "img10.png", "img11.png", "img12.png", "img13.png", "img14.png", "img15.png", "img16.png", "img17.png", "img18.png", "img19.png", "img20.png", "img21.png", "img22.png"];
function getRandomImage(imgAr, path) {
    path = path || 'eggplant-images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
document.getElementById("music").volume = 0.20;

function muteBg() {
    document.getElementById("music").volume = 0;
}

function unmuteBg() {
    document.getElementById("music").volume = 0.20;
}
