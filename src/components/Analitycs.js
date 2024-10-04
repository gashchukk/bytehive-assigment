import React from 'react';
import "./Analitycs.css"
export default function Analitycs() {
    return (
        <div className="impact-section">
            <h2 style={{ display: "flex", fontFamily:" 'Inter', sans-serif ",
                fontSize: "48px",
                fontWeight: "500"}}>See our impacts in number</h2>
            <div className="impact-grid">
                <div className="impact-item">
                    <p className="impact-label">People</p>
                    <p className="impact-number">200+</p>
                </div>
                <div className="impact-item">
                    <p className="impact-label">Our users the world</p>
                    <p className="impact-number">50K</p>
                </div>
                <div className="impact-item">
                    <p className="impact-label">Successful projects</p>
                    <p className="impact-number">100%</p>
                </div>
            </div>
        </div>

    )
}