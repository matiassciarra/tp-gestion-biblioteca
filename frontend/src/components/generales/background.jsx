import { useEffect, useState } from 'react';
import './backgroudrandom.css'
export const Background = ({children}) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/file');
                const data = await response.json();
                setImageUrl(data.url);
            } catch (error) {
                console.error('Error fetching the image:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <section style={{ 
            width: '100%',
            height: '100vh', // Ajusta esto según tus necesidades
            backgroundSize: 'cover',
            backgroundImage: `url('../../../${imageUrl}')`,
            backgroundPosition: 'center'
        }}>
            {children}
        </section>
    );
};