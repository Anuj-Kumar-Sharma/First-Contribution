import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MovieCard({movie}) {
    const { Title, Poster, Type, Year } = movie
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={Poster}
        title={Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      <Chip label={Type} />
      <Chip label={Year} />
      </CardActions>
    </Card>
  );
}
