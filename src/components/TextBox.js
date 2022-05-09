import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextBox({
  label,
  setText,
  multiline,
  value,
  showCharacterCount,
  error,
  helperText
}) {
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return (
    <Box
      sx={{
        width: '25vw',
        maxWidth: '100%',
        marginBottom: '1rem',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        multiline={multiline}
        maxRows={multiline ? 5 : 1}
        rows={multiline ? 5 : 1}
        inputProps={{ maxLength: 100 }}
        helperText={showCharacterCount ? `${value?.length} / 100` : helperText}
        onChange={handleChange}
        sx={{
          width: '100%',
        }}
        value={value}
        error={error}
      />
    </Box>
  );
}
