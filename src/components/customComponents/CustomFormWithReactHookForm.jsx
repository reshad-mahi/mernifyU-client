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

const CustomFormWithReactHookForm = ({
  title,
  textFields,
  selectFields,

  handleSubmit,
  register,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {textFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            <input type="text" {...register(field.name)} />
          </div>
        ))}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
          {selectFields.map((field, index) => (
            <FormControl key={index} fullWidth>
              <InputLabel id="demo-simple-select-label">
                {field.label}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={field.label}
                {...register(field.name)}
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
        <Button variant="contained" sx={{ mt: 3 }} fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CustomFormWithReactHookForm;
