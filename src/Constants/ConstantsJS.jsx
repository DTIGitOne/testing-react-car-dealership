
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

export function formatNumberWithCommas(number) {
  return number.toLocaleString();
}