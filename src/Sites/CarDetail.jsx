import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import BackgroundMain from '../Comonents/background';

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
               navigate("/Main");
            } else {
               setCar(carItem);
            }
         } catch(e) {
             navigate("/Main");
         }
      }
         
         
        

      console.log(car);
       
  }, [id]);


  if (!car) {
   return <div>Loading...</div>;
 }

 return (
   <>
     <div className=' z-20 h-full w-full flex justify-center items-center relative'>1</div>
     <BackgroundMain />
   </>
 );
}

export default CarDetail;
