import React from 'react'
import fs from 'fs';
import path from 'path';
export const Background = ({children}) => {  
// Especificar el path del folder
const folderPath = '../../../public/backgrounds'; // Cambia esto al path de tu folder

// Leer el contenido del folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.log('No se pudo leer el folder: ' + err);
  }

  // Iterar sobre cada archivo en el folder
  files.forEach(file => {
    // Obtener el path completo del archivo
    const filePath = path.join(folderPath, file);

    // Leer el contenido del archivo
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        return console.log('No se pudo leer el archivo: ' + err);
      }

      // Mostrar el contenido del archivo
      console.log(`Contenido de ${file}:`);
      console.log(content);
    });
  });
});
  return (
    <section>
        {children}
    </section>
  )
}
