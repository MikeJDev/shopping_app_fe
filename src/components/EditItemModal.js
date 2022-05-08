import  React, { useState, useEffect } from 'react';
// MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import dataUtility from '../utilities/dataUtility';
// redux
import { useDispatch } from 'react-redux'
import { setReload } from '../redux/itemSlice';

//custom 
import TextBox from './TextBox';
import AutoCompleteField from './AutoCompleteField';

export default function EditItemModal({
  open,
  handleClose,
  item,
}) {
  const dispatch = useDispatch(); // for dispatching actions
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isPurchased, setIsPurchased] = useState(false);
  const [quantityOptions] = useState([ // these shoul come from DB table, so no deployment is needed to change
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ]);

  const handleChecked = (e) => {
    setIsPurchased(e.target.checked);
  };

  const editItem = async () => {
    const editedItem = {
      name,
      description,
      quantity,
      isPurchased,
    };
    await dataUtility('put', `/${item.id}`, editedItem)
      .then((res) => {
      if (res.status === 200) {
        dispatch(setReload(true)); // set reload to true
        handleClose();
      }
      });
  };

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setQuantity(item.quantity);
    setIsPurchased(item.isPurchased === 0 ? false : true);
    return () => {
      setName('');
      setDescription('');
      setQuantity('');
      setIsPurchased(false);
    }
  }, [item]);
  
  return (
    <Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"SHOPPING LIST"}
        </DialogTitle>
        <DialogContent sx={{
          marginBottom: '10rem',
        }}>
          <Typography sx={{
            fontSize: '1.2rem',
          }}>
            Edit an item
          </Typography>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              marginBottom: '1rem',
            }}>
            Edit your item below
          </DialogContentText>
          <TextBox
            label="Item Name"
            setText={setName}
            multiline={false}
            value={name}
          />
          <TextBox
            label="Description"
            setText={setDescription}
            multiline={true}
            value={description}
            showCharacterCount
          />
          <AutoCompleteField
            label={'How Many?'}
            options={quantityOptions}
            setValue={setQuantity}
            value={quantity}
          />
          <FormGroup>
            <FormControlLabel control={(
              <Checkbox
                onClick={handleChecked}
                size="small"
                checked={isPurchased}
              />
            )}
            sx={{
              color: 'gray'
            }}
            label="Purchased" />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editItem} autoFocus variant="contained">
            Save Item
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
