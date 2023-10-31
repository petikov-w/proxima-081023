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
  // let formData = new FormData();
  //     formData.append('name', in_name.value);
  //     formData.append('telefon', in_telefon.value);
  //     formData.append('subject', "Заказ доставки газа");
     
  const ggy = ()=>{
  };
  const {activ, setActiv} = props;
       return (
          <>
            <Dialog open={activ}  onClick={()=>setActiv(false)} onSubmit={ggy} 
             PaperProps={{ sx: {borderRadius:'20px', width: '400px'}}}>
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
              <DialogActions sx={{ width: 'auto', display: 'flex', justifyContent: 'center' }}>
                <ButtonImage src={ButtonQuestion} type="submit" onClick={()=>setActiv(false)}/>
              </DialogActions>
              </div>
            </Dialog>
          </>       
    );
  };