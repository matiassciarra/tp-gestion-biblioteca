//Aca puedo importar los modelos de sequelize

export const getPruebas = (req, res) => {
    res.send("obteniendo pruebas...");
};

export const createPrueba = (req, res) => {
    console.log(req.body);
    res.send("creando prueba");
};
