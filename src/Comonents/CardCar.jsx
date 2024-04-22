import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardCar(props) {
   
  return (
    <Card sx={{ maxWidth: props.max , minWidth: props.min}}>        
      <CardMedia
        sx={{ height: 140 }}
        image={props.ImageURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Brand + " " + props.Model}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {props.Year}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className=' flex justify-center'>
          {props.Euro}€
        </Typography>
      </CardContent>
      <CardActions className=' flex justify-center'>
        <Button size="medium" disabled={props.Disabled} ><Link to={`/car/${props.id}`}>View Details</Link></Button>
      </CardActions>
    </Card>
  );
}