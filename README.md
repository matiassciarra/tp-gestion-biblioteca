# Gestion de Libros de Biblioteca

##Que es este proyecto
Este proyecto es un trabajo practico final grupal de la materia Desarrollo de Software. Desarrollo de software es una materia que se cursa en tercer año de la carrera Ingenieria en Sistemas de informacion, es cuatrimestral; lo que quiere decir que todo lo que se ve en este proyecto fue aprendido en 4 meses desde 0, solo con bases en algoritmos y estructura de datos.

##En que se basa el proyecto
Se basa en la gestion de una biblioteca: gestiona prestamos, libros, autores, usuarios, y generos de libros, consta de un sistema de login y una jerarquia de 2 roles: admin y usuario, el admin tiene permitido todo, el usuario solo puede consultar libros, autores, prestamos y tambien solicitar prestamos.

##Que aprendimos en este proyecto
Aprendimos manejo de Git, solucion de conflictos, HTML, CSS, Bootstrap, Javascript, React, librerias de React como React Router Dom y React Hook Form, aspectos de seguridad como JWT y cookies. En el backend aprendimos Express JS, Rutas y middlewares, Sequelize de ORM, utilizamos la base de datos SQLITE 3, aprendimos a crear diagramas DER, a prototipar interfaces en Figma, y hacer solicitudes REST en Postman. Pero lo mas importante fue que dividimos bien el trabajo y trabajamos bien en equipo.

##Que podriamos haber mejorado del proyecto
Mejorar funcionalidades de filtrado.
Mejorar diseño consistente entre paginas.
Aplicar paginacion.

##Que hice yo en este proyecto
Hice las bases del backend, utilice Express js como framework del servidor, y una base de datos Sequelize.
Cree el modelo de los autores, y los controladores para su REST API.
El el frontend utlizamos React, cree la estructura de carpetas y utilizamos React Router Dom para manejar el enrutamiento,
cree la pantalla de los libros incluidos todos sus filtros, la parte de los formularios de creacion, modificacion. Y el eliminar libro con sus respectivas validaciones.
Sistema de Log-in con JWT almacenado en Cookies del ordenador

## Como installar proyecto
en la carpeta tanto del **backend** como del **frontend** instala las dependecias  

```bash
pnpm install
```

o 

```bash
npm i
```

### Como abrir proyecto
###### Entra a la carpeta backend y ejecuta

```bash
pnpm start
```

o usa

```bash
npm start
```

###### Luego ve a la carpeta frontend y ejecuta
```bash
npm run dev
```

## Imagen Entidad Relacion
![image info](utils/diagrams/DER%20basico.png)

[Click aca para ver el diagrama en pagina web](https://dbdiagram.io/d/libros-DDS-666258899713410b05f98bbe)

###### Link Repositorio
[Repositorio] https://labsys.frc.utn.edu.ar/gitlab/desarrollo-4m/tp-desarrollobiblioteca
