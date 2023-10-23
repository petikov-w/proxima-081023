import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Dialog2 = (props) => {
  const {activ} = props;
    
  const [open, setOpen] = useState(false);  

  
  useEffect(()=>{ setOpen(activ);
    console.log('---open--:>> ', open);
                 console.log('---activ--:>> ', activ) }, []);

     
  const handleClose = () => {
    setOpen(false);
  };

      return (
      <div>       
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
          <TextField
              // autoFocus
              margin="dense"
              id="name"
              // label="Email Address"
              // type="email"
              fullWidth
              // variant="standard"
            />
            <TextField
              // autoFocus
              margin="dense"
              id="name"
              // label="Email Address"
              // type="email"
              fullWidth
              // variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClose={() => setOpen(false)}>Отмена</Button>
            <Button onClose={() => setOpen(false)}>ОК</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }