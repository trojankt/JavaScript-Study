/* komentarz wierszowy za pomocą gwiazdki 
let js = "amazing";
console.log(     40 + 8 + 23 - 10);
console.log('Trojan');
console.log(23);
let firstName = 'Krystian';
console.log(firstName);
let fisrt_name_person = 'Krystek'; 
console.log(fisrt_name_person);

let isIsland= 'Poland';
let population = 1000000;
let continent ='Europe';
let language ='';
console.log(isIsland, population, continent, language );
console.log(     40 + 8 + 23 - 10);
*/

/*
//*****boolean variable*****
true;

let javascriptItFun = true;
console.log(javascriptItFun);

console.log(typeof javascriptItFun);
console.log(typeof 'Krystek');
console.log(typeof 1993);

javascriptItFun = "YES";
console.log(typeof javascriptItFun);

let year;
console.log(year);
console.log(typeof year);
*/

// *****Deklarowanie zmiennych w JS let, const & var***** 
//  Zmiana wartośi zmiennej z jednej na drugą nazywamy "ZMUTOWANIEM" (mutanted)


const age = 15;
const old = age >= 18;

if (old) {
    console.log('Krystian can driving by car');
}else{
    const yearsLeft = 18 - age;
    console.log(`You are to yong to driving wait another ${yearsLeft} years:)`); 
}

document.addEventListener('click', function handleClickOutsideBox(event) {
  // 👇️ the element the user clicked
  console.log('user clicked: ', event.target);

  const box = document.getElementsById('box');

  if (!box.contains(event.target)) {
    box.style.display = 'none';
  }
});

var intro = document.querySelectorAll('box'); intro.setAttribute('id', 'Introduction_ 1');

document.querySelector('.child').classList.add('salmon');


 
document.querySelectorAll('div').forEach((container) => {
    let box =  container.querySelectorClassList('box')
    box.addEventListener('click', (e) => {
        container.querySelectorClassList('child').classList.toggle('active')
        child.classList.toggle('rotate')
    });
});



const imageElement = document.getElementById('myImage');

imageElement.addEventListener('click', function(event) {
  const newImageUrl = 'image/teams-image.png';

  imageElement.setAttribute('src', newImageUrl);
});

// Create a variable to store the image you want to change.
var image = document.getElementById('myImage');

// Create a function to change the image.
function changeImage(oldImage, newImage) {
  image.src = newImage;
}

// In the onclick event of the element you want to change, call the function to change the image.
document.getElementById('myButton').onclick = function() {
  changeImage(image, 'newImage.jpg');
};

const cardSwiper = new Swiper(".card-swiper", {
    
  slideClass: 'option',
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
      delay: 5000,
  },

  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
      640: {
          slidesPerView: 2,
          spaceBetween: 30,
      },

      900: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      // when window width is >= 480px
      1400: {
          slidesPerView: 4,
          spaceBetween: 62,
      },
  },
});