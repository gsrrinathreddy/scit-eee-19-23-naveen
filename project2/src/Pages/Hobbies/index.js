import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.Bk7GXRGxqrm78AhqJUpaJwHaFD?pid=ImgDet&rs=1',
    title: 'Reading books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'http://giwaconnect.com/giwa-talk/wp-content/uploads/2021/02/Solo-Travel-in-Nature-acbfea52bfaf.jpg',
    title: 'Travelling',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Music',
    
  },
  {
    img: 'https://assets.telegraphindia.com/telegraph/2021/May/1622061272_cricket.jpg',
    title: 'Crikect',
    
    cols: 2,
  },
  {
    img: 'https://psn-shop.imgix.net/media/wysiwyg/Untitled-1_Artboard_1.jpg?auto=format&lossless=1',
    title: 'Cycling',
    
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpRZIeCBH5jPVx0Q3TKbLIAobnlJ-qUXoOA&usqp=CAU',
    title: 'Fitness',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    
  },
  {
    img: 'https://images.hindustantimes.com/img/2022/09/28/550x309/D_1664342861066_1664342861276_1664342861276.jpg',
    title: 'Badminton',
    
  },
  {
    img: 'https://www.mpl.live/blog/wp-content/uploads/2021/01/shutterstock_1294275547-scaled.jpg',
    title: 'Carrom',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://static.photocdn.pt/images/articles/2019/04/30/what_is_photography-1.webp',
    title: 'Photography',
    
  },
  {
    img: 'https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg',
    title: 'Video Gaming',
    
  },
  {
    img: 'https://www.drivespark.com/img/2022/10/2023-bmw-s-1000-rr-running-shot-1664612002.jpg',
    title: 'Bike Riding',
  
    cols: 2,
  },
];