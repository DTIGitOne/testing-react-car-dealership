import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import BackgroundMain from '../Comonents/background';

function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                // Scrolling up
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
  
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
        </div>
        <img src={car.imageURL} alt="" className=' object-cover bg-center bg-top w-full	'/>
        <div id='detailsDiv' className=' h-60 w-full'></div>
      </div>
     </div>
   </>
 );
}

export default CarDetail;
