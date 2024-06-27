import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Definir __filename y __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getImages = (req, res) => {
    // Obtener el path completo al folder 'public'
    const folderPath = path.resolve(__dirname, '../../frontend/public/backgrounds/');

    try {
        // Leer el contenido del folder
        const files = fs.readdirSync(folderPath);

        

        const imageUrls = files.map((file) => {
            return {
                name: file,
                url: `/public/backgrounds/${file}`, // Ajusta esta URL según la ruta pública en tu servidor
            };
        });
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const randomImage = imageUrls[randomIndex];

        res.json(randomImage);

        res.json(randomImage);
    } catch (err) {
        console.error('Error leyendo el folder:', err);
        res.status(500).json({ error: 'No se pudo leer el folder' });
    }
};