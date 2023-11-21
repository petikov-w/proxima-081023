import { Outlet } from 'react-router-dom';
import React from 'react';
// import styled from 'styled-components';


// const Main = styled.div` 
//      min-height: calc(91.3vh - 85px - 22px);
//      padding-top: 1.5rem 0;    
// `;


const Layout = () => {
   
      return (
      <>    
            {/* <ThemeProvider theme={ThemeMui(theme)}>    */}
                  <Outlet />                         
            {/* </ThemeProvider> */}
    </>
    );
};

export { Layout };
 
 
 
