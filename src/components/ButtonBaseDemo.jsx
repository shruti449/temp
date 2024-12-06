import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { products } from './data'
import Home from '../Home';
import { useNavigate } from 'react-router-dom';

const images = [
    {
        url: 'https://th.bing.com/th/id/OIP.g8vneWtyTfg20IlRwbwjWwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        title: 'MEN FASHION',
        width: '25%',
        id: 1,
    },
    {
        url: 'https://th.bing.com/th?id=OIP.rKxgX-1DoZhtASPPbNGDswAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
        title: 'WOMEN FASHION',
        width: '25%',
        id: 2,
    },
    {
        url: 'https://img.freepik.com/premium-photo/indian-traditional-antique-jewelry-stone-diamond-jewelry-ring-ai-generated_848094-3950.jpg',
        title: 'JEWELLERY',
        width: '25%',
        id: 3,
    },
    {
        url: 'https://jdcorporateblog.com/wp-content/uploads/2020/09/Home-Electronics.jpg',
        title: 'ELECTRONICS',
        width: '25%',
        id: 4,
    }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({

    position: 'relative',
    height: 300,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '5px solid black',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 12,
    right: 0,
    top: 50,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 12,
    right: 0,
    top: 50,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 12,
    right: 0,
    top: 50,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));



export default function ButtonBaseDemo() {
    // function handleClick(e) {
//const items = [...products]
        // console.log(e.target)
         console.log(`button clicked`)
        // if(images.id==4){
        //     
        //         const electronicItems=items.filter((item)=>item.category=='electronics')
        //     return(
        //         <ImageButton items={electronicItems} />
        //     )
        // }

    // have a look on state management. 
    //clicked button id is generated. no
    // use switch case and add condition of if(p==1) then display menFashion same for 2,3 and 4 resp.

    }
    // const nav=useNavigate()
    // nav("")
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.id}
                    // id={image.id}
                    style={{
                        width: image.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            // onClick={handleClick}
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={(theme) => ({
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: `calc(${theme.spacing(1)} + 6px)`,
                            })}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}
