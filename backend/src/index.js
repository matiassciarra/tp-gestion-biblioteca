import app from "./app.js";
import { sequelize } from "../database/db.js";
const PORT = 3002 || process.env.PORT;

async function main() {
    try {
        //Autenticamos y sincronizamos a la base de datos
        await sequelize.sync({ force: false });

        console.log("Conexion a base de datos establecida correctamente");

        app.listen(PORT, () => {
            console.log(
                `Servidor corriendo correctamente, abre en http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "No ha sido posible conectarse a la base de datos",
            error
        );
    }
}

main();
