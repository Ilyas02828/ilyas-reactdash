// src/components/Reports.js
import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function Reports() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., send data to the server)
  };

  return (
    <>
      <Typography paragraph>This is the Reports page.</Typography>
      <div className="w-1/2 h-full flex flex-col items-center justify-center p-10">
        <h1 className="font-medium text-center mb-8" style={{ fontSize: '50px' }}>
          Contact Us!
        </h1>
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
          <TextField 
            label="Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register('name', { required: 'Name is required' })} 
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
          <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address'
              }
            })} 
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField 
            label="Subject" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register('subject', { required: 'Subject is required' })}
            error={!!errors.subject}
            helperText={errors.subject ? errors.subject.message : ''}
          />
          <TextField 
            label="Message" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            multiline 
            rows={4} 
            {...register('message', { required: 'Message is required' })}
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ''}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default Reports;
