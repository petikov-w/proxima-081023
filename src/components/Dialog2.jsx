import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import axios from 'axios';

import {Link } from '@mui/material';

import ButtonQuestion from '../assets/images/button-question.png';



const api = 'https://api.proxima2.kroxdev.ru';

const ButtonImage = styled.img`   
   width: 100%;
   cursor: pointer;
`;

const titleSX = {
  fontFamily: 'RussoOne', 
  fontSize: '20px', 
  color: 'var(--master-color)', 
  textAlign: 'center',
};

const buttonSX = {
  background: `url(${ButtonQuestion})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',  
  width: '80%',
  height: '70px',
  cursor: 'pointer',
  // width : {xs: '60%', sm: '80%'},
  ':hover': {
   opacity: '0.7',
  },  
};


export const Dialog2 = (props) => {
  const navigate = useNavigate();

  const {activ, setActiv, setValues} = props;
  const [inputName, setInputName] = useState('');
  const [inputTelefon, setInputTelefon] = useState('');
  const [inputQuestion, setInputQuestion] = useState('');
  

  const inputNameHandler = (e) => {
        setInputName(e.target.value);
  };

  const inputTelefonHandler = (e) => {
    setInputTelefon(e.target.value);
  };

  const inputQuestionHandler = (e) => {
    setInputQuestion(e.target.value);
  };
  
  // const submitHandler = (event) => {
    const submitHandler = async(event) => {
        // event.preventDefault();
        console.log('-- name -->>> ',inputName);
        console.log('-- telefon -->>> ',inputTelefon);
        console.log('-- question -->>> ',inputQuestion);

        let formData = new FormData();
        formData.append('name', inputName);
        formData.append('telefon', inputTelefon);
        formData.append('question', inputQuestion);
        // axios.post(`${api}`, formData, { 'Content-Type': 'multipart/form-data' })
        // .then(function (response) {
        //     console.log('actions --->>> ', response.data);
        // })
        // .catch(function (error) {
        //     console.log('error --->>> ', error.data);
        // });


        try {
          // make axios post request
          const response = await axios({
            method: 'post',
            url: `${api}`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          console.log('== x x x ==');
        } catch(error) {
          console.log(error);
        }
        
      };

  //};

       return (
          <>
             <Dialog open={activ}  onClick={()=>setActiv(false)} 
             PaperProps={{ sx: {borderRadius:'20px', width: '400px'}}}>

            <form action="" onSubmit={submitHandler}>
            <div onClick={e=> e.stopPropagation()}>
              <DialogTitle>
                <Typography sx={titleSX}>Задайте свой вопрос</Typography>
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
                <Button sx={buttonSX} onClick={()=>{setActiv(false);
                                                    navigate('/thankyou')}} type="submit"></Button>                                
              </DialogActions>
              </div>
              </form>
            </Dialog>         
          </>       
    );
  };  


  //hashHistory.push(`/mySite/accountview?id=${account.AccountName}`)}




//   axios({ method: 'post',
//   url: `${api}`,
//   // url: `${api}/sendmail`,
//   data: formData,
//   headers: { 'Content-Type': 'multipart/form-data' }})
// .then(function (response) {
// console.log('actions --->>> ', response.data);
// })
// .catch(function (error) {
// console.log('error --->>> ', error.data);
// })



// return axios({
//   method: 'post',
//   url: `${process.env.REACT_APP_POST_URL}`,
//   data: formData,
//   headers: {'Content-Type': 'multipart/form-data' }
// }).then((data)=>{
//   console.log(data);
// })

// }