import React from 'react';
 // Asegúrate de tener un archivo CSS separado para los estilos
 import "../../assets/home/home.css";
export const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a la Biblioteca</h1>
      <button className="login-button">Iniciar Sesión</button>
    </div>
  );
};
