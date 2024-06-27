import React, { useEffect, useState } from 'react';

export const Background = () => {
    

    return (
        <section style={{ 
            width: '100%',
            height: '100vh', // Ajusta esto según tus necesidades
            backgroundImage: url('../../../../backend/public/hola.jpg'),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        </section>
    );
};



