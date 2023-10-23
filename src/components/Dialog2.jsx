import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Dialog2 = (props) => {
  const {activ, setActiv} = props;
       return (
          <>
            <Dialog open={activ}  onClick={()=>setActiv(false)}>
            <div onClick={e=> e.stopPropagation()}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <TextField margin="dense" id="name" fullWidth />
                <TextField margin="dense" id="telefon" fullWidth />
              </DialogContent>
              <DialogActions>
                {/* <Button onClose={() => setOpen(false)}>Отмена</Button> */}
                <Button onClick={()=>setActiv(false)}>ОК</Button>
              </DialogActions>
              </div>
            </Dialog>
          </>       
    );
  };