let $ = document;
const container = $.querySelector('.container');
const bar = $.querySelector('#bars');
const listItems = $.querySelector('.list');
//first car elements
const firstCarLeftSide = $.getElementById('first-car-left-side');
const firstCarRightSide = $.getElementById('first-car-right-side');
const firstCar = $.getElementById('first-car');

//second car elements
const secondCarLeftSide = $.getElementById('second-car-left-side');
const secondCarRightSide = $.getElementById('second-car-right-side');
const secondCar = $.getElementById('second-car');

//third car elements
const thirdCarLeftSide = $.getElementById('third-car-left-side');
const thirdCarRightSide = $.getElementById('third-car-right-side');
const thirdCar = $.getElementById('third-car');

//fourth car elements
const fourthCarLeftSide = $.getElementById('fourth-car-left-side');
const fourthCarRightSide = $.getElementById('fourth-car-right-side');
const fourthCar = $.getElementById('fourth-car');

// first car reserve button 
const firstCarDescContainer = $.getElementById('first-car-description');
const firstReserveBtn = $.getElementById('first-reserve-btn');

// second car reserve button 
const secondCarDescContainer = $.getElementById('second-car-description');
const secondReserveBtn = $.getElementById('second-reserve-btn');

// third car reserve button 
const thirdCarDescContainer = $.getElementById('third-car-description');
const thirdReserveBtn = $.getElementById('third-reserve-btn');

// fourth car reserve button 
const fourthCarDescContainer = $.getElementById('fourth-car-description');
const fourthReserveBtn = $.getElementById('fourth-reserve-btn');




//background header image
let images = [
    '../images/background.jpg',
    '../images/background2.jpg',
    '../images/background3.jpg'
];

let imagesIndex = 0;

setInterval(function(){
    container.style.backgroundImage = `url(${images[imagesIndex]})`;
    imagesIndex = (imagesIndex + 1) % images.length;
}, 15000);



//menu
bar.addEventListener('click', () => {
    listItems.classList.toggle('menu');
});




let carsImage = [
    'images/vehicule1.png',
    'images/vehicule2.png',
    'images/vehicule3.png',
    'images/vehicule4.png',
];

let currentIndex = 0;


// first Car 
firstCarLeftSide.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carsImage.length;
    firstCar.src = carsImage[currentIndex];
});

firstCarRightSide.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carsImage.length) % carsImage.length; 
    firstCar.src = carsImage[currentIndex];
});

// second Car 

let secondArrayCarsImage = [
    'images/vehicule2.png',
    'images/vehicule1.png',
    'images/vehicule3.png',
    'images/vehicule4.png',
];
secondCarRightSide.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % secondArrayCarsImage.length;
    secondCar.src = secondArrayCarsImage[currentIndex];
});

secondCarLeftSide.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + secondArrayCarsImage.length) % secondArrayCarsImage.length; 
    secondCar.src = secondArrayCarsImage[currentIndex];
});

// third Car 

let thirdArrayCarsImage = [
    'images/vehicule3.png',
    'images/vehicule1.png',
    'images/vehicule2.png',
    'images/vehicule4.png',
];
thirdCarLeftSide.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thirdArrayCarsImage.length;
    thirdCar.src = thirdArrayCarsImage[currentIndex];
});

thirdCarRightSide.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thirdArrayCarsImage.length) % thirdArrayCarsImage.length; 
    thirdCar.src = thirdArrayCarsImage[currentIndex];
});

// fourth Car 
let fourthArrayCarsImage = [
    'images/vehicule4.png',
    'images/vehicule1.png',
    'images/vehicule2.png',
    'images/vehicule3.png',
];
fourthCarLeftSide.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % fourthArrayCarsImage.length;
    fourthCar.src = fourthArrayCarsImage[currentIndex];
});

fourthCarRightSide.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + fourthArrayCarsImage.length) % fourthArrayCarsImage.length; 
    fourthCar.src = fourthArrayCarsImage[currentIndex];
});


let firstClicked = false;
let secondClicked = false;
let thirdClicked = false;
let fourthClicked = false;

// first car reserve button 
firstReserveBtn.addEventListener('click', function(){
    firstClicked = !firstClicked;
    if (firstClicked) {
        firstCarDescContainer.style.backgroundColor = 'rgba(13, 155, 20, 0.8)';

        secondCarDescContainer.style.backgroundColor = '';
        thirdCarDescContainer.style.backgroundColor = '';
        fourthCarDescContainer.style.backgroundColor = '';
        secondClicked = false;
        thirdClicked = false;
        fourthClicked = false;
    } else {
        firstCarDescContainer.style.backgroundColor = '';
    }
});

// second car reserve button 

secondReserveBtn.addEventListener('click', function(){
    secondClicked = !secondClicked;
    if (secondClicked) {
        secondCarDescContainer.style.backgroundColor = 'rgba(13, 155, 20, 0.8)';

        firstCarDescContainer.style.backgroundColor = '';
        thirdCarDescContainer.style.backgroundColor = '';
        fourthCarDescContainer.style.backgroundColor = '';
        firstClicked = false;
        thirdClicked = false;
        fourthClicked = false;
    } else {
        secondCarDescContainer.style.backgroundColor = '';
    }
});

// third car reserve button
thirdReserveBtn.addEventListener('click', function(){
    thirdClicked = !thirdClicked;
    if (thirdClicked) {
        thirdCarDescContainer.style.backgroundColor = 'rgba(13, 155, 20, 0.8)';

        firstCarDescContainer.style.backgroundColor = '';
        secondCarDescContainer.style.backgroundColor = '';
        fourthCarDescContainer.style.backgroundColor = '';
        firstClicked = false;
        secondClicked = false;
        fourthClicked = false;
    } else {
        thirdCarDescContainer.style.backgroundColor = '';
    }
});

// fourth car reserve button
fourthReserveBtn.addEventListener('click', function(){
    fourthClicked = !fourthClicked;
    if (fourthClicked) {
        fourthCarDescContainer.style.backgroundColor = 'rgba(13, 155, 20, 0.8)';

        firstCarDescContainer.style.backgroundColor = '';
        secondCarDescContainer.style.backgroundColor = '';
        thirdCarDescContainer.style.backgroundColor = '';
        firstClicked = false;
        secondClicked = false;
        thirdClicked = false;
    } else {
        fourthCarDescContainer.style.backgroundColor = '';
    }
});

