import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import Header from './components/Header';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/:id" element={<UserPage />} />
            </Routes>
        </>
    );
}
