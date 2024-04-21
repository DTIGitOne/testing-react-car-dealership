
export const defaultCarImage = "https://hillzimage.blob.core.windows.net/test/default-inventory-image-car-med.jpeg";

//regex
export const onlyNumberRegex = /^\d{1,7}$/;
export const moneyRegex = /^\d{1,8}$/;
export const imageUrlRegex = /^https:\/\/.*\.(jpg|png)(\?.*)?$/;

//add vehilce to LocalStorage
export function addObjectToStorage(newObject) {
   const storedData = localStorage.getItem('carData');
   let dataArray = [];

   if (storedData) {
       dataArray = JSON.parse(storedData);
   }

   newObject.id = Date.now();

   dataArray.push(newObject);

   localStorage.setItem('carData', JSON.stringify(dataArray));
}

//random hexcode color generator


// make 3 diffrent varients of color to randomly choose from every time


function getRandomColor1() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }

 function getRandomColor2() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }
 
 export const randomColor1 = getRandomColor1();
 export const randomColor2 = getRandomColor2();