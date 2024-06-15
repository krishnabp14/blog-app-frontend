import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

type BlogFormData = {
  title: string;
  description: string;
  content: string;
  authorName: string;
  category: string; // Adding category field to BlogFormData
};

const CreateBlogForm = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    description: '',
    content: '',
    authorName: '',
    category: '', // Initialize category as an empty string
  });

  const categories = ['Technology', 'Travel', 'Food', 'Fashion']; // Example categories

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string | undefined; value: unknown; }>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Add logic to handle submission (e.g., send data to backend)
    // Clear form fields if needed
    setFormData({
      title: '',
      description: '',
      content: '',
      authorName: '',
      category: '', // Reset category after submission
    });
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '25px' }}>
      <Typography variant="h5" gutterBottom>
        Create Blog Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Title"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Content"
              variant="outlined"
              multiline
              rows={4}
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Author Name"
              variant="outlined"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={formData.category}
                onChange={handleChange}
                label="Category"
                name="category"
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Create Blog
        </Button>
      </form>
    </Paper>
  );
};

export default CreateBlogForm;
