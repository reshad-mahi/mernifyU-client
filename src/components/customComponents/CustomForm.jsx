import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

const CustomForm = ({ title, textFields, selectFields, onSubmit }) => {
  return (
    <Box component={Container} maxWidth="sm">
      <h2>{title}</h2>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {textFields.map((field, index) => (
          <TextField
            type="text"
            key={index}
            id="outlined-basic"
            label={field.label}
            variant="outlined"
            value={field.value}
            onChange={field.onChange}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
        {selectFields.map((field, index) => (
          <FormControl key={index} fullWidth>
            <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={field.label}
              value={field.value}
              onChange={field.onChange}
            >
              {field.options.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {' '}
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Box>

      <form onSubmit={onSubmit}>
        <Button variant="contained" sx={{ mt: 3 }} fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CustomForm;
