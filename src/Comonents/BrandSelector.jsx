import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


const names = [
   "Abarth",
   "Alfa Romeo",
   "Aston Martin",
   "Audi",
   "Bentley",
   "BMW",
   "Bugatti",
   "Cadillac",
   "Chevrolet",
   "Chrysler",
   "Citroën",
   "Dacia",
   "Daewoo",
   "Daihatsu",
   "Dodge",
   "Donkervoort",
   "DS",
   "Ferrari",
   "Fiat",
   "Fisker",
   "Ford",
   "Honda",
   "Hummer",
   "Hyundai",
   "Infiniti",
   "Iveco",
   "Jaguar",
   "Jeep",
   "Kia",
   "KTM",
   "Lada",
   "Lamborghini",
   "Lancia",
   "Land Rover",
   "Landwind",
   "Lexus",
   "Lotus",
   "Maserati",
   "Maybach",
   "Mazda",
   "McLaren",
   "Mercedes-Benz",
   "MG",
   "Mini",
   "Mitsubishi",
   "Morgan",
   "Nissan",
   "Opel",
   "Peugeot",
   "Porsche",
   "Pagani",
   "Renault",
   "Rolls-Royce",
   "Rover",
   "Saab",
   "Seat",
   "Skoda",
   "Smart",
   "SsangYong",
   "Subaru",
   "Suzuki",
   "Tesla",
   "Toyota",
   "Volkswagen",
   "Volvo",
   "Yugo"
];

export default function BasicSelect({ selectedBrand, onBrandChange , inputError }) {
   const [brand, setBrand] = useState('');
 
   const handleChange = (event) => {
      const selectedBrand = event.target.value;
      setBrand(selectedBrand);
      onBrandChange(selectedBrand);
   };
 
   return (
     <Box sx={{ minWidth: 120 }}>
       <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Brand</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={brand}
           label="Brand"
           onChange={handleChange}
           error={inputError}
         >
           {names.map((name, index) => (
             <MenuItem key={index} value={name}>
               {name}
             </MenuItem>
           ))}
         </Select>
       </FormControl>
     </Box>
   );
 }