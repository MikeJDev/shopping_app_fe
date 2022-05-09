import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoCompleteField({
  options,
  label,
  setValue,
  value,
  error,
  helperText,
}) {
  console.log('error:', error)
  console.log('helperText:', helperText)
  const handleChange = (e, value) => {
    if (value) {
      setValue(value.value);
    }
  }
  return (
    <Autocomplete
      id="autoComplete-box"
      options={options || []}
      sx={{ width: '100%', }}
      onChange={handleChange}
      renderInput={(params) => 
      <TextField
        {...params}
        label={label}
        error={error}
        helperText={helperText} 
      />
      }
      defaultValue={options.find((option) => option.value === value)}
    />
  );
}