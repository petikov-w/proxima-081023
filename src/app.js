import React from 'react';
import {
     Route, RouterProvider, createBrowserRouter,
    createRoutesFromElements} from 'react-router-dom';
    
import { HomePage } from './pages/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/layout.jsx';
import { ThankYouPage } from './pages/ThankYouPage.jsx';
import { PolicyPage } from './pages/PolicyPage.jsx';
import { UserAgreementPage } from './pages/UserAgreementPage.jsx';


export const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />            
            <Route path="/policy" element={<PolicyPage />} />            
            <Route path="/useragreement" element={<UserAgreementPage />} />            
            <Route path="*" element={<NotFoundPage />} />            
        </Route>
    ));

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
