import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

import ButtonQuestion from '../assets/images/button-question.png';




const ButtonImage = styled.img`   
   width: 80%;
   cursor: pointer;
`;


export const Dialog2 = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputTelefon, setInputTelefon] = useState('');
  const [inputQuestion, setInputQuestion] = useState('');
  // let formData = new FormData();
  //     formData.append('name', in_name.value);
  //     formData.append('telefon', in_telefon.value);
  //     formData.append('subject', "Заказ доставки газа");

  const inputNameHandler = (e) => {
        setInputName(e.target.value);
  };

  const inputTelefonHandler = (e) => {
    setInputTelefon(e.target.value);
  };

  const inputQuestionHandler = (e) => {
    setInputQuestion(e.target.value);
  };
  
  const submitHandler = (event) => {
        event.preventDefault();
        console.log('-- name -->>> ',inputName);
        console.log('-- telefon -->>> ',inputTelefon);
        console.log('-- question -->>> ',inputQuestion);
  };

   
  const {activ, setActiv} = props;
       return (
          <>
          
          <Dialog open={activ}  onClick={()=>setActiv(false)} 
             PaperProps={{ sx: {borderRadius:'20px', width: '400px'}}}>

            <form action="" onSubmit={submitHandler}>
            <div onClick={e=> e.stopPropagation()}>
              <DialogTitle>
                <Typography sx={{ fontFamily: 'RussoOne', fontSize: '20px', color: 'var(--master-color)', textAlign: 'center'}}>
                  Задайте свой вопрос
                </Typography>
              </DialogTitle>
              <DialogContent>
                <TextField margin="dense" id="name" placeholder="ИМЯ" fullWidth sx={{ borderColor: 'red'}} 
                InputProps={{ sx: { borderRadius:'14px' }}} onChange={inputNameHandler}
                 />
                <TextField margin="dense" id="telefon" placeholder="ТЕЛЕФОН"fullWidth
                 InputProps={{ sx: { borderRadius:'14px' }}} onChange={inputTelefonHandler}/>
                <TextField margin="dense" 
                           id="question" 
                           placeholder="ВОПРОС"
                           rows={5}
                           rowsmax={10}
                           multiline
                           fullWidth
                           InputProps={{ sx: { borderRadius:'14px' }}} 
                           onChange={inputQuestionHandler}/>
              </DialogContent>
              <DialogActions sx={{ width: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" variant="contained" color="primary" onClick={()=>setActiv(false)}>
                  Signup
                </Button>
                {/* <ButtonImage src={ButtonQuestion} type="submit" /> */}
                {/* <ButtonImage src={ButtonQuestion} type="submit" onClick={()=>setActiv(false)}/> */}
              </DialogActions>
              </div>
              </form>
            </Dialog>
          
            
          </>       
    );
  };