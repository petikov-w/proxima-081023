import React from 'react';
import {
    Route, RouterProvider, createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

// import { SinglePage } from './pages/SinglePage';
import { HomePage } from './pages/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/layout.jsx';
// import { PremierPage } from './pages/PremierPage';
// import { SerialPage } from './pages/SerialPage';
// import { MultPage } from './pages/MultPage';
// import { TopPage } from './pages/TopPage';

export const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />            
        </Route>
    ));

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};



// import React from 'react';
// import styled from 'styled-components';

// // import { device, size_screen } from '../src/components/device';

// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { AdvantagesBox } from './components/Advantages';
// import { HeroBox } from './components/Hero';


// const Main = styled.div` 
//      min-height: calc(91.3vh - 85px - 22px);
//      padding-top: 1.5rem 0;         
// `;

// export const App = () => {

//     return (
//         <>
//                 <Header />
//                 <Main>
//                     <HeroBox />
//                     <AdvantagesBox />
//                 </Main>
//                 <Footer />
//         </>
//     );
// };