import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { products } from './components/data'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';


const ItemCard = ({ item }) => {
  function handleClick(e) {
    const p=e.target.id
    console.log(`Button Clicked for id ${p}`)
    alert("Added to cart")
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id={item.id} onClick={handleClick}>Add To Cart</Button>

      </CardActions>
    </Card>
  );
};
const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
function Home() {

  const items = [...products]
  // const electronicItems=items.filter((item)=>item.category=='electronics')
  return (
    <>
      <div>
        <ItemList items={items} />
        {/* <SizeAvatars></SizeAvatars> */}
      </div>
    </>
  )
}

export default Home
