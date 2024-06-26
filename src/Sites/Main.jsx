import Button from '@mui/material/Button';
import { useNavigate , Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CardCar from "../Comonents/CardCar";


const Main = () => {

   const navigate = useNavigate();

   const [carData, setCarData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('carData');
    if (storedData) {
      const dataArray = JSON.parse(storedData);
      setCarData(dataArray);
    }
  }, []);

   return (
      <>
       <div id="rootDiv" className=' z-20 w-full flex relative flex-col gap-10 '>
         <div id="Top" className=" z-10 h-96">
            <div className=" h-1/4 w-full flex justify-end items-end pr-8">
              <button onClick={() => navigate("/Admin")} className=" transition-all bg-slate-400 hover:bg-slate-600 hover:scale-105 text-white p-4 pr-6 pl-6 rounded-3xl">Admin</button>
            </div>
            <div className=" flex justify-center items-center text-9xl h-3/4">Main</div>
         </div>
         <div id="Bottom" className=" z-10 h-auto w-full grid grid-cols-4 gap-5 p-16 box-border">
              {carData.map(car => (
                <CardCar key={car.id} id={car.id} Model={car.modelName} Brand={car.brandName} Year={car.sliderValue} Euro={parseFloat(car.euroPrice)} Disabled={false} ImageURL={car.imageURL} />
              ))}
         </div>
       </div>
      </>
   )

}

export default Main;