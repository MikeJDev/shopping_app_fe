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
  const handleChange = (e, value) => {
    if (value) {
      setValue(value.value);
    } else {
      setValue(0);
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
      value={options.find((option) => option.value === value)}
    />
  );
}