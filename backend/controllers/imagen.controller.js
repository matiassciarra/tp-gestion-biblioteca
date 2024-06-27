import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Definir __filename y __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getImages = (req, res) => {
    // Obtener el path completo al folder 'public'
    const folderPath = path.resolve(__dirname, '../public');

    try {
        // Leer el contenido del folder
        const files = fs.readdirSync(folderPath);

        const imageFiles = files.filter((file) => {
            return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'].includes(path.extname(file).toLowerCase());
        });

        if (imageFiles.length === 0) {
            return res.status(404).json({ error: 'No se encontraron imágenes en la carpeta' });
        }

        // Seleccionar un elemento al azar del array
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const randomImage = imageFiles[randomIndex];

        const randomImagePath = path.join(folderPath, randomImage);
        res.sendFile(randomImagePath);
    } catch (err) {
        console.error('Error leyendo el folder:', err);
        res.status(500).json({ error: 'No se pudo leer el folder' });
    }
};
