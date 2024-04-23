import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState , useEffect } from 'react';
import CardCar from './CardCar';
import BrandSelect from './BrandSelector';
import { defaultCarImage } from '../Constants/ConstantsJS';
import { onlyNumberRegex } from '../Constants/ConstantsJS';
import { moneyRegex } from '../Constants/ConstantsJS';
import { imageUrlRegex } from '../Constants/ConstantsJS';
import { addObjectToStorage } from '../Constants/ConstantsJS';

//backdrop stylesheet
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

//function for slider
function valuetext(value) {
  return `${value}`;
}

//whole component
export default function AddCarModal({ itemText, initialData }) {
  //useState hooks
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(2025);
  const [brandName , setBrandName] = useState("");
  const [modelName , setModelName] = useState("");
  const [mileageDistance , setMileageDistance] = useState(0);
  const [euroPrice , setEuroPrice] = useState(0);
  const [imageURL , setImageURL] = useState(defaultCarImage);
  const [brandError , setBrandError] = useState(false); //string
  const [modelError , setModelError] = useState(false); //string
  const [mileageError , setmileageError] = useState(false); //number
  const [euroError , setEuroError] = useState(false); //number
  const [imageURLError , setImageURLError] = useState(false);

  useEffect(() => {
    if (initialData) {
      handleBrandChange(initialData.brandName);
      setModelName(initialData.modelName);
      setSliderValue(initialData.sliderValue);
      setMileageDistance(initialData.mileageDistance);
      setEuroPrice(initialData.euroPrice);
      setImageURL(initialData.imageURL);
    }
  }, [initialData]);

  //always display a default image
  if (imageURL === "") {
    setImageURL(defaultCarImage);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const deleteFields = () => {
    //clear fields
    setBrandName("");
    setModelName("");
    setSliderValue(2025);
    setMileageDistance(0);
    setEuroPrice(0);
    setImageURL(defaultCarImage)
    setOpen(false);

    //clear errors
    setBrandError(false);
    setModelError(false);
    setmileageError(false);
    setEuroError(false);
    setImageURLError(false);
  }

  const handleClose = () => {
    deleteFields();
    setOpen(false);
    window.location.reload();
  }

  //check on confirm if all input fields are filled
  const handleConfirmAdd = () => {
    if (brandName !== "") {
  
      setBrandError(false);

       if(modelName !== "") {
         
          if (onlyNumberRegex.test(mileageDistance)) {
             
             if(moneyRegex.test(euroPrice)) {

              if(imageUrlRegex.test(imageURL)) {

                const carData1 = {
                  brandName: brandName,
                  modelName: modelName,
                  sliderValue: sliderValue,
                  mileageDistance: mileageDistance,
                  euroPrice: euroPrice,
                  imageURL: imageURL
              };

              

                 addObjectToStorage(carData1);
                
                 setOpen(false);
                 deleteFields();
                 window.location.reload();
              } else {
                setImageURLError(true);
              }    

             } else {
              setEuroError(true);
             }
             
          } else {
          
            setmileageError(true);
          }

       } else {
        setModelError(true);
       }
      
    } else {
      setBrandError(true);
    }
  }
  
  const handleBrandChange = (value) => {
    setBrandName(value); //brandname display
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue); // Update the slider value
  };

  const handleTextFieldChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue); // Update the slider value
  };

  return (
    <div> 
      <Button variant="contained" size="large" onClick={handleOpen}> 
        {itemText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{display: "flex" ,flexDirection: "column" , position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 1000, height: 600, bgcolor: "background.paper", border: "2px solid #000", boxShadow: 24, p: 4}}>
          <div className=' h-full w-full flex'>
            <div className=' flex flex-col w-1/2 h-full justify-around'>
              
               <BrandSelect brandName={brandName} onBrandChange={handleBrandChange} inputError={brandError}/>
              
               <TextField error={modelError} value={modelName} id="standard-basic" label="Model Name" variant="standard" onChange={(e) => {setModelName(e.target.value); setModelError(false)}} />

            <div>
              <Box sx={{ width: 466 }}>
                <Slider
                   aria-label="Small steps"
                   defaultValue={2025}
                   value={sliderValue}
                   onChange={handleSliderChange} 
                   getAriaValueText={valuetext}
                   step={1}
                   marks
                   min={1980}
                   max={2025}
                   valueLabelDisplay="auto"
                />
              </Box>
               <TextField 
                  id="standard-basic" 
                  label="Year" 
                  variant="standard" 
                  type='number' 
                  value={sliderValue ? sliderValue : null}
                  onChange={handleTextFieldChange}
               />
            </div>

               <TextField inputProps={{ min: 0 }} type='number' value={mileageDistance} error={mileageError} id="standard-basic" label="Mileage(km)" variant="standard" onChange={(e) => {setMileageDistance(e.target.value); setmileageError(false)}} />

               <TextField inputProps={{ min: 0 }} value={euroPrice ? euroPrice : null} error={euroError} type='number' id="standard-basic" label="Price(euro)" variant="standard" onChange={(e) => {setEuroPrice(e.target.value); setEuroError(false)}} />
               
               <div className='w-full flex flex-col gap-2'>
                  <div className='w-full flex'>
                   <TextField value={imageURL} className='w-full' id="outlined-basic" error={imageURLError} label="Image(URL)" variant="outlined" onChange={(e) => {setImageURL(e.target.value); setImageURLError(false)}}/>
                  </div>
                 <div className='w-full flex justify-center items-center'>Full HD Recomended</div>
               </div>
            </div>
            <div className=' w-1/2 h-full flex justify-center items-center'>
             <CardCar Model={modelName} Brand={brandName} Year={sliderValue} Euro={parseFloat(euroPrice)} Disabled={true} ImageURL={imageURL} max={345} min={320}/>
            </div>
          </div>
          <div className=' h-10 w-full flex justify-end gap-7 pr-4'>
            <Button variant="contained" color='error' onClick={handleClose}>Cancel</Button>
            <Button variant="text" onClick={handleConfirmAdd}>Confirm</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}