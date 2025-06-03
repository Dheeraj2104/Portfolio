const images = [];
const images_main = [];
for (let i = 1; i <= 20; i++) {
    if (i <= 10) {
        images.push(`Scenery${i}.jpg`);
        images_main.push(`Scenery/Scenery${i}.jpg`);
    }
    if (i <= 7) {
        images_main.push(`Macro/macro${i}.jpg`);
    }
    if (i <= 11) {
        images_main.push(`Potraits/potraits${i}.jpg`);
    }
    if (i <= 10) {
        images_main.push(`Random/Random${i}.jpg`);
    }
}


let index = 0;
const backgroundDiv = document.getElementById('header');

setInterval(() => {
    index = (index + 1) % images.length;
    backgroundDiv.style.background = `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), 
    url('/Portfolio/images/Scenery/${images[index]}') center/cover no-repeat fixed
  `;
}, 10000); // changes every 10 seconds

const imagesMain = document.getElementById("images-gallery");
for(var i = 1; i<images_main.length; i++){
    const img = document.createElement('img');
    img.src = "/Portfolio/images/"+images_main[i];
    img.alt = images_main[i]+".jpg";
    imagesMain.appendChild(img);
}
