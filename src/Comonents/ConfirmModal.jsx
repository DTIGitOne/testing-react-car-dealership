import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 140,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

export default function ConfirmRemoveModal({ item, itemState, setItemState }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRemoveItem = (id) => {
   const updatedData = itemState.filter((item) => item.id !== id);
   localStorage.setItem('carData', JSON.stringify(updatedData));
   setItemState(updatedData);
};

  return (
    <div>
      <Button variant="contained" color='error' onClick={handleOpen}>Remove</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col">
          <div className="flex justify-center w-full h-14 items-center">Are you sure you want to remove this item?</div>
          <div className='flex gap-3 justify-end items-end h-16'>
            <Button color='error' onClick={() => handleRemoveItem(item)}>Confirm </Button>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}