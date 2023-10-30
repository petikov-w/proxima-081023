import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ButtonQuestion from '../assets/images/button-question.png';


const ButtonImage = styled.img`   
   width: 80%;
   cursor: pointer;
`;


export const Dialog2 = (props) => {
  const {activ, setActiv} = props;
       return (
          <>
            <Dialog open={activ}  onClick={()=>setActiv(false)}
             PaperProps={{
               sx: {
                 borderRadius:'20px',
                 width: '400px',
                 //display: 'flex',
                //  flexDirection: 'column',
                // alignItems: 'flex-start',
               },
             }
             
             }>
            <div onClick={e=> e.stopPropagation()}>
              <DialogTitle>Задайте свой вопрос</DialogTitle>
              <DialogContent>
                <TextField margin="dense" id="name" placeholder="ИМЯ" fullWidth
                InputProps={{ sx: { borderRadius:'14px' }}}
                 />
                <TextField margin="dense" id="telefon" placeholder="ТЕЛЕФОН"fullWidth
                 InputProps={{ sx: { borderRadius:'14px' }}} />
                <TextField margin="dense" 
                           id="question" 
                           placeholder="ВОПРОС"
                           rows={5}
                           rowsMax={10}
                           multiline
                           fullWidth
                           InputProps={{ sx: { borderRadius:'14px' }}} />
              </DialogContent>
              <DialogActions>
                <ButtonImage src={ButtonQuestion} onClick={()=>setActiv(false)}/>
              </DialogActions>
              </div>
            </Dialog>
          </>       
    );
  };