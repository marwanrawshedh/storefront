import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { cat, dog, buy } from '../redux/action';
function Products(props) {
    return (
        <div style={{ marginTop: "40px" }} >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  
   
             {props.cart.dog.active&&
             props.cart.dog.product.map(d=>{return(
              <Grid item xs={2} sm={4} md={4} >
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${d.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Dog Name:{d.name}<br/>
              Price:{d.price}<br/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          description: {d.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={()=>props.buy(d)} variant="contained" >Add</Button>
    </Card>
    </Grid>)})}
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {props.cart.cat.active&&props.cart.cat.product.map(d=>{return(<Grid item xs={2} sm={4} md={4} >
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${d.image}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Cat Name:{d.name}<br/>
              Price:{d.price}<br/>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          description: {d.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={()=>props.buy(d)} variant="contained" >Add</Button>
    </Card></Grid>)})}
    </Grid>
        </div>
    );
}
const mapStateToProps = state => ({
    cart: state.cart,
  });
  
  const mapDispatchToProps = {
    cat,
    dog,
    buy
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Products)
