import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import AddCarModal from '../Comonents/AddCarModal';

function HomeIcon(props: SvgIconProps) {
   return (
     <SvgIcon {...props}>
       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
     </SvgIcon>
   );
 }

const Admin = () => {

   return <div className=" h-full w-full bg-slate">
      <div className=" h-1/5 flex flex-col justify-end gap-3">
         <div className=' flex items-center gap-1 font-normal h-1/6 pl-5'>
            <button>
             <HomeIcon fontSize="small" /> Home Page
            </button>
         </div>
         <div className=' flex justify-between w-full pl-16 pr-16 pt-2 mb-3'>
           <h1 className=" text-6xl">Admin Panel</h1>
           <AddCarModal />
         </div>
      </div>
      <div className=' h-4/5 w-full p-16'>
           <Table sx={{ minWidth: 650 }} aria-label="simple table">
             <TableHead>
               <TableCell>Vehicle Model</TableCell>
               <TableCell>Mileage</TableCell>
               <TableCell>Year</TableCell>
               <TableCell>Price</TableCell>
               <TableCell><Button variant="text">View</Button></TableCell>
               <TableCell><Button variant="contained" color='error'>Remove</Button></TableCell>
             </TableHead>

             
           </Table>
      </div>
   </div>;

}

export default Admin;