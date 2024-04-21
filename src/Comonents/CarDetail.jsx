import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    
      if (!! id) {
         try {
            const storedData = localStorage.getItem('carData');
            const dataArray = JSON.parse(storedData);
            const carItem = dataArray.find(item => item.id === Number(id));

            if (!carItem) {
              // navigate("/Main");
            } else {
               setCar(carItem);
            }
         } catch(e) {
            // navigate("/Main");
         }
      }
         
         
        

      console.log(car);
       
  }, [id]);


  if (!car) {
   return <div>Loading...</div>;
 }

 return (
   <div>
     <h1>{car.brandName}</h1>
     <img src={car.imageURL} alt="" />
   </div>
 );
}

export default CarDetail;
