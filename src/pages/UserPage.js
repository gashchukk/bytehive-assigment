import React from 'react';
import { useParams } from 'react-router-dom';

export default function UserPage() {
    let { id } = useParams();
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <h1>Hello, this should be page: {id}</h1>
            <p>Right now it is under construction. Sorry for the inconvenience.</p>
            <a href="/">Home</a>
        </div>
    );
}
