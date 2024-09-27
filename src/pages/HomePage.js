import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import LandingPage from "../components/LandingPage";
export default function HomePage() {
    return (
        <div className="container">
            <Banner />
            <LandingPage />
        </div>
)
}