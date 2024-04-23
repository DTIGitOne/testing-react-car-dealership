import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import BackgroundMain from '../Comonents/background';
import ScrollForMore from '../Comonents/ScrollForMore';
import ScrollToTopBottom from '../Comonents/ScrollToBottom';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  
  
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
     <div className=' z-20 h-full w-full flex justify-center items-center relative'>
      <div className=' h-full w-full absolute left-0 top-0'>
        <div className=' h-full w-full absolute text-white flex flex-col gap-10'>
          <div className=' h-32 flex items-center'>
            <div className=' w-60 h-auto p-5 bg-white flex justify-end'>
              <button className=' text-black text-3xl font-normal' onClick={() => navigate(-1)}>Go Back</button>
            </div>
          </div>
           <div className=' w-full p-5'>
             <div className=' text-8xl font-normal mb-4'>{car.brandName} <span className=' font-thin'>{car.modelName}</span></div>
             <div className=' text-5xl ml-4 font-thin'>{car.sliderValue}</div>
           </div>
           <ScrollForMore />
        </div>
        <img src={car.imageURL} alt="" className=' object-cover bg-center bg-top w-full	'/>
        <div id='detailsDiv' className='w-full flex flex-col' style={ {height: 850} }>
          <div className=' w-full h-1/4 text-8xl flex justify-center items-center'>Details</div>
          <div className=' flex h-full w-full font-normal text-4xl '>
           <div id='leftDiv' className=' w-1/2 h-full flex flex-col justify-around pl-8 pb-4'>
            <div>
              <div>Brand:</div>
              <span className=' font-light text-3xl'>{car.brandName}</span>
            </div>
            <div>
              <div>Model:</div>
              <span className=' font-light text-3xl'>{car.modelName}</span>
            </div>
            <div>
              <div>Year:</div>
              <span className=' font-light text-3xl'>{car.sliderValue}</span>
            </div>
            <div>
              <div>Mileage:</div>
              <span className=' font-light text-3xl'>{car.mileageDistance}</span>
            </div>
            <div>
              <div>Price:</div>
              <span className=' font-light text-3xl'>{car.euroPrice}</span>
            </div>
            <div>
              <div>Contact:</div>
              <span className=' font-light text-3xl'>email@gmail.com</span>
            </div>
           </div>
           <div id='rightDiv' className=' w-1/2 h-full flex items-center text-8xl font-thin text-center'>
              No aditional <br />
              information provided
           </div>
          </div>
        </div>
      </div>
      <ScrollToTopBottom />
     </div>
   </>
 );
}

export default CarDetail;
