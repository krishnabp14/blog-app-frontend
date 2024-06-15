import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export type BlogCardProps = {
    id: number;
    image: string,
    title: string,
    description: string,
    buttonLabel: string
} 

const BlogCard:React.FC<BlogCardProps> = ({ id, image, title, description, buttonLabel }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/blog/${id}`}>
          <Button size="small" color="primary">
            {buttonLabel}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
